import { configureStore } from "@reduxjs/toolkit";
import annotations from "../slices/annotationSlice";
import wallet from "../slices/walletSlice";

export default configureStore({
	reducer: { annotations, wallet },
});
