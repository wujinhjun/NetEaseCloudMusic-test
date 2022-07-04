import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../header/store';

const store = configureStore({
    reducer: {
        header: headerReducer,
    }
});

export default store;
