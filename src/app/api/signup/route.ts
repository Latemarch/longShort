import client from "@/libs/client/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
	const email = await req.json();

	const exsitingUser = await client.user.findUnique({
		where: { email },
	});

	if (exsitingUser) {
		console.log("user is already exists");
		return new Response("User already exists", { status: 409 });
	}

	const result = await client.user.create({
		data: {
			email,
		},
	});
	return NextResponse.json({ ok: true, result });
}
