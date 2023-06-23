import { getServerSession } from "next-auth";
import Signin from "./components/Signin";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
	searchParams: {
		callbackUrl: string;
	};
};
export default async function page({ searchParams: { callbackUrl } }: Props) {
	const session = await getServerSession();
	if (session) {
		redirect("/");
	}
	const providers = (await getProviders()) ?? {};
	return <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />;
}
