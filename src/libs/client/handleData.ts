export const parseJsonFile = (
	file: File
): Promise<{
	timeOpen: number;
	timeClose: number;
	data: any;
	name?: string;
}> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = async (event) => {
			try {
				const data = JSON.parse(event?.target?.result as string);
				const timeOpen = Math.floor(data[0][0] / 60);
				const timeClose = Math.floor(data[data.length - 1][0] / 60);
				resolve({ timeOpen, timeClose, data });
			} catch (err) {
				reject(err);
			}
		};

		reader.onerror = (err) => {
			reject(err);
		};

		reader.readAsText(file);
	});
};
