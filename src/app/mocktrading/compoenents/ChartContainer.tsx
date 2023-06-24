"use client";
import { useState } from "react";
import CandleChart from "./CandleChart";

type Props = {
	candles: number[][];
	openTime: number;
};
export default function ChartContainer({ candles, openTime }: Props) {
	const [startPoint, setStartPoint] = useState(openTime);

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
		<>
			<CandleChart data={data} />
		</>
	);
}
