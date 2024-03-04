import type { NextAuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/db";
import { compare } from "bcryptjs";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "user name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<string, string> | undefined
      ): Promise<any | null> {
        try {
          if (!credentials?.username || !credentials?.password) {
            return null;
          }

          const user = await prisma.users.findMany({
            where: {
              username: credentials?.username,
            },
          });
          // console.log("user", user,)
          if (user.length == 0) {
            return null;
          }

          if (user.length > 0) {
            const user1 = user[0];
            const tmpPassword = credentials?.password;
            const userPassword = user1?.password;
            const passwordsMatch = await compare(tmpPassword, userPassword);
            if (!passwordsMatch) {
              return null;
            }
          }

          return {
            userid: user[0].userid,
            staffid: user[0].staffid,
            username: user[0].username,
            role: user[0].role,
          };
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          userid: token.userid,
          staffid: token.staffid,
          username: token.username,
          role: token.role,
          // randomKey: token.randomKey
        },
      };
    },
    jwt: ({ token, user }) => {
      // console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          userid: u.userid,
          staffid: u.staffid,
          username: u.username,
          role: u.role,
        };
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
