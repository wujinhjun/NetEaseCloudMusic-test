import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultState = {
    pictureData: [],
    recommendList: [],
    singerList: [],
    active: "推荐",
};

const findMusicSlice = createSlice({
    name: "findMusic",
    initialState: defaultState,
    reducers: {
        changeChooseDiscover: (state, action) => {
            state.active = action.payload;
            // console.log(action);
        },
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
            .addCase(getInfoSingerList.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.singerList = action.payload;
            });
    },
});

export const getInfoBanner = createAsyncThunk("getInfoBanner", async () => {
    const result = await axios.get("/api/banner.json");
    return result.data.data.pictureData;
});

export const getInfoRecommend = createAsyncThunk(
    "getInfoRecommend",
    async () => {
        const result = await axios.get("/api/discover/recommend.json");
        // console.log(result.data.data.recommendListData);
        return result.data.data.recommendListData;
    }
);

export const getInfoSingerList = createAsyncThunk(
    "getInfoSingerList",
    async () => {
        const result = await axios.get("/api/discover/singerList.json");
        // console.log(result.data.data.singerList);
        return result.data.data.singerList;
    }
);

export const { changeChooseDiscover } = findMusicSlice.actions;

export default findMusicSlice.reducer;
