"use client";
import { useState } from "react";
import CandleChart from "./CandleChart";
import ButtonContainer from "./ButtonContainer";
import { useSelector } from "react-redux";
import MyWallet from "./MyWallet";

type Props = {
	candles: number[][];
	openTime: number;
};
export default function ChartContainer({ candles, openTime }: Props) {
	const [startPoint, setStartPoint] = useState(openTime);
	const { wallet } = useSelector((state: any) => state.wallet);

	const candleObj = candles.map((candle, idx) => ({
		x: idx + 1 - openTime,
		y: [
			candle[1].toFixed(0),
			candle[2].toFixed(0),
			candle[3].toFixed(0),
			candle[4].toFixed(0),
		],
	}));
	const data = candleObj.slice(startPoint, startPoint + 40);
	const price = Number(data[data.length - 1].y[3]);
	return (
		<section>
			<CandleChart data={data} />
			<div className="flex flex-col gap-2 justify-around ">
				<div className="flex gap-2">
					<div className="flex flex-col items-center justify-center h-16 w-1/2 bg-gray-300 rounded-xl text-sm">
						<p>Price: {price}</p>
						<p>Balance: {wallet.balance.toFixed(2)}</p>
					</div>
					<button
						className="flex flex-col items-center justify-center h-16 w-1/2 bg-gray-600 rounded-xl text-2xl"
						onClick={() => setStartPoint(startPoint + 1)}
					>
						NEXT
					</button>
				</div>
				<ButtonContainer price={price} />
				<MyWallet price={price} />
			</div>
		</section>
	);
}
