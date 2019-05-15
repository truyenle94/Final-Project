<template>
    <div>
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </div>

        <div class="card add-student m-2 p-2">
            <form>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input id="name" class="form-control" v-model.trim="newName">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="fee" class="col-sm-2 col-form-label">Fee</label>
                    <div class="col-sm-10">
                        <input id="fee" class="form-control" v-model.trim="newFee">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="amount" class="col-sm-2 col-form-label">Amount</label>
                    <div class="col-sm-10">
                        <input id="amount" class="form-control" type="number" v-model.trim="newAmount">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button class="btn btn-primary" v-on:click.prevent="addFee">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddingFee",
        data() {
            return {
                newName: '',
                newFee: '',
                newAmount:0,
                errors: []
            }
        },
        methods: {
            addFee() {
                this.errors = []
                if (this.newName && this.newFee && this.newAmount) {
                    let fee = { name: this.newName, fee: this.newFee, amount: this.newAmount, present: false }
                    this.$emit('fee-added', fee)
                    this.newName = ''
                    this.newFee = ''
                    this.newAmount = 0
                } else {
                    this.errors.push('Name, Fee, and Amount are required.')
                }
            }
        }
    }
</script>
<!--file-->
<style scoped>

</style>