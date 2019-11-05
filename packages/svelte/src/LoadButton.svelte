<script>
    import { users } from './store.js';

    export let onUserLoad;
    let userIndex = 1;
    let disabled = false;

    const toggleDisabled = () => {
        disabled = !disabled;
    }

    const onClick = () => {
        toggleDisabled();

        fetch(`https://jsonplaceholder.typicode.com/users/${userIndex++}`)
            .then(response => response.json())
            .then(user => users.update(prev => prev.concat(user)))
            .then(toggleDisabled);
    }
</script>

<style>
    button {
        font-family: monospace;
        font-weight: 600;
        cursor: pointer;
        color: white;
        background-color: black;
        height: 2rem;
        width: 10rem;
        border-radius: .75rem;
        border: 1px solid white;
        box-shadow: 0 0.1rem 0.5rem #000;
        outline: 0;
    }

    button:active {
        transform: scale(0.9);
    }

    button[disabled] {
        color: grey;
    }
</style>

<button disabled={disabled} on:click={onClick}>
    Load next user
</button>