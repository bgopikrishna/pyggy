import React, { useState, useEffect } from 'react';

import { useAsync } from 'react-async';
import Button from '../../common/Button/Button';
import useAuth from '../../../hooks/useAuth';

function ResetPassword() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const { sendResetPWemail } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        run({ email });
    };

    const handleResolve = () => {
        setSubmitted(true);
    };

    useEffect(() => {
        let timer;
        if (submitted) {
            timer = setTimeout(() => {
                window.localStorage.clear();
                window.location.replace(window.location.origin);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [submitted]);

    const { isLoading, run } = useAsync({
        deferFn: sendResetPWemail,
        onResolve: handleResolve,
        onReject: handleResolve
    });

    return (
        <div className="container">
            <h2 className="has-text-centered title is-2 has-margin-50">
                Reset Password
            </h2>

            {submitted ? (
                <p className="has-text-centered message is-success has-padding-50 is-half-width has-margin-auto">
                    Reset password link has been sent to your email. It will
                    expire in 1 hour. Please login again after resetting
                    password.
                </p>
            ) : (
                <div className="message is-warning is-half-width has-margin-auto has-padding-25">
                    <p className="has-text-centered">
                        If the email is in our database, we'll send you the
                        reset link.
                    </p>
                    <p className="has-text-centered">
                        You'll also be logged out from the current session
                        automatically.
                    </p>
                </div>
            )}

            {!submitted && (
                <form
                    className="justify-center flex-column align-items-center has-margin-20 is-fullheight"
                    onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="field has-margin-top-25">
                            <label className="label" htmlFor="email">
                                Email
                            </label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="e.g. alexsmith@gmail.com"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <p className="help">
                                Enter your email address to send password reset
                                link.
                            </p>
                        </div>
                        <div className="control has-margin-top-25 is-fullwidth">
                            <Button
                                loading={isLoading}
                                className="button is-primary is-fullwidth"
                                type="submit">
                                Send Password Reset Link
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ResetPassword;
