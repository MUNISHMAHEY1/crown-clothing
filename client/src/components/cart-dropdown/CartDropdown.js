import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/CartSelector';
import { toggleCartHidden } from '../../redux/cart/CartAction';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? (
                cartItems.map(
                    cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />)
            )
            : (
                <span className="empty-message">Your cart is Empty</span>
            )
            
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
