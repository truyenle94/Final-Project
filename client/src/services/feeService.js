import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/fees/').then( response => {
            return response.data
        })
    }
}