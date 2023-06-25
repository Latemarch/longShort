import client from "@/libs/client/client";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	res: Response,
	{ params: { id } }: { params: { id: string } }
) {
	const data = await client.btcusd.findUnique({
		where: {
			id: Number(id),
		},
	});

	return NextResponse.json(data);
}
