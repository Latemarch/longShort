import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type name = "buy" | "sell";
export type AnnotationState = {
	yaxis: YAxisAnnotations[];
};
const colorShort = "#ff0000";
const colorLong = "#00ff00";
export const annotationSlice = createSlice({
	name: "annotations",
	initialState: { yaxis: [] } as AnnotationState,
	reducers: {
		addLongPosition: (state, action: PayloadAction<number>) => {
			state.yaxis.push({
				y: action.payload,
				y2: action.payload + 1,
				fillColor: colorLong,
				borderColor: colorLong,
			});
		},
		addShortPosition: (state, action: PayloadAction<number>) => {
			state.yaxis.push({
				y: action.payload,
				y2: action.payload + 1,
				fillColor: colorShort,
				borderColor: colorShort,
			});
		},
		removeLongPosition: (state) => {
			state.yaxis = state.yaxis.filter(
				(yaxis) => yaxis.fillColor !== colorLong
			);
		},
		removeShortPosition: (state) => {
			state.yaxis = state.yaxis.filter(
				(yaxis) => yaxis.fillColor !== colorShort
			);
		},
	},
});
export const {
	addLongPosition,
	addShortPosition,
	removeLongPosition,
	removeShortPosition,
} = annotationSlice.actions;
export default annotationSlice.reducer;
