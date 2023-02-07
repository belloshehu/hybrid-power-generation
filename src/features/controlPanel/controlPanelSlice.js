import { createSlice } from "@reduxjs/toolkit";
import { openModal } from "../modal/modalSlice";
import { disconnect } from "../load/loadSlice";

const controlPanelSlice = createSlice({
    name: 'controlPanel',
    initialState: {
        mode: 'normal',
        connectedGeneratedPower: 0 
    },
    reducers:{
        setMode:  (state, action) => {
            state.mode = action.payload
        },
        setConnectedGeneratedPower: (state, action) => {
            state.connectedGeneratedPower = action.payload
        }
    },
})

export function calculateConnectedGeneratedPower(){
    // sum up generated power from solar and hydro source
    // To enable comparison between connected generated power
    // versus connected load to avoid overloading.
    return (dispatch, getState) => {
        
        let connectedGeneratedPower = 0
        let hydroSource = getState().hydroSource
        let solarSource = getState().solarSource

        connectedGeneratedPower += hydroSource.isRunning? hydroSource.powerGenerated: 0
        connectedGeneratedPower += solarSource.isRunning? solarSource.powerGenerated: 0  
        dispatch(setConnectedGeneratedPower(connectedGeneratedPower))      
    }
}

export function controlLoads(loadId){
    console.log(loadId)
    return (dispatch, getState) => {
        // update sum of connected power sources
        dispatch(calculateConnectedGeneratedPower())
        let connectedGeneratedPower = getState().controlPanel.connectedGeneratedPower
        // total connected loads
        let totalConnectedLoads = getState().load.totalConnectedLoad 
        connectedGeneratedPower = connectedGeneratedPower * 1000
        
        if(connectedGeneratedPower < totalConnectedLoads){
            if(loadId === 0){
                // diconnect all loads in case no ID is passed
                let loads = getState().load.loadItems
                loads.forEach(load => {
                    dispatch(disconnect(load.id))
                });
            }else{
                // when an Id is passed
                dispatch(disconnect(loadId))
            }
            dispatch(openModal(
                    {
                        title: 'Overload error', 
                        body: 'Loads are automatically disconnected as available power is insufficient. Ensure sources are connected first!'
                    }
                )
            )

        }
    }
}

export const {setMode, setConnectedGeneratedPower} = controlPanelSlice.actions
export default controlPanelSlice.reducer