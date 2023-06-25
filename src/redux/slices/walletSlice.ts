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
		setWallet: (state, action: PayloadAction<number>) => {
			state.wallet.position.size = 100;
			state.wallet.position.side = "buy";
			state.wallet.position.entryPrice = action.payload;
		},
		clearPosition: (state, action: PayloadAction<number>) => {
			const {
				balance,
				position: { entryPrice },
			} = state.wallet;
			const { payload: price } = action;
			state.wallet.position.size = 0;
			state.wallet.position.side = null;
			const profit = ((price - entryPrice) / entryPrice) * 100;
			state.wallet.balance = balance + profit;
		},
	},
});

export const { setWallet, clearPosition } = walletSlice.actions;
export default walletSlice.reducer;
