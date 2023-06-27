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
