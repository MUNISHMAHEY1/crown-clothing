import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/UserSelector';
import { checkUserSession } from './redux/user/UserActions';
import ContactPage from './pages/contactpage/ContactPage';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); // useEffect will work only is there is change in checkUserSession

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signIn' 
          render={() => currentUser ? 
            (<Redirect to="/"/>) 
            : <SignInAndSignUpPage />} />
        <Route exact path="/checkout" component={CheckoutPage} /> 
        <Route exact path="/contact" component={ContactPage} />    
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
