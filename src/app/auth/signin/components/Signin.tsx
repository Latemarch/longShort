"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";

type Props = {
	providers: Record<string, ClientSafeProvider>;
	callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
	return (
		<div className="flex justify-center items-center">
			{Object.values(providers).map(({ name, id }) => (
				<div key={name}>
					<button onClick={() => signIn(id, { callbackUrl })}>
						Sign in with {name}
					</button>
				</div>
			))}
		</div>
	);
}
