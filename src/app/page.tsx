import ApexChart from "@/components/ApexChart";
import ConvertBtn from "@/components/ConvertBtn";
import { Suspense } from "react";

export default function page() {
	return (
		<div className="p-4">
			<p>chart</p>
			<Suspense fallback={<div>loading..</div>}>
				<ApexChart />
			</Suspense>
			<ConvertBtn />
		</div>
	);
}
