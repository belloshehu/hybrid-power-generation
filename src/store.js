
import { configureStore } from "@reduxjs/toolkit";
import hydroSourceSlice from "./features/hydroSource/hydroSourceSlice";
import solarSourceSlice from "./features/solarSource/solarSourceSlice";
import loadSlice from "./features/load/loadSlice";
import controlPanelSlice from "./features/controlPanel/controlPanelSlice";
import energyStorageSlice from "./features/energyStorage/energyStorageSlice";
import modalSlice from "./features/modal/modalSlice";
import locationSlice from "./features/location/locationSlice";

export const store = configureStore(
 {
    reducer: {
        solarSource: solarSourceSlice,
        hydroSource: hydroSourceSlice,
        modal: modalSlice,
        load: loadSlice,
        controlPanel: controlPanelSlice,
        energyStorage: energyStorageSlice,
        location: locationSlice
    }
 }
)