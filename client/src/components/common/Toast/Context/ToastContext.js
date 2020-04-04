import React, { createContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useReducer } from 'react';
import { useContext } from 'react';

const ADD_TOAST = 'ADD_TAOST';
const REMOVE_TOAST = 'REMOVE_TOAST';

const ToastContext = createContext();

const reducer = (state, action) => {
    if (action.type === ADD_TOAST) {
        console.log('tasost', state, action);
        return [...state, action.payload];
    }

    if (action.type === REMOVE_TOAST) {
        const toastId = action.payload.id;
        const newToasts = state.filter((toast) => toast.id !== toastId);

        return newToasts;
    }

    return state;
};

const ToastProvider = (props) => {
    const [toasts, dispatch] = useReducer(reducer, []);

    let timer;

    const addToast = ({ message, type }) => {
        const id = uuid();
        dispatch({ type: ADD_TOAST, payload: { id, message, type } });

        // timer = setTimeout(
        //     () => dispatch({ type: REMOVE_TOAST, payload: { id } }),
        //     3000
        // );
    };

    const deleteToast = (id) =>
        dispatch({ type: REMOVE_TOAST, payload: { id } });

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, [timer]);

    return (
        <ToastContext.Provider
            value={{ toasts, addToast, deleteToast }}
            {...props}
        />
    );
};

const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('Error, useToast must be used within ToastProvider');
    }

    return context;
};

export { ToastProvider, useToast };
