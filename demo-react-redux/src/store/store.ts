import { configureStore } from "@reduxjs/toolkit";
import grocerieReducer from "./groceries/groceries.reducer";

//configuration du store
const store =configureStore({
    reducer:{
        groceries : grocerieReducer
    },
    devTools:import.meta.env.DEV
})

//export du typage pour l'utilisation de redux
export type AppStore = typeof store
export type stateStore =ReturnType<AppStore["getState"]>

//export du store
export default store