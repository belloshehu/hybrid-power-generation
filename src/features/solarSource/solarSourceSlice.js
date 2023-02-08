import { createSlice } from "@reduxjs/toolkit";

const solarSlice = createSlice({
    name: 'solarSlice',
    initialState: {
        panelNumber: 667,
        powerGenerated: 0,
        isRunning: false,
        irradiance: 0, 
        panelWattage: 250,
        batteryCapacity: 0,
        batteryNumber: 0,
    },
    reducers: {
        setParameters: (state, {payload}) => {
            state.powerGenerated = parseFloat(payload.power)
            state.panelWattage = parseFloat(payload.wattage)
            state.irradiance = parseFloat(payload.irradiance)
            state.panelNumber = parseFloat(payload.pannels)
        },
        calculatePower: (state, action) => {
            if(action.payload){
                state.powerGenerated = state.panelWattage * action.payload * state.panelNumber * 0.75 / 1000000; 
            }else{
                state.powerGenerated = state.panelWattage * state.irradiance * state.panelNumber * 0.75 / 1000000; 
            }
        }, 
        start: (state) => {
            state.isRunning = true
        }, 
        stop: (state) => {
            state.isRunning = false
        }
    }
})

export const {calculatePower, stop, start, setParameters} = solarSlice.actions
export default solarSlice.reducer