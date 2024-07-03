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
            
            localStorage.setItem("cart", JSON.stringify(state.items))

        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = []
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        loadCart: (state) => {
            const items = localStorage.getItem("cart")
            if(items){
                state.items = JSON.parse(items)
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload)
            if(item){
                item.quantity!++
            }
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload)
            if(item){
                item.quantity!--
                if(item.quantity === 0){
                    state.items = state.items.filter(i => i.id !== action.payload)
                }
            }

            
            localStorage.setItem("cart", JSON.stringify(state.items))
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


export const { addItem, removeItem, clearCart, loadCart, increaseQuantity, decreaseQuantity } = CartSlice.actions
export default CartSlice.reducer