<template>
    <div id = "roomate-list">
        <h1>Roommate List</h1>
        <div class="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="roommate in roommate_list" v-bind:key="roommate">
                <Roommate v-bind:roommate="roommate">
                </Roommate>
            </div>
        </div>
        <h1>Adding Fee</h1>
        <AddingFee v-on:fee-added="newFeeAdded"></AddingFee>
    </div>
</template>

<script>
    import Roommate from "@/components/Roommate";
    import AddingFee from "./AddingFee";
    export default {
        name: 'RoommateList',
        components: {
            AddingFee,
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
            },
            newFeeAdded(fee) {
                this.$feeService.addFee(fee).then(data => {
                    this.getAll()
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