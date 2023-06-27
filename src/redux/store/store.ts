import { configureStore } from "@reduxjs/toolkit";
import annotations from "../slices/annotationSlice";
import wallet from "../slices/walletSlice";
import history from "../slices/historySlice";
import price from "../slices/priceSlice";

export default configureStore({
	reducer: { annotations, wallet, history, price },
});
