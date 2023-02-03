import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import {load as consumption} from '../../data/power'


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
        consumptionWindow: null
    }, 
    reducers: {
        updateLoadsConsumption: (state) =>{
            state.loadItems = state.loadItems.map(item =>{
                return {...item, consumption: state.consumptionWindow[item.name]}
            })
        },
        getNextConsumptionWindow: (state) => {
            if(state.consumptionIndex < consumption.length){
                state.consumptionIndex +=1
            }else{
                state.consumptionIndex = 0
            }
            state.consumptionWindow = consumption.values[state.consumptionIndex]
        },
        getPreviousConsumptionWindow: (state) => {
            if(state.consumptionIndex > consumption.length){
                state.consumptionIndex -=1
            }else{
                state.consumptionIndex = consumption.length - 1
            }
            state.consumptionWindow = consumption.values[state.consumptionIndex]
        },
        calculateTotalLoad: (state) => {
            let total = 0
            state.loadItems.forEach(item => {
                total += item.capacity
            });
            state.totalLoad = total
        },
        calculateConnectedTotalLoad: (state) => {
            let total = 0
            state.loadItems.forEach(item => {
                if(item.isConnected === true){
                    total += item.capacity
                }
            });
            state.totalConnectedLoad = total
        },
        connect: (state, {payload}) => {
            state.loadItems = state.loadItems.map((item) =>{
                if(item.id === payload.id){
                    return {...item, isConnected: true}
                }else{
                    return item
                }
            })
        }, 
        disconnect: (state, {payload}) => {
            state.loadItems = state.loadItems.map((item) =>{
                if(item.id === payload.id){
                    return {...item, isConnected: false}
                }else{
                    return item
                }
            })
        }
    }
})

export const {disconnect, connect, calculateConnectedTotalLoad, calculateTotalLoad} = loadSlice.actions
export default loadSlice.reducer