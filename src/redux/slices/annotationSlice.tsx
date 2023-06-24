import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type name = "buy" | "sell";
export type AnnotationState = {
	yaxis: YAxisAnnotations[];
};
export const annotationSlice = createSlice({
	name: "annotations",
	initialState: { yaxis: [] } as AnnotationState,
	reducers: {
		addCallPosition: (state, action: PayloadAction<number>) => {
			state.yaxis.push({
				y: action.payload,
				y2: action.payload + 1,
				fillColor: "#ff0000",
				borderColor: "#ff0000",
			});
		},
	},
});
export const { addCallPosition } = annotationSlice.actions;
export default annotationSlice.reducer;
