import client from "@/libs/client/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
	return NextResponse.json({ ok: true });
}
export async function POST(req: Request, res: Response) {
	const { name, timeOpen, timeClose, data } = await req.json();

	const exsitingFile = await client.btcusd.findUnique({
		where: { timeOpen: String(timeOpen) },
	});

	if (exsitingFile) {
		console.log(`file is already exsist ${timeOpen}`);
		return new Response(`File is already exsist ${timeOpen}`, {
			status: 409,
		});
	}
	if (!data) {
		console.log("Data is not exsist");
		return new Response("Data is not exsist", {
			status: 400,
		});
	}

	const result = await client.btcusd.create({
		data: {
			name,
			timeClose: String(timeClose),
			timeOpen: String(timeOpen),
			data,
		},
	});
	return NextResponse.json({ ok: true, result });
}