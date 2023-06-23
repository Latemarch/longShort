"use client";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import Chart from "react-apexcharts";

type Props = {
	candles: number[][];
	openTime: number;
};

export default function CandleStickChart({ candles, openTime }: Props) {
	const [startPoint, setStartPoint] = useState(openTime);
	console.log(candles);
	const data = candles
		.slice(startPoint, startPoint + 40)
		.map((candle, idx) => ({
			x: idx + 1,
			y: [candle[1], candle[2], candle[3], candle[4]],
		}));

	const options: ApexOptions = {
		chart: {
			width: "100%",
			type: "candlestick",
		},
		xaxis: {
			type: "numeric",
			range: 40,
			tickAmount: 4,
		},
		annotations: {
			points: [
				{
					x: 40,
					y: candles[startPoint + 40 - 1][3], // 데이터 포인트의 y값
					marker: {
						size: 6,
						fillColor: "#fff",
						strokeColor: "red",
						radius: 2,
					},
					label: {
						// borderColor: "red",
						offsetY: 0,
						style: {
							color: "#fff",
							background: "red",
						},
						text: `${candles[startPoint + 40 - 1][3]}`,
					},
				},
			],
		},
	};
	console.log(candles[candles.length - 1][3]);
	return (
		<div className="flex w-full bg-gray-200">
			<Chart
				className="w-full"
				options={options}
				series={[
					{
						data,
					},
				]}
				type="candlestick"
				height={350}
			/>
		</div>
	);
}
