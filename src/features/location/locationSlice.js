import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        city_name: '',
        country_code: '',
        state_code: '',
    }, 
    reducers: {
        setLocationDetails: (state, {payload:{city_name, state_code, country_code}}) => {
            console.log(city_name)
            state.city_name = city_name
            state.state_code = state_code
            state.country_code = country_code
        }
    }
})

export const {setLocationDetails} = locationSlice.actions
export default locationSlice.reducer