import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 3,
}

export const livesSlice = createSlice({
    name: 'lives',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setLives: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setLives } = livesSlice.actions

export default livesSlice.reducer