
import { configureStore } from "@reduxjs/toolkit";
import hydroSourceSlice from "./features/hydroSource/hydroSourceSlice";
import solarSourceSlice from "./features/solarSource/solarSourceSlice";
import loadSlice from "./features/load/loadSlice";
import controlPanelSlice from "./features/controlPanel/controlPanelSlice";
import energyStorageSlice from "./features/energyStorage/energyStorageSlice";

export const store = configureStore(
 {
    reducer: {
        solarSource: solarSourceSlice,
        hydroSource: hydroSourceSlice,
        modal: {},
        load: loadSlice,
        controlPanel: controlPanelSlice,
        energyStorage: energyStorageSlice
    }
 }
)