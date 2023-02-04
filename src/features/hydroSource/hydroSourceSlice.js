import { createSlice } from "@reduxjs/toolkit";

const hydroSourceSlice = createSlice({
    name: 'hydroSource',
    initialState: {
        crossSectionalArea: 200,
        head: 16,
        waterSpeed: 100,
        flowVolume: 0,
        powerGenerated: 0,
        isRunning: false,
    },
    reducers: {
        calculateFlowVolume: (state) => {
            state.flowVolume = state.crossSectionalArea * state.waterSpeed;
        },
        calculatePower: (state) => {
            state.powerGenerated = state.head * state.flowVolume * 5 / 1000000; 
        }, 
        start: (state) => {
            state.isRunning = true
        }, 
        stop: (state) => {
            state.isRunning = false
        }
    }
})

export const {calculateFlowVolume, calculatePower, start, stop} = hydroSourceSlice.actions
export default hydroSourceSlice.reducer
