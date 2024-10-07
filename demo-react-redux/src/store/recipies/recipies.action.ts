import { createAction } from "@reduxjs/toolkit";
import { NewRecipe, Recipe } from "../../@types/recipie";
import { nanoid } from "nanoid";

export const recipeAdd = createAction("recipe/add", (recipe : NewRecipe)=>{

    const payload : Recipe ={
        ...recipe,
        id :nanoid()
    }
    return {payload}
    
})


export const recipeDelt =createAction<string>("recipe/delt")