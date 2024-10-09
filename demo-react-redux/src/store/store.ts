import { configureStore } from "@reduxjs/toolkit";
import grocerieReducer from "./groceries/groceries.reducer";
import recipeReducer from "./recipies/recipies.reducer";
import countriesReducer from "./countries/contries.reducer";

//configuration du store
const store =configureStore({
    reducer:{
        groceries : grocerieReducer,
        recipies : recipeReducer,
        countries: countriesReducer
    },
    devTools:import.meta.env.DEV
})

//export du typage pour l'utilisation de redux
export type AppStore = typeof store
export type StateStore =ReturnType<AppStore["getState"]>

//export du store
export default store