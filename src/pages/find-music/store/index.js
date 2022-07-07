import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    pictureDate: [],
    valuePresent: 0,
    minValueBanner: 0,
    maxValueBanner: 7,
}

const findMusicSlice = createSlice({
    name: 'findMusic',
    initialState: defaultState,
    reducers: {
        lastPic: (state) => {
            if (state.valuePresent > state.minValueBanner) {
                state.valuePresent--;
            } else {
                state.valuePresent = state.maxValueBanner;
            }
        },
        nextPic: (state) => {
            if (state.valuePresent < state.maxValueBanner) {
                state.valuePresent++;
            } else {
                state.valuePresent = state.minValueBanner;
            }
        },
        changeClickChoose: (state, action) => {
            state.valuePresent = action.payload;
            console.log(action);
        }
    }
});

export const { changeClickChoose, lastPic, nextPic } = findMusicSlice.actions;

export default findMusicSlice.reducer;