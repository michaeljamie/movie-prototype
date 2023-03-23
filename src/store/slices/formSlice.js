import { createSlice } from '@reduxjs/toolkit'; 

const formSlice = createSlice({
    name: 'form',
    initialState: {
        page: 1,
        paginationScreen: 1,
    },
    reducers: {
        changePage(state, action) {
            state.page = action.payload;
        },
        changeScreen(state, action) {
            state.paginationScreen = action.payload;
        },
    },
});

export const { changeScreen, changePage } = formSlice.actions;
export const formReducer = formSlice.reducer;