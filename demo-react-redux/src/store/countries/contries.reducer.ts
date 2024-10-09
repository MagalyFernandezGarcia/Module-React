import { createReducer } from "@reduxjs/toolkit"
import { Country } from "../../@types/country"
import { countrySearch } from "./countries.action"



type CountriesReducerState = {
    data? : Country,
    error? : string,
    isLoading? : boolean
}

const initialState : CountriesReducerState = {
    isLoading : false,
    data : undefined,
    error : undefined
}

const countriesReducer = createReducer(initialState, builder =>{

    builder.addCase(countrySearch.pending, (state)=>{
        state.isLoading = true
        state. data = undefined
        state.error = undefined
    }).addCase(countrySearch.fulfilled,(state, action)=>{
        state.isLoading = false
        state.data = action.payload
    }).addCase(countrySearch.rejected, (state, action)=>{
        state.isLoading = false
        state.error = action.error.message ?? "Oups"

    })

})

export default countriesReducer