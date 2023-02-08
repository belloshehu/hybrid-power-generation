import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export function setChargingAm(){
    return (dispatch, getState) =>{
        const solarGeneratedPower = getState().solarSource.powerGenerated * 1000000
        const batteryVoltage = getState().energyStorage.batteryVoltage
        const numberOfBatteries = getState().energyStorage.numberOfBatteries

        // charging rate per minute (number of Ampere that entered battery in a minute)
        const chargingRate = (solarGeneratedPower / (numberOfBatteries * batteryVoltage * 24 * 60))
        dispatch(calculateChargingAm(chargingRate))
    }
}

const energyStorage = createSlice({
    name: 'energystorage',
    initialState: {
        totalCapacity: 0,
        storedAh: 0,
        storedWh: 0,
        numberOfBatteries: 348,
        DOD: 50,
        SOD: 0,
        batteryAh: 120,
        chargingAm: 0,
        batteryWh: 0, 
        terminalVoltage: 12.0,
        batteryVoltage: 12.0, 
        isConnected: true,
    },

    reducers:{
        setParameters: (state, {payload}) => {
            state.numberOfBatteries = parseFloat(payload.batteries)
            state.batteryAh = parseFloat(payload.batteryAh)
            state.batteryVoltage = parseFloat(payload.batteryVoltage)
        },
        updateDOD: (state, action) => {
            const percentageAh = action.payload * 100 / state.batteryAh
            console.log(percentageAh, action.payload, '%')
            state.DOD -= percentageAh
        },
        calculateChargingAm: (state, action) =>{
            state.chargingAm = action.payload
        },
        calculateSOD: (state) =>{
            state.SOD = 100 - state.DOD;
        },
        connectEnergyStorge: (state) =>{
            state.isConnected = true
        },
        disconnectEnergyStorge: (state) =>{
            state.isConnected = false
        },
        calculateStoredWh: (state) => {
            state.storedWh = state.batteryAh * state.batteryVoltage * state.numberOfBatteries
        },
        calculateStoredAh: (state) => {
            state.storedAh = state.SOD * state.batteryAh * state.numberOfBatteries / 100
        },
        updateStoredAh: (state, action) => {
            state.storedAh +=  action.payload
        },
        updateTerminalVoltage: (state, action) => {
            state.terminalVoltage += action.payload
        },
        updateTotalCapacity: (state, action) => {
            state.totalCapacity = action.payload
        },
    },
})


export const { 
    calculateStoredWh, 
    updateStoredAh, 
    calculateStoredAh,
    calculateChargingAm,
    updateTerminalVoltage, 
    disconnectEnergyStorge,
    connectEnergyStorge,
    calculateSOD,
    updateDOD,
    setParameters
} = energyStorage.actions

export default energyStorage.reducer