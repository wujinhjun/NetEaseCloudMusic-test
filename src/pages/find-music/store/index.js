import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultState = {
    pictureData: [],
    valuePresent: 0,
    minValueBanner: 0,
    maxValueBanner: 7,

    recommendList: [],
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
        changeAuto: (state, action) => {
            state.valuePresent = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInfoBanner.fulfilled, (state, action) => {
                state.pictureData = action.payload;
            })
            .addCase(getInfoRecommend.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.recommendList = action.payload;
                // console.log(state.recommendList);
            })
    }
});

export const getInfoBanner = createAsyncThunk(
    'getInfoBanner',
    async () => {
        const result = await axios.get('/api/banner.json');
        return result.data.data.pictureData;
    }
);

export const getInfoRecommend = createAsyncThunk(
    "getInfoRecommend",
    async () => {
        const result = await axios.get('/api/discover/recommend.json');
        // console.log(result.data.data.recommendListData);
        return result.data.data.recommendListData
    }
);

export const {
    changeClickChoose,
    lastPic,
    nextPic,
    changeAuto,
} = findMusicSlice.actions;

export default findMusicSlice.reducer;