import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservations: [],
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {

        addReservation: (state, action) => {
            state.reservations.push(action.payload);
        },
        removeReservation: (state, action) => {
            state.reservations = state.reservations.filter(
                reservation => reservation.id !== action.payload
            );
        },
    },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
