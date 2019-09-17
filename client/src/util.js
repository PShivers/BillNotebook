import axios from 'axios'

export function getBills() {
    return axios.get('/bills');
  }

export function getMonth() {
    return axios.get('/months/:id');
}