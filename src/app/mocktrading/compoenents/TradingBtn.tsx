"use client";

import {
	addLongPosition,
	removeLongPosition,
} from "@/redux/slices/annotationSlice";
import { closeHistory, openHistory } from "@/redux/slices/historySlice";
import { clearPosition, setPosition } from "@/redux/slices/walletSlice";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
	name: string;
};
export default function TradingBtn({ name }: Props) {
	const price = useSelector((state: any) => state.price);
	const { wallet } = useSelector((state: any) => state.wallet);
	const dispatch = useDispatch();
	const handleAnnotation = (e: MouseEvent<HTMLButtonElement>) => {
		if (name === "buy") {
			if (wallet.position.side !== "buy") {
				dispatch(addLongPosition(price));
				dispatch(setPosition(price));
				console.log("traidingbtn", wallet.position);
				dispatch(
					openHistory({
						balance: wallet.balance,
						side: "long",
						size: wallet.balance,
						open: price,
					})
				);
				console.log(wallet.balance);
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
			className="bg-btn hover:bg-orange-400 text-white font-bold py-4 px-4 rounded w-1/2 text-2xl"
			name={name}
			onClick={handleAnnotation}
		>
			{name}
		</button>
	);
}
