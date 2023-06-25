import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
	name: "price",
	initialState: 0,
	reducers: {
		setPrice: (state, action: PayloadAction<number>) => {
			return action.payload;
		},
	},
});

export const { setPrice } = priceSlice.actions;
export default priceSlice.reducer;
