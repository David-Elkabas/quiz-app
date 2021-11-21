import { configureStore } from "@reduxjs/toolkit";
import livesReducer from '../features/lives/livesSlice'

export default configureStore({
    reducer: {
        lives: livesReducer
    }
});