import TradingBtn from "./TradingBtn";

export default function ButtonContainer({ price }: { price: number }) {
	return (
		<div className="flex justify-around gap-4">
			<TradingBtn name="buy" price={price} />
			<TradingBtn name="sell" price={price} />
		</div>
	);
}
