import axios from 'axios'

export function getBills() {
    return axios.get('/bills');
  }