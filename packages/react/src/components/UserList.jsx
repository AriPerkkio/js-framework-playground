import React from 'react';

const UserList = ({ users }) => (
    <ul className='user-list'>
        {users.map(({ name, email }) => (
            <li key={name}>
                {name} : {email}
            </li>
        ))}
    </ul>
);

export default UserList;
