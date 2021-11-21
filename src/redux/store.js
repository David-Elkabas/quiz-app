import { configureStore } from "@reduxjs/toolkit";
import livesReducer from '../features/livesSlice';
import scoreReducer from '../features/scoreSlice';

export default configureStore({
    reducer: {
        lives: livesReducer,
        score: scoreReducer,
    }
});