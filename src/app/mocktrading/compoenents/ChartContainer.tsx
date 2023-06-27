"use client";
import { useEffect, useState } from "react";
import CandleChart from "./CandleChart";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "@/redux/slices/priceSlice";
import Modal from "./Modal";
import { Session } from "next-auth";
import { setBalance } from "@/redux/slices/walletSlice";
import { getUserBalance } from "@/libs/server/fetchingFtns";
import usePost from "@/hooks/usePost";

type Props = {
	candles: number[][];
	openTime: number;
};
export default function ChartContainer({ candles, openTime }: Props) {
	const [startPoint, setStartPoint] = useState(openTime);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [count, setCount] = useState(20);
	const [updateBalance] = usePost("/api/user/balance");
	const { wallet } = useSelector((state: any) => state.wallet);
	const dispatch = useDispatch();

	const candleObj = candles.map((candle, idx) => ({
		x: idx + 1 - openTime,
		y: [
			...candle
				.slice(1, 5) //
				.map((num) => Number(num.toFixed(0))),
		],
	}));
	const data = candleObj.slice(startPoint, startPoint + 40);
	const price = Number(data[data.length - 1].y[3]);

	const handleClick = () => {
		setStartPoint((prev) => prev + 1);
		setCount((prev) => prev - 1);
	};
	useEffect(() => {
		dispatch(setPrice(price));
		if (count === 0) {
			setIsModalOpen(true);
			updateBalance(wallet.balance);
		}
	}, [count]);

	useEffect(() => {
		const fetchData = async () => {
			const initialBalance = await getUserBalance();
			console.log(initialBalance);
			if (initialBalance && initialBalance > 90) {
				dispatch(setBalance(initialBalance));
			}
		};
		fetchData();
	}, []);
	return (
		<section className="w-full ">
			<Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
			<CandleChart data={data} />
			<div className="flex flex-col gap-2 justify-around">
				<div className="flex gap-4 ">
					<div className="flex flex-col items-start p-2 justify-between h-16 w-1/2 bg-zinc-800 rounded-md text-sm">
						<div className="flex justify-between w-full px-2">
							<p>Current Price :</p>
							<p>${price}</p>
						</div>
						<div className="flex justify-between w-full px-2">
							<p>Leverage :</p>
							<p>{"x1"}</p>
						</div>
					</div>
					<button
						className="bg-btn hover:bg-orange-400 text-white font-bold py-4 px-4 rounded w-1/2 text-2xl "
						onClick={handleClick}
					>
						NEXT({count})
					</button>
				</div>
			</div>
		</section>
	);
}
