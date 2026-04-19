export const selectTotalPrice = (state) => 
     state.cart.reduce((acc, item) => acc + (item.count * item.price),0);