import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    active: 0,
}

const headerSlice = createSlice({
    name: 'header',
    initialState: defaultState,
    reducers: {
        changeChoose: (state, action) => {
            state.active = action.payload;
            // console.log(action.payload);
        }
    }
});

export const { changeChoose } = headerSlice.actions;

export default headerSlice.reducer;