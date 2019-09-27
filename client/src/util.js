import axios from 'axios'

//===================
//=== Bills =========
//===================

export function getBills() {
    return axios.get('/bills');
  }

export function getBillsByMonthAndYear(req) {
  return axios.get(`/bills/${req.year}/${req.monthNum}`)
}

export function addBill(newBill) {
  return axios.post('/bills', newBill)
}

export function updateBill(bill){
  return axios.put(`/bills/${bill._id}`, bill)
}

//==================
//== Months ========
//==================

export function getMonth() {
    return axios.get('/months/:id');
}
