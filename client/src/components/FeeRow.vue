<template>
            <tr>
                <th>{{person.fee}}</th>
                <th>{{person.amount}}</th>
                <th><input type="checkbox" v-model="feePaid" v-on:change="$emit('isPaid', feePaid,id)"></th>
            </tr>

</template>

<script>
    export default {
        name: "FeeRow",
        props: {
            person: Object
        },
        data() {
            return {
                feePaid: this.person.paid,
                id: this.person.id

            }
        }
    }
</script>

<style scoped>

</style>