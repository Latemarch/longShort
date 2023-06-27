import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import addUser from "../client/addUser";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_ID!!,
			clientSecret: process.env.GOOGLE_OAUTH_SECRET!!,
		}),
	],
	callbacks: {
		async signIn({ user }) {
			console.log("user", user);
			return true;
		},
		async session({ session, token }) {
			addUser(token.email);
			return session;
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
};
