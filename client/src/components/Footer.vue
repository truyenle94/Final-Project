<template>
    <div class="footer">
        <div class="m-2">
            <span class="p-3">
                <router-link to="/">Home</router-link>
            </span>

            <span class="p-3">
                <router-link to="/about">About this site</router-link>
            </span>
        </div>

        <p class="text-right p-2">Header image by
            <a href="https://unsplash.com/photos/-8a5eJ1-mmQ">Photo by Sharon McCutcheon on Unsplash</a>
        </p>

    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>

</style>