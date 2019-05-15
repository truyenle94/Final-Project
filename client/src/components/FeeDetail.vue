<template>
    <div class="fee-detail p-2">
        <h1>{{roommate.name}}'s Bills</h1>
        <!--this will use the for loop to select only the one with correponding name-->
        <div>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Fee</th>
                        <th>Amount($)</th>
                        <th>Paid?</th>
                    </tr>
                </thead>
                <tbody>
                    <FeeRow v-for="person in roommates" v-bind:key="person.id"
                            v-if="roommate.name === person.name"
                            v-bind:person = "person"
                            v-on:isPaid = "updatedPaid"
                        >
                    </FeeRow >
                    <tr>
                        <th>Total</th>
                        <th>{{totalFees}}</th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    import FeeRow from "@/components/FeeRow";

    export default {
        name: 'FeeDetail',
        components: { FeeRow},
        data() {
            return {
                roommate: {
                    name: ''
                },
                roommates: [],
                personPaid: ''
            }
        },
        computed: {
            totalFees(){
                let total = 0
                let name=this.roommate.name
                this.roommates.forEach(function(i) {
                    if(i.name === name && !i.paid )
                        total += i.amount

                })
                return total
            }
        },
        mounted() {
            this.roommate.name = this.$route.params.roommate
            this.getAll()
        },
        methods: {
            updatedPaid(feePaid, id){
                this.$feeService.setPaid( feePaid, id).then(data => {
                    this.getAll()
                })
            },
            getAll() {
                this.$feeService.getAll().then(data => {
                    this.roommates = data
                })
            }
        }
    }
</script>

<style scoped>

</style>