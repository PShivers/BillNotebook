import axios from 'axios'

// export function getBills() {
//     return axios.get('/bills');
//   }

export function getBillsByMonthAndYear() {
  // console.log(req)
  // return axios.get(`/billsbymonth?month=${req.month}&year=${req.year}`)
  return axios.get(`/bills/2019/8`)
}

export function getMonth() {
    return axios.get('/months/:id');
}