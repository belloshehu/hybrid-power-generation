import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen:  false, 
        message: {
            body: '',
            title: ''
        }
    },
    reducers: {
        closeModal: (state) => {
            state.isOpen = false
        },
        openModal: (state, action) => {
            state.message = action.payload
            state.isOpen = true
        }
    }
})

export const {closeModal, openModal} = modalSlice.actions
export default modalSlice.reducer