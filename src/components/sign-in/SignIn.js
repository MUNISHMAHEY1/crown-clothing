import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const{ email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password: ''})
        } catch(error) {
            console.log(error);

        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h1>I already have an account</h1>
                <span className="title">Sign in with your email and password</span>

                <form>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required // this is equal to required=true
                        ></FormInput>

                    <FormInput 
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required // this is equal to required=true
                        ></FormInput>
                    <div className="buttons">
                        <CustomButton type="submit" > Sign In</CustomButton>  
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>    
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;
