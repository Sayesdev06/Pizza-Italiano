import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
    // cart:
    // [{
    //     pizzaId: 2,
    //     name: "Tunisienne",
    //     quantity: 1,
    //     unitPrice: 10,
    //     totalPrice: 10,
    // },]
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { 
        addItem(state, action) {
        //new Item
            state.cart.push(action.payload)
        } ,
        //Pizza ID
        deleteItem(state, action) {
           state.cart =  state.cart.filter((item) => item.pizzaId !== action.payload)
        } , 
        //Pizza ID
        increaseItemQuantity(state, action) {

           const selectedItem =  state.cart.find((item) => item.pizzaId === action.payload)
            selectedItem.quantity++
            selectedItem.totalPrice = selectedItem.quantity * selectedItem.unitPrice;
        } , 
//Pizza ID
        decreaseItemQuantity(state, action) {
             const selectedItem =  state.cart.find((item) => item.pizzaId === action.payload)
            selectedItem.quantity--
            selectedItem.totalPrice = selectedItem.quantity * selectedItem.unitPrice

            if(selectedItem.quantity === 0) cartSlice.caseReducers.deleteItem(state , action)
        } , 
        clearCart(state) {
            state.cart = []
        } , 
    }
})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer;


export const getCart = state => state.cart.cart
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum , item) => sum + item.quantity , 0)
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCurrentQuantityById = id => state => state.cart.cart.find(item => item.pizzaId === id )?.quantity ?? 0;