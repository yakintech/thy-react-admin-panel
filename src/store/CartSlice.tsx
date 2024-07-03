import { createSlice } from "@reduxjs/toolkit";

const initialState : CartSliceType  = {
    items: []
}

export const CartSlice = createSlice({
    initialState: initialState,
    name: "cart",
    reducers: {
        addItem: (state, action) => {
            
            const item = action.payload
            const existingItem = state.items.find(i => i.id === item.id)
            if(existingItem){
                existingItem.quantity!++
            }
            else{
                state.items.push({...item, quantity: 1})
            }

        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export type CartSliceType = {
    items: CartItem[]
}

export type CartItem = {
    id?: string
    name?: string
    price?: number
    quantity?: number
}


export const { addItem, removeItem, clearCart } = CartSlice.actions
export default CartSlice.reducer