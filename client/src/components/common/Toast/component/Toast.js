import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from '../Context/ToastContext';

const Toast = () => {
    const { toasts, deleteToast } = useToast();

    return createPortal(
        <Fragment>
            {toasts.map((toast) => (
                <div className={`notification is-${toast.type}`}>
                    <button
                        className="delete"
                        onClick={() => deleteToast(toast.id)}></button>
                    {toast.message}
                </div>
            ))}
        </Fragment>,
        document.getElementById('portal')
    );
};

export default Toast;
