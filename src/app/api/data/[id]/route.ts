import client from "@/libs/client/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params: { id } }: { params: { id: string } }
) {
	const data = await client.btcusd.findUnique({
		where: {
			id: Number(id),
		},
	});

	return NextResponse.json(data);
}
