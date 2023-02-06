import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import {load as consumption, load} from '../../data/power'


const loadSlice = createSlice({
    name: 'loadSlice',
    initialState: {
        loadItems: [
            {
                id: 1,
                name: 'primary', 
                consumption: 0,
                capacity: 30,
                rank: 1,
                isConnected: false,
            },
            {
                id: 2,
                name: 'secondary', 
                consumption: 0,
                capacity: 20,
                rank: 2,
                isConnected: false,
            },
            {
                id: 3,
                name: 'tertiary',
                consumption: 0, 
                capacity: 10,
                rank: 3,
                isConnected: false,
            }
        ], 
        totalLoad: 0,
        totalConnectedLoad: 0,
        consumptionIndex: 0,
        consumptionWindow: consumption.values[0],
        timeSlot:'01:00-02:00',
    }, 
    reducers: {
        updateLoadsConsumption: (state) =>{
            state.loadItems = state.loadItems.map(item =>{
                return {...item, consumption: state.consumptionWindow.power[item.name]}
            })
        },
        updateConsumptionWindow: (state, action) => {
            state.consumptionWindow = consumption.values.find(value => value.time.from === action.payload)
        },
        getNextConsumptionWindow: (state) => {
            if(state.consumptionIndex < consumption.values.length -1){
                state.consumptionIndex++
            }else{
                state.consumptionIndex = 0
            }
            console.log(state.consumptionIndex)
            state.consumptionWindow = consumption.values[state.consumptionIndex]
            updateLoadsConsumption()
        },
        getPreviousConsumptionWindow: (state) => {
            if(state.consumptionIndex > 0){
                state.consumptionIndex--
            }else{
                state.consumptionIndex = consumption.values.length - 1
            }
            console.log(state.consumptionIndex)

            state.consumptionWindow = consumption.values[state.consumptionIndex]
        },
        calculateTotalLoad: (state) => {
            let total = 0
            state.loadItems.forEach(item => {
                total += item.consumption
            });
            state.totalLoad = total
        },
        calculateConnectedTotalLoad: (state) => {
            let total = 0

            state.loadItems.forEach(item => {
                if(item.isConnected){
                    total += item.consumption
                }
            });
            console.log(total)
            state.totalConnectedLoad = total
        },
        connect: (state, {payload}) => {
            state.loadItems = state.loadItems.map((item) =>{
                if(item.id === payload){
                    return {...item, isConnected: true}
                }else{
                    return item
                }
            })
        }, 
        disconnect: (state, {payload}) => {
            state.loadItems = state.loadItems.map((item) =>{
                if(item.id === payload){
                    return {...item, isConnected: false}
                }else{
                    return item
                }
            })
        }
    }
})

export const {
    disconnect, 
    connect, 
    calculateConnectedTotalLoad, 
    calculateTotalLoad,
    updateLoadsConsumption,
    getNextConsumptionWindow,
    getPreviousConsumptionWindow,
    updateConsumptionWindow,
} = loadSlice.actions
export default loadSlice.reducer