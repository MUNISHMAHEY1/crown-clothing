import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/CartSelector'; 
import { selectCurrentUser } from '../../redux/user/UserSelector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to="/" className="logo-container">
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link  className="option" to='/shop'>
                SHOP
            </Link>
            <Link  className="option" to='/contact'>
                CONTACT 
            </Link>

            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>LOGOUT</div>
                :
                <Link  className="option" to='/signIn'>
                    SIGN IN 
                </Link>
            }    
            <CartIcon />  
        </div>
        {
            hidden ? 
            null:
            <CartDropdown />
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);