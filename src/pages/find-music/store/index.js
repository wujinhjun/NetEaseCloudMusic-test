import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
        // getInfoBanner: (state) => {
        //     getInfoJson();
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInfoBanner.fulfilled, (state, action) => {
                state.pictureData = action.payload;
                // console.log(action.payload);
            })
    }
});

export const getInfoBanner = createAsyncThunk(
    'getInfoBanner',
    async () => {
        const result = await axios.get('/api/banner.json');
        return result.data.data.pictureData;
        // let result;
        // axios.get('/api/banner.json')
        //     .then((res) => {
        //         // console.log(res.data.data);
        //         result = res.data.data
        //         return result;
        //     })

        // return result;
    })

// export const getInfoBanner = (state) => {
//     return (dispatch) => {
//         axios.get('/api/banner.json')
//             .then((res) => {
//                 console.log(res.data.data);
//                 state.pictureData = res.data.data.pictureData;
//             })
//             .catch(() => {
//                 console.log("fail");
//             })
//     }
// }

export const {
    changeClickChoose,
    lastPic,
    nextPic,
} = findMusicSlice.actions;

export default findMusicSlice.reducer;