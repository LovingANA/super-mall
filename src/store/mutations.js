export default {
  addGoodsToCart(state, goods) {
    if (state.cartGoods.length === 0) {
      state.cartGoods.push(goods)
    } else {
      if (state.cartGoods.some(item => item.description === goods.description)) {
        state.cartGoods.forEach((item, index) => {
          if (item.description === goods.description) {
            state.cartGoods[index].amount++
          }
        })
      } else {
        state.cartGoods.push(goods)
      }
    }
  }
}