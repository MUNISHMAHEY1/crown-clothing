import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/UserActions';

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
        const { emailSignInStart } = this.props;
        const{ email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        const { googleSignInStart } = this.props;
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
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>    
                    </div>
                    
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})


export default connect(null, mapDispatchToProps)(SignIn);
