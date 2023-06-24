"use client";

import { addCallPosition } from "@/redux/slices/annotationSlice";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";

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
	const dispatch = useDispatch();
	const handleAnnotation = (e: MouseEvent<HTMLButtonElement>) => {
		if (name === "buy") {
			dispatch(addCallPosition(price));
		}
	};
	return (
		<button name={name} onClick={handleAnnotation}>
			{name}
		</button>
	);
}
