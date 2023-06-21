import prisma from "@/libs/client/client";
import { btcusd } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(res: Response, req: Request) {
	console.log("get data");
	console.log(req);
	return NextResponse.json({ data: "hellow" });
}

export async function POST(res: Response, req: NextRequest) {
	const form = await req.formData();
	console.log("post data");
	// const resq = await req.json();
	console.log(form);
	// const { name, timeClose, timeOpen, data } = req.body as any;
	// prisma.btcusd.create({
	// 	data: {
	// 		name,
	// 		timeClose,
	// 		timeOpen,
	// 		data,
	// 	},
	// });
	return NextResponse.json({ data: "hellow" });
}
