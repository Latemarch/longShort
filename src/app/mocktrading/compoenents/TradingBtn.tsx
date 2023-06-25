"use client";

import {
	addLongPosition,
	removeLongPosition,
} from "@/redux/slices/annotationSlice";
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
			dispatch(addLongPosition(price));
			dispatch(setWallet(price));
		} else if (wallet.position.size > 0) {
			dispatch(removeLongPosition());
			dispatch(clearPosition(price));
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
