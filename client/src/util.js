import axios from 'axios'

export function getBills() {
    return axios.get('/bills');
  }

export function getBillsByMonthAndYear() {
  let month = 8;
  let year = 2019;
  return axios.get(`/bills?month=${month}&year=${year}`)
}

export function getMonth() {
    return axios.get('/months/:id');
}