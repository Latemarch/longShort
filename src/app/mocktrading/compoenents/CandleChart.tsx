"use client";
import { chartOptions } from "@/libs/client/classes";
import { AnnotationState } from "@/redux/slices/annotationSlice";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

type Slice = {
	annotations: AnnotationState;
};
export default function CandleChart({ data }: { data: any }) {
	const { yaxis } = useSelector((state: Slice) => state.annotations);
	const options = chartOptions;
	return (
		<Chart
			options={{
				...options, //
				annotations: { yaxis },
			}}
			series={[
				{
					data,
				},
			]}
			type="candlestick"
			height={350}
		/>
	);
}
