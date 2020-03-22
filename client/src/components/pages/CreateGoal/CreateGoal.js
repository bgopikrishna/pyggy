import React from 'react';
import Input from '../../common/input/Input';
import useSetState from '../../../hooks/useSetState';
import TagsInput from '../../common/TagsInput/TagsInput';
import { useCallback } from 'react';

const CreateGoal = () => {
    const [state, setState] = useSetState({
        name: '',
        target: '',
        description: '',
        labels: ['electronics', 'laptop'],
        favourite: false,
        color: ''
    });

    const handleChange = (e) => {
        setState({ [e.target.name]: e.target.value });
    };



    const handleLabels = (labels) => setState({ labels });

    const { name, target, description, labels, favourite, color } = state;
    return (
        <div className="create_goal">
            <form className="create_goal__form">
                <Input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    label="name"
                    placeholder="Goal Name"
                />
                <Input
                    value={target}
                    onChange={handleChange}
                    type="number"
                    label="target"
                    placeholder="Need to save"
                />
                <Input
                    value={description}
                    onChange={handleChange}
                    type="textarea"
                    label="description"
                    placeholder="Description"
                />

                <TagsInput tags={labels} onChange={handleLabels}></TagsInput>

                <input type="checkbox" value={false}></input>
            </form>
        </div>
    );
};

export default CreateGoal;
