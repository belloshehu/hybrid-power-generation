import { createSlice } from "@reduxjs/toolkit";

const solarSlice = createSlice({
    name: 'solarSlice',
    initialState: {
        panelNumber: 1000,
        powerGenerated: 0,
        isRunning: false,
        irradiance: 5.5, 
        panelWattage: 300,
        batteryCapacity: 0,
        batteryNumber: 0,
    },
    reducers: {
        calculatePower: (state) => {
            state.powerGenerated = state.panelWattage * state.irradiance * state.panelNumber /1000000; 
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