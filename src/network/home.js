import axios from 'axios'

const homeDataURL = 'http://152.136.185.210:7878/api/m5/home/multidata';
const homeGoodsListDataURL = 'http://152.136.185.210:7878/api/m5/home/data'

function getHomeData() {
  return axios.get(homeDataURL)
}

function getHomeGoodsListData(type, page) {
  return axios.get(homeGoodsListDataURL, {
    params: {
      type,
      page
    }
  })
}

export {
  getHomeData,
  getHomeGoodsListData
}