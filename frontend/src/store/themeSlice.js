import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNight: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeWeatherTheme: (state, action) => {
            state.isNight = action.payload
        }
    }
})

export const { changeWeatherTheme } = themeSlice.actions
export default themeSlice.reducer