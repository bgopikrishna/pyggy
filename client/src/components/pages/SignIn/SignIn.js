import React, { useState } from 'react';
import Input from '../../common/input/Input';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(() => true);
        login({ email, password }).then(() => setLoader(() => false));
    };

    return (
        <div className="auth-form ">
            <form
                className="has-padding-50 flex-column has-margin-top-50"
                onSubmit={handleSubmit}>
                <h3 className="title is-3 has-text-centered">Sign In</h3>

                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    label="Email"
                    helpText="Please enter correct email"
                    placeholder="Enter your email"
                    icon="email"></Input>
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter passsword"
                    helpText="Invalid password"
                    icon="lock"
                    label="Password"></Input>

                <button
                    className={`button is-primary has-margin-top-20 ${
                        loader ? 'is-loading' : ''
                    }`}>
                    Sign In
                </button>

                {/* <p className="has-margin-30 is-size-6 has-text-grey-darker">or</p>

                <Link to="/signup" className="button is-link">
                    Create an account
                </Link> */}
            </form>
        </div>
    );
};

export default SignIn;
