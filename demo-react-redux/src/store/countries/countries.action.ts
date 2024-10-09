import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountryByName } from "../../services/country.services";

export const countrySearch = createAsyncThunk(
    "country/search",//nom de l'action
     async (name:string)=>{
        //appel de la requête ajax (via un service)
        const result = await fetchCountryByName(name)
        return  result//envoi du resultat
     }
)