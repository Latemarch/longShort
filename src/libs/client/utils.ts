import fs from "fs";
import path from "path";

export function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function getCandle() {
	const filePath = path.join(process.cwd(), "public", "datas", "009.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	const candles = JSON.parse(fileContents);
	return candles;
}
