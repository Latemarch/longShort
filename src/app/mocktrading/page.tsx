import fs from "fs";
import path from "path";
import Trading from "./compoenents/Trading";

export default async function mocktraiding() {
	const fileNumber = getRandomInt(1, 64);
	const openTime = getRandomInt(100, 1239);

	// const candles = await fetch(`http://localhost:3000/api/data/${fileNumber}`) //
	// .then((res) => res.json());

	const candles = await getCandle();
	candles && console.log(candles.slice(0, 10));
	return (
		<div>{candles && <Trading candles={candles} openTime={openTime} />}</div>
	);
}

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getCandle() {
	const filePath = path.join(process.cwd(), "public", "datas", "009.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	const candles = JSON.parse(fileContents);
	return candles;
}
