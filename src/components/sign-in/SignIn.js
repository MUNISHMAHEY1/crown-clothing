import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password: ''})
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

                    <CustomButton type="submit" value="Submit Form"> Sign In</CustomButton>    
                </form>
            </div>
        );
    }
}

export default SignIn;
