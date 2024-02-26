import { configureStore } from "@reduxjs/toolkit";
import Favorites from "./Slices/Favorites";

const StroeConfig = configureStore({
    reducer: {
        favorite: Favorites
    }
})


export default StroeConfig