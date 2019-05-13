<template>
    <div id = "roomate-list">
        <div class="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="roommate in roommate_list" v-bind:key="roommate">
                <Roommate v-bind:roommate="roommate">
                </Roommate>
            </div>
        </div>
    </div>
</template>

<script>
    import Roommate from "@/components/Roommate";
    export default {
        name: 'RoommateList',
        components: {
            Roommate
        },
        data() {
            return {
                roommates: [],
            }
        },
        mounted() {
            this.getAll()
        },
        methods: {
            getAll() {
                this.$feeService.getAll().then(data => {
                    this.roommates = data
                })
            }
        },
        /*This to remove duplicate elements and turn ann object to array*/
        computed: {
            roommate_list: function() {
                return [...new Set(this.roommates.map(i => i.name))]
            }
        }
    }
</script>

<style scoped>

</style>