import prisma from "@/libs/client";
import { NextResponse } from "next/server";

export async function POST(res: Response, req: Request) {
	return NextResponse.json({ data: "hellow" });
}
