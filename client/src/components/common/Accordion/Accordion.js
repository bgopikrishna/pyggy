import React, { Fragment } from 'react';
import './Accordion.scss';
import { useRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const Accordion = ({ children }) => {
    const ref = useRef(null);

    useOnClickOutside(ref, () => ref && ref.current.removeAttribute('open'));

    return (
        <details ref={ref}>
            <Fragment>{children}</Fragment>
        </details>
    );
};

const AccordionHeader = ({ children }) => {
    return (
        <summary>
            <div className="summary-title">{children}</div>
            <div className="summary-chevron-up">
                <span className="material-icons" role="button">
                    expand_more
                </span>
            </div>
        </summary>
    );
};

const AccordionContent = ({ children }) => {
    return (
        <Fragment>
            <div className="summary-content">{children}</div>
            <div className="summary-chevron-down">
                <span className="material-icons">expand_less</span>
            </div>
        </Fragment>
    );
};

export { Accordion, AccordionHeader, AccordionContent };
