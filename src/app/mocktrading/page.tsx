import { Suspense } from "react";
import dynamic from "next/dynamic";
import HistoryPannel from "./compoenents/HistoryPannel";
import { getCandle, getRandomInt } from "@/libs/client/utils";
const ChartContainer = dynamic(() => import("./compoenents/ChartContainer"), {
	ssr: false,
});

type candles = number[][];
export default async function mocktraiding() {
	const openTime = getRandomInt(100, 1239);
	const fileNumber = getRandomInt(1, 64);
	const candles = await fetch(`http://localhost:3000/api/data/${fileNumber}`) //
		.then((res) => res.json())
		.then((data) => data.data);
	// const candles = (await getCandle()) as candles;

	return (
		<section className="p-4">
			<Suspense fallback={<div>Loading...</div>}>
				<ChartContainer candles={candles} openTime={openTime} />
			</Suspense>
			<HistoryPannel />
		</section>
	);
}
