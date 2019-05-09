<template>
    <div class="header">
        <div class="jumbotron">
            <h1 class="display-4" id="title">Bill Management</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .jumbotron {
        background-image: url('../assets/money2.jpg');
        background-position: center;
        background-size: cover
    }
    #title {
        font-weight: 1000;
        color: darkblue;
    }
</style>