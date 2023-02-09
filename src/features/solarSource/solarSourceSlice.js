import { createSlice } from "@reduxjs/toolkit";

const solarSlice = createSlice({
    name: 'solarSlice',
    initialState: {
        panelNumber: 667,
        powerGenerated: 0,
        isRunning: false,
        irradiance: 900, 
        panelWattage: 250,
        panelArea: 2,
        panelYield: 15,
        performanceRatio: 0.75,
    },
    reducers: {
        setParameters: (state, {payload}) => {
            state.irradiance = parseFloat(payload.irradiance)
            state.panelNumber = parseFloat(payload.panels)
            state.panelYield = parseFloat(payload.yield)
            state.panelArea = parseFloat(payload.area)
            state.powerGenerated = state.panelArea * state.panelYield * state.irradiance * state.panelNumber * state.performanceRatio / 1000000 / 100; 
        },
        calculatePower: (state) => {
            state.powerGenerated = state.panelArea * state.panelYield * state.irradiance * state.panelNumber * state.performanceRatio / 1000000 / 100; 
            // if(action.payload){
            //     state.powerGenerated = state.panelArea * state.panelYield * action.payload * state.panelNumber * state.performanceRatio / 1000000; 
            // }else{
            // }
        }, 
        start: (state) => {
            state.isRunning = true
        }, 
        stop: (state) => {
            state.isRunning = false
        },
        updateIrradiance: (state, action) =>{
            state.irradiance = action.payload
        }
    }
})

export const {calculatePower, stop, start, setParameters, updateIrradiance} = solarSlice.actions
export default solarSlice.reducer