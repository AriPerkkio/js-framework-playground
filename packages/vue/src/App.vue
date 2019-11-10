<template>
    <div>
        <h1>Vue</h1>
        <UserList v-bind:users="users" />
        <LoadButton v-bind:onUserLoad="onUserLoad" />
    </div>
</template>

<script>
import UserList from './components/UserList.vue';
import LoadButton from './components/LoadButton.vue';

export default {
    name: 'app',
    components: {
        UserList,
        LoadButton,
    },
    data: () => ({
        users: [],
    }),
    methods: {
        onUserLoad(user) {
            this.users.push(user);
        },
    },
};
</script>

<style>
</style>
