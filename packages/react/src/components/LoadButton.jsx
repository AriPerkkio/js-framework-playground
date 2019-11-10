import React, { useReducer } from 'react';

const LoadButton = ({ onUserLoad }) => {
    const [userIndex, increaseUserIndex] = useReducer(s => s + 1, 1);
    const [disabled, toggleDisabled] = useReducer(s => !s, false);

    const onClick = () => {
        toggleDisabled();
        increaseUserIndex();

        fetch(`https://jsonplaceholder.typicode.com/users/${userIndex}`)
            .then(response => response.json())
            .then(onUserLoad)
            .then(toggleDisabled);
    };

    return (
        <button onClick={onClick} disabled={disabled} className='load-button'>
            Load next user
        </button>
    );
};

export default LoadButton;
