import { createSlice } from "@reduxjs/toolkit";

const hydroSourceSlice = createSlice({
    name: 'hydroSource',
    initialState: {
        crossSectionalArea: 200,
        head: 16,
        waterSpeed: 100,
        flowVolume: 25000,
        powerGenerated: 2,
        isRunning: false,
    },
    reducers: {
        setParameters: (state, action) =>{
            state.powerGenerated = parseFloat(action.payload.power)
            state.head = parseFloat(action.payload.head)
            state.flowVolume = parseFloat(action.payload.flow)
        },
        calculateFlowVolume: (state) => {
            if(state.powerGenerated === 0){
                state.flowVolume = state.crossSectionalArea * state.waterSpeed;
            }
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

export const {
    calculateFlowVolume, 
    calculatePower, 
    start, 
    stop,
    setParameters
} = hydroSourceSlice.actions
export default hydroSourceSlice.reducer
