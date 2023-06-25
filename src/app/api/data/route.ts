import client from "@/libs/client/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextRequest) {
	const { name, timeOpen, timeClose, data } = await res.json();

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
