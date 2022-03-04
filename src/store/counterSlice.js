import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            localStorage.setItem('counter', JSON.stringify(state.value));
        },
        decrement: (state) => {
            state.value -= 1;
            localStorage.setItem('counter', JSON.stringify(state.value));
        },
        reset: (state) => {
            state.value = 0;
            localStorage.setItem('counter', JSON.stringify(state.value));
        },
        addByNumber: (state, action) => {
            state.value += action.payload;
            localStorage.setItem('counter', JSON.stringify(state.value));
        }
    },
});

export const { increment, decrement, reset, addByNumber } = counterSlice.actions;

export default counterSlice.reducer;