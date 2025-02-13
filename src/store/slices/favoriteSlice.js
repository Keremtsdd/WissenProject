import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0,
    favoriteArray: []
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        incremant: (state, action) => {
            let carFind = state.favoriteArray.find(x => x.carId === action.payload.carId)
            if (!carFind) {
                state.number += 1
                state.favoriteArray.push(action.payload)
            }

        },
        removeFromFavorite: (state, action) => {
            state.favoriteArray = state.favoriteArray.filter(x => x.carId !== action.payload)
            state.number -= 1
        }
    }
})

export const { incremant, removeFromFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer