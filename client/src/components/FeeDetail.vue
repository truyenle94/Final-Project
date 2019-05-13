<template>
    <div class="fee-detail p-2">
        <h2>{{roommate.name}}'s Bills</h2>
        <!--this will use the for loop to select only the one with correponding name-->
        <div>
            <table class="table">
                <tr>
                    <th>Fee</th>
                    <th>Amount($)</th>
                    <th>Paid?</th>
                </tr>
                <tr v-for="person in roommates" v-bind:key="person"
                v-if="roommate.name === person.name" >
                    <th>{{person.fee}}</th>
                    <th>{{person.amount}}</th>
                    <th></th>
                </tr>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'FeeDetail',
        data() {
            return {
                roommate: {
                    name: ''
                },
                roommates: []
            }
        },
        mounted() {
            this.roommate.name = this.$route.params.roommate
            this.getAll()
        },
        methods: {
            getAll() {
                this.$feeService.getAll().then(data => {
                    this.roommates = data
                })
            }
        },
    }
</script>

<style scoped>

</style>