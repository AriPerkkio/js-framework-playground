<template>
    <ul class="user-list">
        <li v-for="(user) in users" v-bind:key="user.name">{{ user.name }} : {{ user.email }}</li>
    </ul>
</template>

<script>
export default {
    name: 'UserList',
    props: {
        users: Array,
    },
};
</script>

<style>
.user-list li {
    margin-top: 0.5rem;
}
</style>