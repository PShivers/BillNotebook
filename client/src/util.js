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

export function deleteBill(bill){
  return axios.delete(`/bills/${bill._id}`)
}


//==================
//== Months ========
//==================

export function getMonth() {
    return axios.get('/months/:id');
}

//==================
//== Copayers ======
//==================

export function getCopayers(){
  return axios.get(`/copayers`)
}

export function createCopayer(copayer){
  return axios.post(`/copayers`, copayer)
}

export function updateCopayer(copayer){
  return axios.put(`/copayers/${copayer._id}`, copayer)
}