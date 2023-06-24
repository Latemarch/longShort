import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type wallet = {
	position: string;
	amount: number;
	averagePrice: number;
};
export type walletState = {
	wallet: wallet;
};
export const walletSlice = createSlice({
	name: "wallet",
	initialState: {} as walletState,
	reducers: {
		setWallet: (state, action: PayloadAction<wallet>) => {
			state.wallet = { ...state.wallet, ...action.payload };
		},
	},
});

const { setWallet } = walletSlice.actions;
export default walletSlice.reducer;
