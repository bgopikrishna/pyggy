import React, { useState } from 'react';
import Input from '../../common/input/Input';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import Button from '../../common/Button/Button';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(() => true);
        login({ email, password })
            .then(() => setLoader(() => false))
            .catch((err) => {
                setLoader(false);
                setError(true);
            });
    };
    return (
        <div className="auth-form is-flex justify-content-center align-items-center">
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
                    icon="email"
                    required={true}
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter passsword"
                    helpText="Invalid password"
                    icon="lock"
                    label="Password"
                    required={true}
                />

                <Button
                    type="submit"
                    className="is-primary has-margin-top-20"
                    loading={loader}>
                    Sign In
                </Button>

                {error && (
                    <p className="has-text-danger">Invalid email or password</p>
                )}

                <Link
                    to="/signup"
                    className="has-margin-25 has-text-centered is-capitalized">
                    don't have an account? Sign Up
                </Link>
            </form>
        </div>
    );
};

export default SignIn;
