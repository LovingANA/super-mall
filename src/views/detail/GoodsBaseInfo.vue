<template>
  <div class="goods-base-info">
    <div class="title">
      <h2>{{goodsBaseInfo.title}}</h2>
    </div>
    <ul class="price">
      <li>
        <span>{{'¥' + goodsBaseInfo.currentPrice}}</span>
      </li>
      <li>
        <span style="color: gray;position: relative;">{{goodsBaseInfo.originalPrice}}
          <div class="delete-line"></div>
        </span>
      </li>
      <li>
        <span>{{goodsBaseInfo.discountRate}}</span>
      </li>
    </ul>
    <ul>
      <li>
        <span>{{goodsBaseInfo.selledAmount}}</span>
      </li>
      <li>
        <span>{{goodsBaseInfo.collectionAmount}}</span>
      </li>
      <li>
        <span>{{goodsBaseInfo.shipTime}}</span>
      </li>
    </ul>
    <div style="height:2px;background-color:lightgray;margin-top:10px;margin-bottom:18px;opacity:.4;"></div>
    <ul class="ship-info">
      <li v-for="item in goodsBaseInfo.shipInfo" :key="item.description">
        <img :src="item.src" :alt="item.description">
        <span>{{item.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'GoodsBaseInfo',
    props: {
      goodsBaseInfo: {
        type: Object,
        default() {
          return {
            title: '',
            currentPrice: 0,
            originalPrice: 0,
            discountRate: '',
            selledAmount: '',
            collectionAmount: '',
            shipTime: '',
            shipInfo: [{
              src: '',
              description: ''
            }]
          }
        }
      }
    },
    computed: {
      discountRate() {
        return Math.round(this.currentPrice / this.originalPrice * 10);
      }
    }
  }
</script>

<style scoped>
  .price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }

  .price + ul {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: gray;
  }

  .ship-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .ship-info > li > * {
    vertical-align: middle;
  }

  img {
    width: 14px;
  }

  .goods-base-info {
    padding: 10px;
  }

  .title {
    margin-bottom: 10px;
  }

  .price > *:first-child {
    margin-right: 5px;
    font-size: 20px;
    color: var(--themeColor);
  }

  .price > *:nth-child(2) {
    margin-right: 5px;
  }

  .price > *:nth-child(3){
    padding: 0 5px;
    border-radius: 99em;
    background-color: var(--themeColor);
    font-size: 14px;
    color: white;
    line-height: 20px;
    text-align: center;
  }

  .delete-line {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1.5px;
    background-color: gray;
    transform: translateY(-50%);
  }
</style>