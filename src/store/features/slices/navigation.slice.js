import { createSlice } from "@reduxjs/toolkit"
import { DB } from "../../../config/db"

export const NavigationSlice = createSlice({
    name:"navigations",
    initialState: {
        navigationMenu: DB.NAVIGATIONS
    },
    reducers:{},
    extraReducers:{}
});

export const { getNavigation } = NavigationSlice.actions;
export default NavigationSlice.reducer;