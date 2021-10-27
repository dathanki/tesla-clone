import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./../features/slices/carSlice";

export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});