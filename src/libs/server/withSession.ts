import { getServerSession } from "next-auth";

type Props = {
	handler: (req: Request, res: Response) => void;
};
export default async function withSession(handler: any) {
	const session = await getServerSession();
	const user = session?.user;
	if (!user) {
		return new Response("Unauthorized", { status: 401 });
	}
	return handler(user);
}
