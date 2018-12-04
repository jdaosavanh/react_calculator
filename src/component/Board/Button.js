import React from 'react';
import './button.scss';

const Button = props => (
    <div className={props.className} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

export default Button