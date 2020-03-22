const storeInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = (key) => {
    const value = getItemFromLocalStorage(key);

    return value ? JSON.parse(value) : null;
};

const removeDuplictesByProp = (array, prop = 'id') => {
    return array.filter(
        (v, i, a) => a.findIndex((t) => t[prop] === v[prop]) === i
    );
};

export { removeDuplictesByProp, storeInLocalStorage, getItemFromLocalStorage };
