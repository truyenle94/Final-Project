import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/fees/').then( response => {
            return response.data
        })
    },

    /*update the table if the fee is paid*/
    setPaid(paid, id){
        return axios.patch('/api/fee/'+ id, {paid: paid}).then(response => {
            return response.data
        })
    },

    /*add a new fee to the database*/
    addFee(fee) {
        return axios.post('api/fees/',fee).then(response => {
            return response.data
        })

    },

    deleteFee(id) {
        return axios.delete('api/fees/'+id).then(response => {
            return response.data
        })
    }
}