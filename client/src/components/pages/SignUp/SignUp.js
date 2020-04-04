import React, { useState } from 'react';
import Input from '../../common/input/Input';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(() => true);
        signup({ name, email, password })
            .then(() => setLoader(() => false))
            .catch((err) => {
                setLoader(false);
                setError(true);
            });
    };

    return (
        <div className="auth-form auth-form is-flex justify-content-center align-items-center">
            <form
                className="has-padding-50 flex-column has-margin-top-50"
                onSubmit={handleSubmit}>
                <h3 className="title is-3 has-text-centered">Sign Up</h3>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    label="Name"
                    helpText="Please enter name"
                    placeholder="Enter your name"
                    icon="face"
                    required={true}
                />

                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
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
                    Sign Up
                </Button>

                {error && (
                    <p className="has-text-danger">
                        Something went wrong, try refreshing the page
                    </p>
                )}

                <Link
                    to="/signin"
                    className="has-margin-25 has-text-centered is-capitalized">
                    Already have an account? Sign In
                </Link>
            </form>
        </div>
    );
};

export default SignUp;
