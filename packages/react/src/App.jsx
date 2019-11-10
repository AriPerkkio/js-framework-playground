import React, { useReducer } from 'react';

import UserList from './components/UserList';
import LoadButton from './components/LoadButton';

const App = () => {
    const [users, addUser] = useReducer((prev, next) => [...prev, next], []);

    return (
        <>
            <h1>React</h1>
            <UserList users={users} />
            <LoadButton onUserLoad={addUser} />
        </>
    );
};

export default App;
