import dynamic from "next/dynamic";
import HistoryPannel from "./compoenents/HistoryPannel";
import { getCandle, getRandomInt } from "@/libs/client/utils";
import ButtonContainer from "./compoenents/ButtonContainer";
import MyWallet from "./compoenents/MyWallet";
import { getServerSession } from "next-auth";
import { getUserBalance } from "@/libs/server/fetchingFtns";
const ChartContainer = dynamic(() => import("./compoenents/ChartContainer"), {
	ssr: false,
});

const url = process.env.NEXT_PUBLIC_API_URL!!;
type candles = number[][];
export default async function mocktraiding() {
	const openTime = getRandomInt(100, 1239);
<<<<<<< Updated upstream
	// const fileNumber = getRandomInt(1, 64);
	// const candles = await fetch(`${url}/api/data/${fileNumber}`)
	// 	.then((res) => res.json())
	// 	.then((data) => data.data);
	const candles = (await getCandle()) as candles;
=======
	const fileNumber = getRandomInt(1, 64);
	const candles = await fetch(
		`https://long-short.vercel.app/api/data/${fileNumber}`
	)
		.then((res) => res.json())
		.then((data) => data.data);
	// const candles = (await getCandle()) as candles;
>>>>>>> Stashed changes

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
