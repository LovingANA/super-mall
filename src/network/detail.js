import axios from 'axios'

const detailURL = 'http://152.136.185.210:7878/api/m5/detail'
const detailRecommendURL = 'http://152.136.185.210:7878/api/m5/recommend'

function getDetailData(iid) {
  return axios.get(detailURL, {
    params: {
      iid
    }
  })
}

function getDetailRecommendData() {
  return axios.get(detailRecommendURL)
}

export {
  getDetailData,
  getDetailRecommendData
}