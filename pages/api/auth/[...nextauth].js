import NextAuth from "next-auth";
import { verifyPassword } from "helpers/auth";
import { connectToDatabase } from "helpers/db";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "helpers/mongodb";

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
      adapter: MongoDBAdapter(clientPromise),
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const userObj = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!userObj) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          userObj.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
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
      console.log(credentials);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log(user);
      console.log(session);
      console.log(token);
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
