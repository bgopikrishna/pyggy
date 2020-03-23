import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../input/Input';
import useSetState from '../../../hooks/useSetState';
import TagsInput from '../TagsInput/TagsInput';
import Dropdown from '../Dropdown/Dropdown';
import { GOAL_COLORS } from '../../../constants';
import './CreateGoalForm.scss';

const defaultState = {
    name: '',
    target: '',
    description: '',
    labels: [],
    favourite: false,
    color: 'Teal'
};

const CreateGoalForm = ({
    goal = defaultState,
    handleSubmit,
    isLoading = false
}) => {
    const [goalObj, setState] = useSetState(goal);

    const handleChange = (e) => {
        setState({ [e.target.name]: e.target.value });
    };

    const handleLabels = (labels) => setState({ labels });

    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(goalObj);
        handleSubmit(goalObj);
    };

    const { name, target, description, labels, favourite, color } = goalObj;
    return (
        <div className="create_goal has-padding-10">
            <div className="creat_goal_header is-flex justify-center">
                <span
                    className="material-icons has-margin-right-auto"
                    onClick={handleBack}>
                    arrow_back_ios
                </span>{' '}
                <h3 className="has-margin-right-auto title is-5">
                    Create a Goal
                </h3>
            </div>

            <form
                className="create_goal__form has-padding-15 has-margin-top-15"
                onSubmit={handleOnSubmit}>
                <div className="box">
                    <Input
                        value={name}
                        onChange={handleChange}
                        type="text"
                        label="name"
                        placeholder="Goal Name"
                        required={true}
                    />
                    <Input
                        value={target}
                        onChange={handleChange}
                        type="number"
                        label="target"
                        placeholder="Need to save"
                        required={true}
                    />
                    <Input
                        value={description}
                        onChange={handleChange}
                        type="textarea"
                        label="description"
                        placeholder="Description"
                    />

                    <div className="field">
                        <label
                            htmlFor="labels"
                            className="label is-capitalized">
                            Labels
                        </label>
                        <TagsInput
                            tags={labels}
                            onChange={handleLabels}
                            label="labels"
                            placeholder="Labels"></TagsInput>
                    </div>

                    <div className="field has-margin-top-25">
                        <label
                            htmlFor="color"
                            className="label is-capitalized is-flex align-items-center">
                            Color &nbsp;{' '}
                            <span
                                className={`create_goal_color ${color}`}></span>
                        </label>
                        <div className="select">
                            <select
                                value={color}
                                name="color"
                                id="color"
                                onChange={handleChange}>
                                {GOAL_COLORS.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="field has-margin-top-25">
                        <label
                            htmlFor="favourite"
                            className="checkbox label is-capitalized">
                            <input
                                type="checkbox"
                                name="favourite"
                                onChange={handleChange}
                                value={favourite}
                                id="favourite"
                            />
                            &nbsp; Favourite
                        </label>
                    </div>
                </div>

                <div className="box is-paddingless">
                    <button
                        type="submit"
                        className={`button is-primary is-full-width ${
                            isLoading ? 'is-loading' : ''
                        }`}>
                        Create Goal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGoalForm;
