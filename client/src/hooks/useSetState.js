import { useReducer } from 'react';

const reducer = (state, action) => {
    return { ...state, ...action };
};

const useSetState = (initialState = {}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
};

export default useSetState;
