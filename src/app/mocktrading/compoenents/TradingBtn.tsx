"use client";

import {
	addLongPosition,
	removeLongPosition,
} from "@/redux/slices/annotationSlice";
import { closeHistory, openHistory } from "@/redux/slices/historySlice";
import { clearPosition, setWallet } from "@/redux/slices/walletSlice";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export type Wallet = {
	position: string;
	amount: number;
	openPrice: number;
};
type Props = {
	name: string;
	price: number;
};
export default function TradingBtn({ name, price }: Props) {
	const { wallet } = useSelector((state: any) => state.wallet);
	const dispatch = useDispatch();
	const handleAnnotation = (e: MouseEvent<HTMLButtonElement>) => {
		if (name === "buy") {
			if (wallet.position.side !== "buy") {
				dispatch(addLongPosition(price));
				dispatch(setWallet(price));
				dispatch(openHistory({ side: "long", size: 100, open: price }));
			}
		} else if (wallet.position.side === "buy") {
			const profit = Number(
				(((price - wallet.position.entryPrice) / price) * 100).toFixed(2)
			);
			dispatch(removeLongPosition());
			dispatch(clearPosition(price));
			dispatch(closeHistory({ close: price, profit }));
		}
	};
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
			name={name}
			onClick={handleAnnotation}
		>
			{name}
		</button>
	);
}
