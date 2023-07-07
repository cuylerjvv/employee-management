import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFirstdays = createAsyncThunk('firstdays/getFirstdays', async (location) => {
    console.log(location + " firstdays reducer")
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/${location}`);
    const responseData = await response.json();
    console.log(responseData)
    console.log(responseData.firstdays)
    return responseData.firstdays
})

const firstdaysSlice = createSlice({
    name: "firstdays",
    initialState: {
        loading: false,
        firstdays: [],
        length: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFirstdays.pending, (state, action) => {
                state.loading = true;
                console.log(state.loading);
            })
            .addCase(getFirstdays.fulfilled, (state, action) => {
                state.loading = false;
                state.firstdays = action.payload;
                state.length = state.firstdays.length;
                console.log(state.loading);
                console.log(state.length)
            })
            .addCase(getFirstdays.rejected, (state, action) => {
                state.loading = false;
            });
    }
})


export default firstdaysSlice.reducer;