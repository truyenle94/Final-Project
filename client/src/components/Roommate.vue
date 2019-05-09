<template>
    <div class="roommate-summary p-2 rounded">
        <router-link v-bind:to="{ name: 'detail', params: { roommate: roommate.name}}">
            <button id="roommate" class="m-2">{{roommate.name}}</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Roommate',
        props: {
            roommate: Object
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .roommate-summary {
        height: 4em;
        width: 6em;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }
</style>