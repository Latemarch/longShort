import prisma from "@/libs/client/client";
import { btcusd } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(res: Response, req: Request) {
	console.log("get data");
	console.log(req);
	return NextResponse.json({ data: "hellow" });
}

export async function POST(res: Response, req: Request) {
	const { name, timeOpen, timeClose, data } = (await res.json()) as btcusd;

	const exsitingFile = await prisma.btcusd.findUnique({
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

	const result = await prisma.btcusd.create({
		data: {
			name,
			timeClose: String(timeClose),
			timeOpen: String(timeOpen),
			data,
		},
	});
	return NextResponse.json({ ok: true, result });
}
