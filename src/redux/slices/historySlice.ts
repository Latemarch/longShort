import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type History = {
	balance: number[];
	side: string[];
	size: number[];
	open: number[];
	close: number[];
	profit: number[];
	[key: string]: any;
};
const initialState: History = {
	balance: [],
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
			const { balance, side, size, open } = action.payload;
			state.balance.push(balance);
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
