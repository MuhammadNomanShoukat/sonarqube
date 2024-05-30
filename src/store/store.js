import { configureStore } from "@reduxjs/toolkit"

import TestReducer from "./features/slices/test.slice"
import NavigationReducer from "./features/slices/navigation.slice"
import bannerSlide from "./features/slices/banner.slide"

const reducer = {
    test: TestReducer,
    navigations: NavigationReducer,
    banner: bannerSlide
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;