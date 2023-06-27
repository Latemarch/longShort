import { getCandle } from "../client/utils";

export const getUserBalance = async () => {
	const res = await fetch("http://localhost:3000/api/user/balance");
	if (!res.ok) {
		const message = await res.text();
		console.error("API error:", message);
	}
	const data = await res.json();
	console.log(data);
	return data.data.balance;
};

export const getCandles = async (url: string) => {
	let candles: any;
	try {
		candles = await fetch(url)
			.then((res) => res.json())
			.then((data) => data.data);
	} catch (e) {
		console.error("Error fetching data(candles):", e);
		candles = [];
	}
	return candles;
};
