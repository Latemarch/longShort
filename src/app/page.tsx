import ApexChart from "@/components/ApexChart";
import ConvertBtn from "@/components/ConvertBtn";

export default function page() {
	return (
		<div className="p-4">
			<p>chart</p>
			<ApexChart />
			<ConvertBtn />
		</div>
	);
}
