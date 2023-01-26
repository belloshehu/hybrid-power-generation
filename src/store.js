import { configureStore } from "@reduxjs/toolkit";
import hydroSourceSlice from "./features/hydroSource/hydroSourceSlice";

export const store = configureStore(
 {
    reducer: {
        solarSource: {},
        hydroSource: hydroSourceSlice,
        modal: {},
        load: {},
    }
 }
)