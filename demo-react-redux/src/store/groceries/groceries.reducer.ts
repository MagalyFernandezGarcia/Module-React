import { createReducer } from "@reduxjs/toolkit";
import { Grocery } from "../../@types/grocery";
import { grocerAdd, grocerCheck, grocerDelt, groceryClear } from "./groceries.action";

export type GroceriesReducerState ={
    list: Grocery[]
    count: number
}

const initialiseState : GroceriesReducerState ={
    list:[],
    count : 0
}

const grocerieReducer= createReducer(initialiseState, builder=>{
    builder.addCase(grocerAdd,(state,action)=>{
        state.list.push(action.payload)
        state.count++

    })
    .addCase(grocerCheck,(state,action)=>{
        const targetId=action.payload //récupérer l'id de l'objet à modifier
        const target = state.list.find(g=>g.id ===targetId) //récupérer l'objet sur base de l'id
        if(target){//vérifie que target n'est pas undefined
            target.isCheck =true
        }
    }).addCase(grocerDelt,(state,action)=>{
        const id = action.payload
        state.list=state.list.filter(g=>g.id !== id)
        state.count=state.list.length

    }).addCase(groceryClear,(state)=>{
        state.list =[]
        state.count =0
    })
})

export default grocerieReducer