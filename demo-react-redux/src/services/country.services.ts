import axios from "axios";
import { Country, CountryRequestResult } from "../@types/country";

export  async function fetchCountryByName(name:string) : Promise<Country>{

    const baseUrl = "https://restcountries.com/v3.1/name/__NAME__"

    const url = baseUrl.replace("__NAME__", name)

    const response = await axios.get<CountryRequestResult>(url)

    const data = response.data[0]

    return {
        name : data.name.common,
        official : data.name.official,
        shortName : data.cca2,
        capital: data.capital,
        flag: data.flag,
        currencies: Object.values(data.currencies) as [{name : string , symbol : string}]


    }



}