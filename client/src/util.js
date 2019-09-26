import axios from 'axios'

// export function getBills() {
//     return axios.get('/bills');
//   }

export function getBillsByMonthAndYear(req) {
  // console.log(req)
  return axios.get(`/bills/${req.year}/${req.monthNum}`)
}

export function addBill() {
  return axios.post('/bills')
}

export function getMonth() {
    return axios.get('/months/:id');
}
