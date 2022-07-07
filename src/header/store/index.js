import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    active: '发现音乐',
}

const headerSlice = createSlice({
    name: 'header',
    initialState: defaultState,
    reducers: {
        changeChoose: (state, action) => {
            state.active = action.payload;
            console.log(action);
        }
    }
});

export const { changeChoose } = headerSlice.actions;

export default headerSlice.reducer;