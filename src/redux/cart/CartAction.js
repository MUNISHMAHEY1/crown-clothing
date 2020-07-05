import CartActionTypes from './CartTypes';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})