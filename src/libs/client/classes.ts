import { ApexOptions } from "apexcharts";

export const chartOptions: ApexOptions = {
	chart: {
		width: "100%",
		type: "candlestick",
		animations: {
			enabled: false,
		},
	},
	xaxis: {
		type: "numeric",
		range: 40,
		tickAmount: 4,
	},
};
