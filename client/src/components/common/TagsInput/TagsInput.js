import React from 'react';
import useTags, { TAG_ADD, TAG_REMOVE } from '../../../hooks/useTags';

const TagsInput = ({ tags = [], onChange, placeholder, label = 'tags' }) => {
    const [state, dispatch] = useTags(tags);

    const addTag = (e) => {
        console.log('event', e.key, e.target.value);

        if (e.key === 'Enter' && e.target.value !== '') {
            dispatch({
                type: TAG_ADD,
                payload: {
                    value: e.target.value
                }
            });

            e.target.value = '';
        }

        onChange(state);
    };

    const removeTag = (tag) => {
        dispatch({
            type: TAG_REMOVE,
            payload: {
                value: tag
            }
        });
        onChange(state);
    };

    return (
        <div className="tags-input tags">
            {state.map((tag, index) => (
                <span className="tag" key={index}>
                    {tag}
                    <span
                        className="delete is-small"
                        role="button"
                        onClick={() => removeTag(tag)}></span>
                </span>
            ))}
            <input
                className="input"
                type="text"
                label={label}
                placeholder={placeholder}
                onKeyUp={addTag}
            />
        </div>
    );
};

export default TagsInput;
