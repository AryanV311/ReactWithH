import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },

    reducers:{
        addTocart:(state, action) => {
            const item = action.payload
            const existingitem = state.items.find(i => i.id == item.id)
            if(existingitem){
                existingitem.quantity +=1;
            } else{
                state.items.push({...item, quantity:1});
            }
        },
        removeFromCart:(state, action) => {
            const item = action.payload

            const existing = state.items.find(i => i.id == item.id)

            if(existing){
                if(existing.quantity > 1){
                    existing.quantity -= 1;
                } else {
                 state.items = state.items.filter(i => i.id !== item.id)
                }
            }
        }
    }
})

export const {addTocart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;