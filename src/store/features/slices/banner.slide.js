import { createSlice } from "@reduxjs/toolkit"
import { DB } from "../../../config/db";

export const BannerSlice = createSlice({
    name:"banner",
    initialState:{
        value: DB.BANNER
    },
    reducers:{
        test: (state, actions)=>{

        }
    },
    extraReducers:{}
});

export const { test } = BannerSlice.actions
export default BannerSlice.reducer