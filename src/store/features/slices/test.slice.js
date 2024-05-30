import { createSlice } from "@reduxjs/toolkit"

export const TestSlice = createSlice({
    name:"test",
    initialState: {
        value: 0
    },
    reducers:{
        increament:(state)=>{
            state.value += 1
        },
        decreament:(state)=>{
            state.value -= 1
        }
    },
    extraReducers:{}
});

export const {increament, decreament} = TestSlice.actions;
export default TestSlice.reducer;
