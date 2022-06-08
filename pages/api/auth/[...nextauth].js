import NextAuth from 'next-auth';
import { verifyPassword } from 'helpers/auth';
import { connectToDatabase } from 'helpers/db';
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

export default NextAuth({
  session: {
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const userObj = await usersCollection.findOne({
          email: credentials.email
        });

        if (!userObj) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          userObj.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        const user = { email: userObj.email, role: userObj.role, id: userObj._id };
        return  user

      },
    }),
  ],
  secret: 'nirosh'/* Please use `process.env.NEXTAUTH_SECRET` */,
  jwt: {
    encode: async ({ secret, token }) => {
      return jwt.sign(token, secret);
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token, secret);
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
});