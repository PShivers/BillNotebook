import axios from 'axios'

export function getBills() {
    return axios.get('/bills');
  }

export function getMonths() {
    return axios.get('/months');
}