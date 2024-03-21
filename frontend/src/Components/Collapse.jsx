import React, { useState } from 'react';
import '@/styles/index.css';
import '@/styles/collapse.css';
import { ReactComponent as Arrow } from '@/assets/Arrow.svg';

const Collapse = ({ title, text, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggle}>
                <div className="collapse-header-title">{title}</div>
                <div className="collapse-header-arrow">
                    <span aria-label="arrow">
                        <Arrow style={{ fill: "var(--color-quaternary)" }} />
                    </span>
                </div>
            </div>

            <div className={`collapse-text ${isOpen ? 'open' : 'closed'}`}>
                <div>{text || content}</div>
            </div>
        </div>
    );
};

export default Collapse;