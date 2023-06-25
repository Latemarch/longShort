import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type History = {
	side: string[];
	size: number[];
	open: number[];
	close: number[];
	profit: number[];
	[key: string]: any;
};
const initialState: History = {
	side: [],
	size: [],
	open: [],
	close: [],
	profit: [],
};

export const historySlice = createSlice({
	name: "history",
	initialState,
	reducers: {
		openHistory: (state, action: PayloadAction<any>) => {
			const { side, size, open } = action.payload;
			state.side.push(side);
			state.size.push(size);
			state.open.push(open);
		},
		closeHistory: (state, action: PayloadAction<any>) => {
			const { close, profit } = action.payload;
			state.close.push(close);
			state.profit.push(profit);
		},
	},
});

export const { openHistory, closeHistory } = historySlice.actions;
export default historySlice.reducer;
