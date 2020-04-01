import React, { Fragment } from 'react';
import './Accordion.scss';

const Accordion = ({ children }) => {
    return (
        <details>
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
