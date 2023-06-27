import dynamic from "next/dynamic";
import HistoryPannel from "./compoenents/HistoryPannel";
import { getCandle, getRandomInt } from "@/libs/client/utils";
import ButtonContainer from "./compoenents/ButtonContainer";
import MyWallet from "./compoenents/MyWallet";
const ChartContainer = dynamic(() => import("./compoenents/ChartContainer"), {
	ssr: false,
});

type candles = number[][];
export default async function mocktraiding() {
	const openTime = getRandomInt(100, 1239);
	// const fileNumber = getRandomInt(1, 64);
	// const candles = await fetch(`http://localhost:3000/api/data/${fileNumber}`, {
	// 	cache: "no-store",
	// })
	// 	.then((res) => res.json())
	// 	.then((data) => data.data);
	const candles = (await getCandle()) as candles;

	return (
		<section className="p-4 md:flex md:gap-3">
			<ChartContainer candles={candles} openTime={openTime} />
			<div className="w-full">
				<div className="mb-4 mt-2">
					<MyWallet />
				</div>
				<ButtonContainer />
				<HistoryPannel />
			</div>
		</section>
	);
}
