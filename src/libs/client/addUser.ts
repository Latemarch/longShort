export default async function addUser(email?: string | null) {
	if (!email) return;
	fetch("http://localhost:3000/api/signup", {
		method: "POST",
		body: JSON.stringify(email),
		headers: {
			"Content-Type": "application/json",
		},
	});
}
