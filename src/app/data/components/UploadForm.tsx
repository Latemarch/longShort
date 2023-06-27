"use client";

import usePost from "@/hooks/usePost";
import { parseJsonFile } from "@/libs/client/handleData";
import { useForm } from "react-hook-form";

type Inputs = {
	file: FileList;
};
export default function UploadForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const [uploadData] = usePost("/api/data");

	const onSubmit = async (data: Inputs) => {
		for (let i = 0; i < data.file.length; i++) {
			const file = data.file[i];
			const fileData = await parseJsonFile(file); // Get parsed data from file

			// formData.append("name", file.name);
			// formData.append("timeOpen", String(fileData.timeOpen));
			// formData.append("timeClose", String(fileData.timeClose));
			// formData.append("data", JSON.stringify(fileData.data));
			fileData.name = file.name;
			console.log(fileData);
			await uploadData(fileData);
		}
	};
	return (
		<form className="flex flex-col w-1/2" onSubmit={handleSubmit(onSubmit)}>
			<label>
				Upload JSON files:
				<input
					{...register("file", { required: true })}
					type="file"
					accept=".json"
					multiple
				/>
			</label>
			{errors.file && <span>This field is required</span>}
			<button
				className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				type="submit"
			>
				Upload
			</button>
		</form>
	);
}
