import{createAction} from "@reduxjs/toolkit"
import type { GroceryNew, Grocery } from "../../@types/grocery"
import { nanoid } from "nanoid"


export const grocerAdd =createAction("grocery/add",(elem : GroceryNew)=>{
    
    const payload : Grocery ={
        ...elem,
        id: nanoid(), 
        isCheck : false
    }

    return {payload}
    
})
 export const grocerCheck =createAction<string>("grocery/check")
 export const grocerDelt =createAction<string>("grocery/delt")
export const groceryClear =createAction("grocery/clear")