import axios from 'axios'

const detailURL = 'http://152.136.185.210:7878/api/m5/detail'

function getDetailData(iid) {
  return axios.get(detailURL, {
    params: {
      iid
    }
  })
}

export {
  getDetailData
}