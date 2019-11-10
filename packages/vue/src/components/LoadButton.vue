<template>
    <button v-bind:disabled="disabled" class="load-button" v-on:click="onClick">Load next user</button>
</template>

<script>
let userIndex = 1;

export default {
    name: 'LoadButton',
    props: {
        onUserLoad: Function,
    },
    data: () => ({
        disabled: false,
    }),
    methods: {
        toggleDisabled() {
            this.disabled = !this.disabled;
        },
        onClick() {
            this.toggleDisabled();

            fetch(`https://jsonplaceholder.typicode.com/users/${userIndex++}`)
                .then(response => response.json())
                .then(this.onUserLoad)
                .then(this.toggleDisabled);
        },
    },
};
</script>

<style scoped>
.load-button {
    font-family: monospace;
    font-weight: 600;
    cursor: pointer;
    color: white;
    background-color: black;
    height: 2rem;
    width: 10rem;
    border-radius: 0.75rem;
    border: 1px solid white;
    box-shadow: 0 0.1rem 0.5rem #000;
    outline: 0;
}

.load-button:active {
    transform: scale(0.9);
}

.load-button[disabled] {
    color: grey;
}
</style>
