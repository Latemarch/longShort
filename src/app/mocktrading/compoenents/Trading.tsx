import CandleStickChart from "@/components/CandleStickChart";
import { Suspense } from "react";

type Props = {
	candles: number[][];
	openTime: number;
};
export default function Trading({ candles, openTime }: Props) {
	return (
		<Suspense fallback={<div>loading..</div>}>
			<CandleStickChart candles={candles} openTime={openTime} />
		</Suspense>
	);
}
