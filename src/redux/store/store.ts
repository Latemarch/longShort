import { configureStore } from "@reduxjs/toolkit";
import annotations from "../slices/annotationSlice";
import wallet from "../slices/walletSlice";
import history from "../slices/historySlice";

export default configureStore({
	reducer: { annotations, wallet, history },
});
