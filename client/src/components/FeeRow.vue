<template>
            <tr>
                <th>{{person.fee}}</th>
                <th>{{person.amount}}</th>
                <th><input type="checkbox" v-model="feePaid" v-on:change="$emit('isPaid', feePaid,id)"></th>
                <th v-show="edit">
                    <img class="delete-icon" v-on:click="deleteFee(person)" src="@/assets/delete.png">
                </th>
            </tr>

</template>

<script>
    export default {
        name: "FeeRow",
        props: {
            person: Object,
            edit: Boolean
        },
        data() {
            return {
                feePaid: this.person.paid,
                id: this.person.id

            }
        },
        methods: {
            deleteFee(person) {
                if (confirm(`Delete ${person.fee}?`)) {
                    this.$emit('delete-fee', person.id)
                }
            }
        }
    }
</script>

<style scoped>

</style>