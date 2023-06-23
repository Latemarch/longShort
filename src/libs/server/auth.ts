import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_ID!!,
			clientSecret: process.env.GOOGLE_OAUTH_SECRET!!,
		}),
	],
	callbacks: {
		async session({ session, token }) {
			// console.log("session", session);
			// console.log("token", token);
			return session;
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
};
