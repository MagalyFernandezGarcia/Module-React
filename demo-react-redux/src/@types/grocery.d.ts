export type Grocery = {
    id: string,
    name: string,
    quantity: number,
    isCheck: boolean
    
}

export type GroceryNew = Omit <Grocery, "isCheck" | "id"> //retire la valeur isCheck et id pour GroceryNew