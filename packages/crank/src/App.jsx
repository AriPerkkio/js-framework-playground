/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';

import UserList from './components/UserList';
import LoadButton from './components/LoadButton';

export default function* App() {
    let users = [];

    const addUser = user => {
        users.push(user);
        this.refresh();
    };

    while (true)
        yield (
            <div>
                <h1>Crank</h1>
                <UserList users={users} />
                <LoadButton onUserLoad={addUser} />
            </div>
        );
}
