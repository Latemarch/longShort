import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type position = {
	side: string | null;
	size: number;
	entryPrice: number;
};
type wallet = {
	position: position;
	balance: number;
	profit: number;
};
export type walletState = {
	wallet: wallet;
};
const initialState: walletState = {
	wallet: {
		position: { side: null, size: 0, entryPrice: 0 },
		balance: 100,
		profit: 0,
	},
};

export const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		setBalance: (state, action: PayloadAction<number>) => {
			state.wallet.balance = action.payload;
		},
		setPosition: (state, action: PayloadAction<number>) => {
			const { balance, position } = state.wallet;
			position.size = Number(balance.toFixed(2));
			console.log(position.size, balance.toFixed(2));
			position.side = "buy";
			position.entryPrice = action.payload;
		},
		clearPosition: (state, action: PayloadAction<number>) => {
			const {
				balance,
				position,
				position: { entryPrice, size },
			} = state.wallet;
			const { payload: price } = action;
			position.side = null;

			const profit = (price - entryPrice) / entryPrice;
			state.wallet.balance = balance + profit * size;
		},
	},
});

export const { setBalance, setPosition, clearPosition } = walletSlice.actions;
export default walletSlice.reducer;
