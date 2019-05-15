<template>
    <div class="roommate-summary p-2 rounded">
        <router-link v-bind:to="{ name: 'detail', params: { roommate: roommate}}">
            <button id="roommate" class="btn btn-outline-danger">{{roommate}}</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Roommate',
        props: {
            roommate: String
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
</style>