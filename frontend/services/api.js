import Axios from 'axios'

const Api = Axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3100',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default Api;
