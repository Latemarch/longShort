"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
	const { data: session } = useSession();
	console.log(session);
	return (
		<div>
			{session ? (
				<button onClick={() => signOut()}>Out</button>
			) : (
				<button onClick={() => signIn()}>In</button>
			)}
		</div>
	);
}
