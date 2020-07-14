import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton';
import { selectCartItems, selectCartTotal } from '../../redux/cart/CartSelector';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />    
        ))}

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        {
            total ? (
                <>
                    <div className="test-warning">
                        *Please use the following test credit card for payments* <br />
                        5555 5555 5555 4444 - Exp: 01/24 - CVV: 123
                    </div>
                    <StripeCheckoutButton price={total} />
                </>
            ):
            null
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);