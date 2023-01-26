import { createSlice } from "@reduxjs/toolkit";

const solarSlice = createSlice({
    name: 'solarSlice',
    initialState: {
        panelNumber: 100,
        powerGenerated: 0,
        isRunning: false,
        irradiance: 5.5, 
        panelWattage: 250,
        batteryCapacity: 0,
        batteryNumber: 0,
    },
    reducers: {
        calculatePower: (state) => {
            state.powerGenerated = state.panelWattage * state.irradiance * state.panelNumber; 
        }, 
        start: (state) => {
            state.isRunning = true
        }, 
        stop: (state) => {
            state.isRunning = false
        }
    }
})

export const {calculatePower, stop, start} = solarSlice.actions
export default solarSlice.reducer