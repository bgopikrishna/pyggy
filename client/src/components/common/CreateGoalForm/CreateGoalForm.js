import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../input/Input';
import useSetState from '../../../hooks/useSetState';
import TagsInput from '../TagsInput/TagsInput';
import { GOAL_COLORS } from '../../../constants';
import './CreateGoalForm.scss';
import Button from '../Button/Button';

const defaultState = {
    name: '',
    target: '',
    description: '',
    labels: [],
    favourite: false,
    color: 'Teal',
    saved: 0
};

const CreateGoalForm = ({
    goal = defaultState,
    handleSubmit,
    isLoading = false,
    mode = 'create'
}) => {
    const [goalObj, setState] = useSetState(goal);
    const [labelsElemFocus, setLabelsElemFocus] = useState(false);

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

        if (!labelsElemFocus) {
            handleSubmit(goalObj);
        }
    };

    const handleLabelsFocus = (e) => {
        if (e.type === 'focus') {
            setLabelsElemFocus(true);
        }
        if (e.type === 'blur') {
            setLabelsElemFocus(false);
        }
    };

    const {
        name,
        target,
        description,
        labels,
        favourite,
        color,
        saved
    } = goalObj;
    return (
        <div className="create_goal">
            <div className="creat_goal_header is-flex justify-between has-padding-10 has-background-white position-fixed top-0 is-full-width has-text-primary">
                <span
                    className="material-icons"
                    role="button"
                    onClick={handleBack}>
                    arrow_back_ios
                </span>{' '}
                <h3 className="has-margin-auto has-text-primary title is-5">
                    Goal Details
                </h3>
            </div>

            <form
                className="create_goal__form has-padding-15 has-margin-top-50"
                onSubmit={handleOnSubmit}>
                <div className="">
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
                        min={0}
                    />
                    {mode !== 'create' && (
                        <Input
                            value={saved}
                            onChange={handleChange}
                            type="number"
                            label="saved"
                            placeholder="Need to save"
                            required={true}
                            max={target}
                            min={0}
                        />
                    )}
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
                            placeholder="Labels"
                            onFocus={handleLabelsFocus}
                            onBlur={handleLabelsFocus}
                        />
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
                            &nbsp;As Favourite (optional)
                        </label>
                    </div>
                </div>

                <div className="has-margin-top-25">
                    <Button
                        loading={isLoading}
                        type="submit"
                        className="button is-primary is-full-width box">
                        {mode === 'create' ? 'Create Goal' : 'Update Goal'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateGoalForm;
