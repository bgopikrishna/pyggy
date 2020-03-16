import React, { useState } from 'react';
import Input from '../../common/input/Input';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="auth-form">
            <form className="has-padding-50 flex-column has-margin-top-50">
                <h3 className="title is-3 has-text-centered">Sign Up</h3>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    label="Name"
                    error={true}
                    helpText="Please enter name"
                    placeholder="Enter your name"
                    icon="email"></Input>

                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    label="Email"
                    error={true}
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

                <button class="button is-primary has-margin-top-20">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
