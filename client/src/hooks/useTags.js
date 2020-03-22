import { useReducer } from 'react';
import { useCallback } from 'react';
import { removeDuplictesByProp } from '../utils/helper';

const TAG_ADD = 'TAG_ADD';
const TAG_REMOVE = 'TAG_REMOVE';

const reducer = (state, action) => {
    console.log('Disptacher called', state, action);

    if (action.type === TAG_ADD) {
        const { payload } = action;

        if (typeof payload.value === 'string') {
            //Set removes duplicates
            const newTags = [...new Set([...state, payload.value])];
            return newTags;
        } else {
            const newTags = removeDuplictesByProp([...state, payload.value]);

            return newTags;
        }
    }
    if (action.type === TAG_REMOVE) {
        const { payload } = action;

        console.log(payload);
        if (typeof payload.value === 'string') {
            const newTags = state.filter((val) => val !== payload.value);
            return newTags;
        } else {
            const newTags = state.filter((tag) => tag.id !== payload.value.id);
            return newTags;
        }
    }

    return state;
};

const useTags = (tags = []) => {
    const [state, dispatch] = useReducer(reducer, tags);

    const enhancedDispatch = useCallback((arg) => dispatch(arg), [dispatch]);

    return [state, enhancedDispatch];
};

export { TAG_ADD, TAG_REMOVE };
export default useTags;
