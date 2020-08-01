import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useAsync } from 'react-async';
import Button from '../../common/Button/Button';

function ChangePassword() {
    const [submitted, setSubmitted] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const { createNewPassword } = useAuth();
    const [error, setError] = useState(false);
    const { id, token } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, token)

        if (newPassword && confirmPass && newPassword !== confirmPass) {
            setPasswordMatch(false);

        } else {
            run({ newPassword: newPassword.trim(), id, token });
        }
    };

    const handleResolve = () => {
        setSubmitted(true);
    };

    const handleError = (err) => {
        setSubmitted(true);
        setError(false);
    };

    const { isLoading, run } = useAsync({
        deferFn: createNewPassword,
        onResolve: handleResolve,
        onReject: handleError
    });

    const successTemplate = (
        <p className="has-text-centered message is-success has-padding-50 is-half-width has-margin-auto">
            Password Has been changed succefully, Please{' '}
            <Link to="/signin">login</Link> again.
        </p>
    );

    const errorTemplate = (
        <p className="has-text-centered message is-dagner has-padding-50 is-half-width has-margin-auto">
            Error updating your password, Please try again after sometime. Go
            back to <Link to="/">home page</Link>.``
        </p>
    );
    const infoTemplate = (
        <div className="message is-warning is-half-width has-margin-auto has-padding-25">
            <p className="has-text-centered">
                You can reset your password by using this form.
            </p>
            <p className="has-text-centered">
                be logged out from the current session automatically.
            </p>
        </div>
    );

    return (
        <div className="container">
            <h2 className="has-text-centered title is-2 has-margin-50">
                Change Password
            </h2>

            {submitted
                ? !error
                    ? successTemplate
                    : errorTemplate
                : infoTemplate}

            {!submitted && (
                <form
                    className="justify-center flex-column align-items-center has-margin-50 is-fullheight"
                    onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="field has-margin-top-25">
                            <label className="label" htmlFor="new-password">
                                New Password
                            </label>
                            <div className="control">
                                <input
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                    className="input"
                                    type="password"
                                    placeholder="Enter your new password"
                                    id="new-password"
                                    name="new-password"
                                    autoComplete="new-password"
                                    minLength="8"
                                    required={true}
                                />
                            </div>
                            <label className="label" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <div className="control">
                                <input
                                    value={confirmPass}
                                    onChange={(e) =>
                                        setConfirmPass(e.target.value)
                                    }
                                    className="input"
                                    type="password"
                                    placeholder="Re-Enter your new password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    autoComplete="confirm-password"
                                    minLength="8"
                                    required={true}
                                />
                            </div>
                        </div>
                        {!passwordMatch && (
                            <p className="has-text-danger">
                                Passwords do not match.
                            </p>
                        )}
                        <div className="control has-margin-top-25 is-fullwidth">
                            <Button
                                loading={isLoading}
                                className="button is-primary is-fullwidth"
                                type="submit">
                                Change Password
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ChangePassword;
