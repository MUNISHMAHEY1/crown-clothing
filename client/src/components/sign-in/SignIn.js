import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/UserActions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const{ email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value })
    }

    return(
        <div className="sign-in" onSubmit={handleSubmit}>
            <h1>I already have an account</h1>
            <span className="title">Sign in with your email and password</span>

            <form>
                <FormInput 
                    name="email"
                    type="email"
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                    required // this is equal to required=true
                    ></FormInput>

                <FormInput 
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required // this is equal to required=true
                    ></FormInput>
                <div className="buttons">
                    <CustomButton type="submit" > Sign In</CustomButton>  
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> 
                        Sign In With Google
                    </CustomButton>    
                </div>
                
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})


export default connect(null, mapDispatchToProps)(SignIn);
