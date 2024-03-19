import { createSlice } from "@reduxjs/toolkit";


const FavoritesSlice = createSlice({
    name: "fav",
    initialState: { fav: [] },
    reducers: {
        addToFavorite: (state, action) => {
            if (state.fav.length == 0) {
                console.log('you are in slice add to fav')
                state.fav = [action.payload]
            } else {
                state.fav = [...state.fav, action.payload]
            }
        },
        removeFromFavorite: (state, action) => {
            state.fav = state.fav.filter((product) => product._id != action.payload._id)
        }
    }
})

export const { addToFavorite, removeFromFavorite } = FavoritesSlice.actions

export default FavoritesSlice.reducer

