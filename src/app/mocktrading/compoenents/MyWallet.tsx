"use client";

import { useSelector } from "react-redux";

const styles = "flex flex-col items-center ";
export default function MyWallet() {
	const price = useSelector((state: any) => state.price);
	const {
		wallet: {
			position: { side, size, entryPrice },
		},
	} = useSelector((state: any) => state.wallet);

	const pStyles = `${side === "buy" ? "text-green-500" : "text-red-500"}`;
	const profit = ((price - entryPrice) / price) * 100;
	return (
		<div className="flex items-center justify-center bg-gray-100 rounded-md h-20 ">
			{side ? (
				<div className="flex items-center justify-around w-full px-4">
					<div className={styles}>
						<p>SIDE</p>
						<p className={pStyles}>{side}</p>
					</div>
					<div className={styles}>
						<p>SIZE</p>
						<p className={pStyles}>{size}</p>
					</div>
					<div className={styles}>
						<p>PRICE</p>
						<p className={pStyles}>{entryPrice}</p>
					</div>

					<p className="text-3xl">|</p>
					<div className={styles}>
						<p>PROFIT</p>
						<p className={`${profit >= 0 ? "text-green-500" : "text-red-500"}`}>
							{profit.toFixed(2)}
						</p>
					</div>
				</div>
			) : (
				<div>NO POSITION</div>
			)}
		</div>
	);
}
