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
	// if (!history.length) return;
	return (
		<div className="p-4  bg-DarkChart mt-4 rounded-lg h-full">
			<div className="flex p-2 justify-between border-solid border-b-2 border-gray-500">
				<h2>History</h2>
				<div className="flex">
					<p className="mr-4">Balance: </p>
					<p>${wallet.balance.toFixed(2)} </p>
				</div>
			</div>
			<div className="flex h-52 overflow-auto justify-between p-2 w-full scrollbar-hide ">
				{Object.keys(history)
					.slice(1, 4)
					.map((key) => (
						<div className="flex flex-col text-center" key={key}>
							<p className="text-gray-400 mb-2">{key}</p>
							{history[key].length > 0 &&
								history[key].map((item: any) => (
									<p key={uuid()}>{key !== "size" ? item : item.toFixed(2)}</p>
								))}
						</div>
					))}
				<div className="flex flex-col text-center">
					<p className={`text-gray-${400} mb-2`}>profit</p>
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
