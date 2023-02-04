import { createSlice } from "@reduxjs/toolkit";

const controlPanelSlice = createSlice({
    name: 'controlPanel',
    initialState: {
        mode: 'normal'
    },
    reducers:{
        setMode:  (state, action) => {
            state.mode = action.payload
        }
    }
})

export const {setMode} = controlPanelSlice.actions
export default controlPanelSlice.reducer