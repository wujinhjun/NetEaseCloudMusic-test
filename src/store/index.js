import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerStore';
import findMusicReducer from './FindMusicStore';

const store = configureStore({
    reducer: {
        header: headerReducer,
        findMusic: findMusicReducer
    }
});

export default store;
