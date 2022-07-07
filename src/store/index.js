import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../header/store';
import findMusicReducer from '../pages/find-music/store';

const store = configureStore({
    reducer: {
        header: headerReducer,
        findMusic: findMusicReducer
    }
});

export default store;
