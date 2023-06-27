import client from "@/libs/client/client";
import withSession from "@/libs/server/withSession";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
	return withSession(async (user: any) => {
		const email = user?.email as string;
		const data = await client.user.findUnique({
			where: { email },
			select: { balance: true },
		});
		return NextResponse.json({ ok: true, data });
	});
}

export async function POST(req: Request, res: Response) {
	const balance = await req.json();
	return withSession(async (user: any) => {
		const email = user?.email as string;
		console.log("updatebalance", balance);

		const result = await client.user.update({
			where: { email },
			data: { balance },
		});
		return NextResponse.json({ ok: true, result });
	});
}
