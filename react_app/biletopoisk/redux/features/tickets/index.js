import { createSlice } from "@reduxjs/toolkit";

const initialState = {cart:{}, total: 0};

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            const count = state.cart[payload] || 0;
            const total = state.total;

            if (count < 30){
                state.cart[payload] = count + 1;
                state.total = total + 1;
            }
        },
        decrement: (state, {payload}) => {
            const count = state.cart[payload];

            if (!count){
                return;
            }

            const total = state.total;

            if (count === 1 ){
                delete state.cart[payload];

            } else {
                state.cart[payload] = count - 1;
            }

            state.total = total - 1;

        },
        reset: () => initialState,
        resetItem: (state, {payload}) => {
            const count = state.cart[payload];

            if (!count){
                return;
            }

            const total = state.total;

            delete state.cart[payload];
            state.total = total - count;
        },
    }
});

export const ticketsReducer = ticketsSlice.reducer;
export const ticketsActions = ticketsSlice.actions;