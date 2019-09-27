import axios from 'axios'

// export function getBills() {
//     return axios.get('/bills');
//   }

export function getBillsByMonthAndYear(req) {
  // console.log(req)
  return axios.get(`/bills/${req.year}/${req.monthNum}`)
}

export function addBill(newBill) {
  return axios.post('/bills', newBill)
}

export function getMonth() {
    return axios.get('/months/:id');
}
