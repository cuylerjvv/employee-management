import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getShiftlists = createAsyncThunk('shiftlists/getShiftlists', async (location) => {
    console.log(location + " shiftlist reducer")
    const response = await fetch(`http://localhost:5000/${location}/shiftlist`);
    const responseData = await response.json();
    console.log(responseData)
    console.log(responseData.shiftlist)
    return responseData.shiftlist
})

export const resetStore = () => {
    return {
        type: 'RESET_STORE'
    };
};

const shiftlistSlice = createSlice({
    name: "shiftlist",
    initialState: {
        loading: false,
        shiftlist: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getShiftlists.pending, (state, action) => {
                state.loading = true;
                console.log(state.loading);
            })
            .addCase(getShiftlists.fulfilled, (state, action) => {
                state.loading = false;
                state.shiftlist = action.payload;
                console.log(state.loading);
            })
            .addCase(getShiftlists.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(resetStore, (state, action) => {
                return {
                    ...state,
                    shiftlist: [] 
                };
            });
}
})


export default shiftlistSlice.reducer;