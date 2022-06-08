import NextAuth from 'next-auth';
import { verifyPassword } from 'helpers/auth';
import { connectToDatabase } from 'helpers/db';
import CredentialsProvider from "next-auth/providers/credentials";

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
        password: { label: "password", type: "password" },
        verificationCode: { label: "verificationCode", type: "text" }
      },
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email
        });
        console.log(user)
        console.log('xxxxxxxxxxxxx')
        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email, role: user.role, id: user._id };

      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.accessToken = token.accessToken
      console.log(session)
      console.log(user)
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
});