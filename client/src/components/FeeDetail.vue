<template>
    <div class="fee-detail p-2">
        <h1>{{roommate.name}}'s Bills</h1>

        <div class="edit-table-toggle form-check">
            <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
            <label for="edit-table" class="form-check-label">Edit table?</label>
        </div>
        <!--this will use the for loop to select only the one with correponding name-->
        <div>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Fee</th>
                        <th>Amount($)</th>
                        <th>Paid?</th>
                        <th v-show="editTable">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <FeeRow v-for="person in feeList" v-bind:key="person.id"
                            v-bind:person = "person"
                            v-bind:edit = "editTable"
                            v-on:isPaid = "updatedPaid"
                            v-on:delete-fee="feeDeleted"
                        >
                    </FeeRow >
                    <tr>
                        <th>Total</th>
                        <th>{{totalFees}}</th>
                        <th></th>
                        <th v-show="editTable"></th>
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
                personPaid: '',
                editTable: false
            }
        },
        computed: {
            totalFees(){
                let total = 0
                let name=this.roommate.name
                this.roommates.forEach(function(i) {
                    if(i.name === name && !i.paid ) {
                        total += Number(i.amount)
                    }

                })
                return total
            },
            feeList(){
                let feelist =[]
                let name=this.roommate.name
                this.roommates.forEach(function(i) {
                    if(i.name === name) {
                        feelist.push(i)
                    }

                })
                return feelist
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
            },
            feeDeleted(id) {
                this.$feeService.deleteFee(id).then( () => {
                    this.getAll()
                })
            }
        }
    }
</script>

<style scoped>

</style>