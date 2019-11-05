<script>
    import { users } from './store.js';

    let _users = []; // TODO is local variable really required

    users.subscribe(users => {
        _users = users;
    })
</script>

<style>
    li {
        margin-top: .5rem;
    }
</style>

<ul>
    {#each _users as user}
        <li>{user.name} : {user.email}</li>
    {/each}
</ul>