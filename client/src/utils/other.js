export const storeInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key) => {
    const value = getItemFromLocalStorage(key);

    return value ? JSON.parse(value) : null;
};
