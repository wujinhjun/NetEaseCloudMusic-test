import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultState = {
    pictureData: [],
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
            console.log(action.payload);
        },
    }
});

const getInfoFromJson = (state) => {
    axios.get('/api/banner.json')
        .then((res) => {
            console.log(res.data.data);
            state.pictureData = res.data.data.pictureData;
        })
        .catch(() => {
            console.log("fail");
        })
}

export const {
    changeClickChoose,
    lastPic,
    nextPic,
    getInfoBanner,
} = findMusicSlice.actions;

export default findMusicSlice.reducer;