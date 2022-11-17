import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import {
  API_AUTH_LOGIN_SCHOOL,
  API_AUTH_JWT_REFRESH,
  API_AUTH_USERS_ACCESS,
} from "@constants/endpoints";
import parseResponseError from "@utils/parseResponseError";

const expired = 5 * 60 * 1000; //5 minut
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req):Promise<any> {
        const _axios = axios.create();
        let accessData, userData;
        try {
          accessData = await _axios.post(`${process.env.API_URL}${API_AUTH_LOGIN_SCHOOL}`, credentials);
          const { user } = accessData.data;
          userData = await _axios.get(`${process.env.API_URL}${API_AUTH_USERS_ACCESS}/${user.id}`, {
            headers: {
              Authorization: `JWT ${accessData.data.token}`,
            },
          });
        } catch (err) {
          throw new Error(parseResponseError(err));
        }
        return {token:accessData.data.token, user: userData.data};
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: 'auth/error',
    signOut: "/auth/login",
  },
  callbacks: {
    async jwt({ user }: any) {
      // Persist the OAuth access_token and or the user id to the token right after signin
     /*  if (token?.token) {
        return {
          /* accessToken: token?.token?.access,
          refreshToken: token?.token?.refresh,
          user: token?.userData,
          accessTokenExpires: Date.now() + expired, 
        }; */
     console.log("....................................token .............................");
     console.log(user);
     console.log("....................................fim token .............................");
       return {token: user.token, user};
    },
    session({ session, token, user }) {
      console.log(session, token, user);
      return session // The return type will match the one returned in `useSession()`
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  events: {
    signIn: async () => {
      console.timeEnd("Login");
    },
  },
  debug: true,
};
export default NextAuth(authOptions);
