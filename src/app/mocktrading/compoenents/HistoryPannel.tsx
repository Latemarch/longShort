"use client";
import { History } from "@/redux/slices/historySlice";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

type TState = {
	history: History;
};
export default function HistoryPannel() {
	const history = useSelector((state: TState) => state.history);
	const { wallet } = useSelector((state: any) => state.wallet);
	console.log(wallet);
	// if (!history.length) return;
	return (
		<div className="p-4 bg-gray-200 my-6 rounded-lg">
			<div className="flex p-2 justify-between border-solid border-b-2 border-gray-500">
				<h2>History</h2>
				<div className="flex">
					<p>Balance: </p>
					<p>{wallet.balance.toFixed(2)} </p>
				</div>
			</div>
			<div className="flex justify-between p-2 w-full">
				{Object.keys(history)
					.slice(0, 4)
					.map((key) => (
						<div className="flex flex-col text-center" key={key}>
							<p className="text-gray-500 ">{key}</p>
							{history[key].length > 0 &&
								history[key].map((item: any) => <p key={uuid()}>{item}</p>)}
						</div>
					))}
				<div className="flex flex-col text-center">
					<p className={`text-gray-${500}`}>profit</p>
					{history.profit.length > 0 &&
						history.profit.map((item: any) => (
							<p
								className={`text-${item > 0 ? "green-500" : "red-500"}`}
								key={item}
							>
								{item}
							</p>
						))}
				</div>
			</div>
		</div>
	);
}
