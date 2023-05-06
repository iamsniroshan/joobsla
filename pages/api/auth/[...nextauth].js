import NextAuth from "next-auth";
import { verifyPassword } from "helpers/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import users from "models/users";
import dbConnect from "helpers/dbConnect";

const MAX_SESSION_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days
const SECRET_KEY = process.env.NEXTAUTH_SECRET || 'default_secret';


export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: MAX_SESSION_AGE_SECONDS,
  },
  secret: SECRET_KEY,
  jwt: {
    encode: async ({ secret, token }) => {
      return jwt.sign(token, secret);
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token, secret);
    },
  },
  providers: [
    CredentialsProvider({
      //adapter: MongoDBAdapter(clientPromise),
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {

        await dbConnect();
        const userObj = await users.findOne({ email: credentials.email });

        if (!userObj) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          userObj.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        const user = {
          id: userObj._id.toString(),
          name: userObj.name,
          email: userObj.email,
          image: userObj.image,
          role: userObj.role // Assuming the user role is stored in the userObj
        };
      
        return user;
      }
    }),
  ],
  callbacks: {
    async jwt({ token,account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user}) {
      session.user.id = token.sub;
      session.user.role = JSON.stringify(user);
      return session;
    },
    async signIn() {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    }
  },
});
