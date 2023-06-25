import TradingBtn from "./TradingBtn";

export default function ButtonContainer() {
	return (
		<div className="flex justify-around gap-4">
			<TradingBtn name="buy" />
			<TradingBtn name="sell" />
		</div>
	);
}
