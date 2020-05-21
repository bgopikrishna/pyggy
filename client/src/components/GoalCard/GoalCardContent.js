import React from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionContent
} from '../common/Accordion/Accordion';

export const GoalCardContent = ({ goal }) => {
    const { saved, target, labels, description } = goal;
    return (
        <div className="card-content is-flex justify-space-around is-paddingless">
            <Accordion>
                <AccordionHeader>
                    <div className="is-flex justify-space-evenly has-margin-right-25">
                        {' '}
                        <p>Saved: ${saved}</p>
                        <p className="content">
                            Progress:{' '}
                            {Math.round(
                                (parseFloat(saved) / parseFloat(target)) * 100
                            )}
                            %
                        </p>
                    </div>
                </AccordionHeader>
                <AccordionContent>
                    <div className="card-content-expand">
                        <p>Target: ${target}</p>
                        <p className="has-margin-top-10">{description}</p>
                        <div className="tags has-margin-top-10">
                            {labels.map((label) => (
                                <span key={label} className="tag">
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </AccordionContent>
            </Accordion>
        </div>
    );
};
