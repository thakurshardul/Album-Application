import { configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "./albumReducer";

const store=configureStore({
    reducer:{albumReducer}
});

export default store;