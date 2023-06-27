import { useSelector } from "react-redux";

type Props = {
	isOpen: boolean;
	setIsOpen: any;
};
export default function Modal({ isOpen, setIsOpen }: Props) {
	const { balance } = useSelector((state: any) => state.history);
	const { wallet } = useSelector((state: any) => state.wallet);
	if (!isOpen) return null;
	const netProfit = (
		((wallet.balance - balance[0]) / balance[0]) *
		100
	).toFixed(2);

	const handleClick = () => {
		setIsOpen(false);
		window.location.reload();
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50 justify-center">
			<div className="bg-white rounded-lg p-8 flex flex-col justify-end gap-4">
				<p className="text-2xl font-bold">Game Over</p>
				<div className="flex justify-between">
					<p>Profit: </p>
					<p
						className={`${
							Number(netProfit) < 0 ? "text-red-500" : "text-green-500"
						}`}
					>
						{netProfit}%
					</p>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={handleClick}
				>
					Close
				</button>
			</div>
		</div>
	);
}
