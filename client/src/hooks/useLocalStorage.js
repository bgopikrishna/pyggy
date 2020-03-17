import { useState } from 'react';

export const useLocalStorage = (key) => {
    const storedValue = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : null;

    const [value, setValue] = useState(storedValue);

    const updateValue = (val) => {
        localStorage.setItem(key, JSON.stringify(val));
        setValue(val);
    };

    return [value, updateValue];
};
