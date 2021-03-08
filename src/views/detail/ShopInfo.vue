<template>
  <div class="shop-info">
    <div class="shop-base">
      <img :src="shopInfoData.logo" :alt="shopInfoData.name">
      <span>{{shopInfoData.name}}</span>
    </div>
    <ul class="shop-main">
      <li>
        <div style="margin-bottom:3px">
          <span>{{shopInfoData.totalSelledAmount}}</span>
        </div>
        <div>
          <span>总销量</span>
        </div>
      </li>
      <li>
        <div style="margin-bottom:3px">
          <span>{{shopInfoData.goodsAmount}}</span>
        </div>
        <div>
          <span>全部宝贝</span>
        </div>
      </li>
      <li style="width:2px;height:40px;background-color:lightgray;opacity:.5"></li>
      <li>
        <ul class="shop-evaluation">
          <li v-for="item in shopInfoData.shopScore" :key="item.name">
            <ul>
              <li style="margin-right:8px">
                <span>{{item.name}}</span>
              </li>
              <li style="margin-right:8px">
                <span>{{item.score}}</span>
              </li>
              <li>
                <span v-if="item.isHigh" style="background-color:var(--themeColor)">高</span>
                <span v-else style="background-color:lightgreen">低</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div>
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopInfo',
    props: {
      shopInfoData: {
        type: Object,
        default() {
          return{
            logo: '',
            name: '',
            totalSelledAmount: 0,
            goodsAmount: 0,
            shopScore: [
              {
                name: '',
                score: 0,
                isHigh: true
              }
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 10px;
  }

  .shop-base img {
    width: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .shop-base > * {
    vertical-align: middle;
  }

  .shop-base {
    font-size: 15px;
    margin-bottom: 10px;
  }

  .shop-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    padding-right: 30px;
  }

  .shop-main > li > ul  ul {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .shop-main > *:first-child > div {
    text-align: center;
  }

   .shop-main > *:nth-child(2) > div {
    text-align: center;
  }

  .shop-evaluation > *:nth-child(1) {
    margin-bottom: 5px;
  }

  .shop-evaluation > *:nth-child(2) {
    margin-bottom: 5px;
  }

  .shop-info > *:last-child {
    margin-top: 20px;
    text-align: center;
  }

  .shop-info > *:last-child > span {
    width: 150px;
    border-radius: 10px;
    line-height: 30px;
    background-color: #F1F5FB;  
  }
</style>