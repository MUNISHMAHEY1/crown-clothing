import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './Header.Styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/CartSelector'; 
import { selectCurrentUser } from '../../redux/user/UserSelector';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/" className="logo-container">
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT 
            </OptionLink>

            {
                currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>LOGOUT</OptionLink>
                :
                <OptionLink to='/signIn'>
                    SIGN IN 
                </OptionLink>
            }    
            <CartIcon />  
        </OptionsContainer>
        {
            hidden ? 
            null:
            <CartDropdown />
        }
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);