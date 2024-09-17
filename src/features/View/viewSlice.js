import { createSlice } from '@reduxjs/toolkit'

const viewSlice = createSlice({
    name: 'view',
    initialState: {
        view: 'home'
    },
    reducers: {
        setView: (state, action) => {
            state.view = action.payload;
        },
    }
})

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;