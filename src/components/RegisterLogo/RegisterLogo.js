import React from 'react';

export const RegisterLogo = props => (
    <div className="register-logo">
        <a href={ props.url }><b>{ props.text }</b></a>
    </div>
);

RegisterLogo.defaultProps = {
    url: '#',
    text: 'To-Do'
};
