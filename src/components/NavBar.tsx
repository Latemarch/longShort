"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
	const { data: session } = useSession();
	return (
		<div className="flex justify-around">
			<Link href="/">Home</Link>
			<Link href="/mocktrading"> MOCK</Link>
			{session ? (
				<button onClick={() => signOut()}>Out</button>
			) : (
				<button onClick={() => signIn()}>In</button>
			)}
		</div>
	);
}
