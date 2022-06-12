import NextAuth from "next-auth";
import { verifyPassword } from "helpers/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import users from "models/users";
import dbConnect from "helpers/dbConnect";

export default NextAuth({
  session: {
    //strategy: "database",
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: 'nirosh'/* Please use `process.env.NEXTAUTH_SECRET` */,
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
        const userObj = await users.findOne({ email: credentials.email }).exec();

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
          email: userObj.email,
          id: userObj._id,
          name:"yyyyyy",
          role: 'admin',
          image: 'image'
        };
        return user
      }
    }),
  ],
  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
