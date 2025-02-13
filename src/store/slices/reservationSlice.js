// src/store/slices/reservationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservations: [],  // Rezervasyonlar burada tutulacak
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addReservation: (state, action) => {
            // 'action.payload' kullanarak yeni rezervasyonu ekleyin
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
