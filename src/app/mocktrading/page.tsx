import dynamic from "next/dynamic";
import HistoryPannel from "./compoenents/HistoryPannel";
import { getRandomInt } from "@/libs/client/utils";
import ButtonContainer from "./compoenents/ButtonContainer";
import MyWallet from "./compoenents/MyWallet";
import { getCandles } from "@/libs/server/fetchingFtns";
const ChartContainer = dynamic(() => import("./compoenents/ChartContainer"), {
	ssr: false,
});

const url = process.env.NEXT_PUBLIC_API_URL!!;
// type candles = number[][];
export default async function mocktraiding() {
	const openTime = getRandomInt(100, 1239);
	const fileNumber = getRandomInt(1, 64);
	// const candles = await fetch(`${url}/api/data/${fileNumber}`)
	// 	.then((res) => res.json())
	// 	.then((data) => data.data);
	// const candles = (await getCandle()) as candles;
	const candles = await getCandles(`${url}/api/data/${fileNumber}`);

	return (
		<section className="h-full p-4 md:flex md:gap-3">
			<ChartContainer candles={candles} openTime={openTime} />
			<div className="flex flex-col w-full">
				<div className="mb-4 mt-2">
					<MyWallet />
				</div>
				<ButtonContainer />
				<HistoryPannel />
			</div>
		</section>
	);
}
