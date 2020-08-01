import React, { useRef } from 'react';
import { useGoals } from '../../../context/GoalsContext';
import { useState } from 'react';
import GoalsList from '../../GoalsList/GoalsList';
import './Search.scss';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

const Search = () => {
    const history = useHistory();

    const inputRef = useRef();

    const handleBack = () => {
        history.goBack();
    };

    const { goals } = useGoals();

    const activeGoals = goals.filter(
        (goal) => goal.saved !== goal.target && !goal.archived
    );

    const completedGoals = goals.filter(
        (goal) => goal.saved === goal.target && !goal.archived
    );

    const archivedGoals = goals.filter((goal) => goal.archived);

    const [searchInput, setSearchInput] = useState('');

    const [filteredList, setFilterList] = useState([]);

    const handleInput = (value) => {
        value = value.toLowerCase();

        setSearchInput(() => value);
        if (value) {
            const list = [
                ...activeGoals,
                ...completedGoals,
                ...archivedGoals
            ].filter((goal) => {
                if (goal.name.toLowerCase().includes(value)) return true;
                if (goal.labels.map((lab) => lab.toLowerCase()).includes(value))
                    return true;
                if (goal.description.toLowerCase().includes(value)) return true;

                return false;
            });
            setFilterList(list);
        } else {
            setFilterList([]);
        }
    };

    useLayoutEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <section className="search-page">
            <div className="search-page-box position-fixed field is-flex align-items-center has-padding-10 box has-margin-bottom-20">
                <span
                    onClick={handleBack}
                    className="icon has-margin-right-10 is-hidden-desktop"
                    role="button">
                    <span className="material-icons">arrow_back</span>{' '}
                </span>
                <p className="control has-icons-right is-full-width">
                    <input
                        ref={inputRef}
                        onChange={(e) => handleInput(e.target.value)}
                        value={searchInput}
                        className="input "
                        type="search"
                        placeholder="Search by goal name, labels and description"
                    />
                    <span className="icon is-small is-right">
                        <span className="material-icons">search</span>{' '}
                    </span>
                </p>
            </div>

            {!!filteredList.length && (
                <GoalsList goals={filteredList}></GoalsList>
            )}
        </section>
    );
};

export default Search;
