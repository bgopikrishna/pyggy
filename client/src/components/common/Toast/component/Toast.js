import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { useToast } from '../Context/ToastContext';
import './Toast.scss';

const Toast = () => {
    const { toasts, deleteToast } = useToast();

    return createPortal(
        <CSSTransitionGroup
            transitionName="notifications"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {toasts.map((toast) => (
                <div
                    className={`notification box is-full-width is-${toast.type}`}
                    key={toast.id}>
                    <button
                        className="delete"
                        onClick={() => deleteToast(toast.id)}></button>
                    {toast.message}
                </div>
            ))}
        </CSSTransitionGroup>,
        document.getElementById('portal')
    );
};

export default Toast;
export { Toast };
