<template>
  <div id="app-detail">
    <detail-tab-bar :tabBarItems="tabBarItems" :returnHref="returnHref"></detail-tab-bar>
    <carousel-image :carouselImages="carouselImages" style="height: 300px"></carousel-image>
    <goods-base-info :goodsBaseInfo="goodsBaseInfo"></goods-base-info>
    <div style="height:3px;background-color:lightgray;margin-top:15px;margin-bottom:10px;opacity:.4;"></div>
    <shop-info :shopInfoData="shopInfoData"></shop-info>
    <div style="height:3px;background-color:lightgray;margin-top:8px;margin-bottom:10px;opacity:.4;"></div>
  </div>
</template>

<script>
  import {getDetailData} from '@/network'
  import DetailTabBar from './DetailTabBar.vue'
  import CarouselImage from '@/components/uniform/CarouselImage.vue'
  import GoodsBaseInfo from './GoodsBaseInfo.vue'
  import ShopInfo from './ShopInfo.vue'

  export default {
    name: 'AppDetail',
    components: {
      DetailTabBar,
      CarouselImage,
      GoodsBaseInfo,
      ShopInfo
    },
    data() {
      return {
        tabBarItems: ['商品', '参数', '评论', '推荐'],
        returnHref: '/',
        carouselImages: [],
        goodsBaseInfo: {},
        shopInfoData: {},
        detailImages: []
      }
    },
    computed: {
      iid() {
        return this.$route.query.iid
      }
    },
    created() {
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.carouselImages = res.data.result.itemInfo.topImages.map(element => ({
          src: element
        }));
        this.goodsBaseInfo = {
          title: res.data.result.itemInfo.title,
          currentPrice: res.data.result.itemInfo.lowNowPrice,
          originalPrice: res.data.result.itemInfo.oldPrice,
          discountRate: res.data.result.itemInfo.discountDesc,
          selledAmount: res.data.result.columns[0],
          collectionAmount: res.data.result.columns[1],
          shipTime: res.data.result.shopInfo.services[res.data.result.shopInfo.services.length - 1].name ?? '72小时发货',
          shipInfo: res.data.result.shopInfo.services.map(item => ({
            src: item.icon ?? require('@/assets/images/star.png'),
            description: item.name
          })).slice(0, 4)
        }
        this.shopInfoData = {
          logo: res.data.result.shopInfo.shopLogo,
          name: res.data.result.shopInfo.name,
          totalSelledAmount: res.data.result.shopInfo.cSells,
          goodsAmount: res.data.result.shopInfo.cGoods,
          shopScore: res.data.result.shopInfo.score.map(item => ({
            name: item.name,
            score: item.score,
            isHigh: item.isBetter
          }))
        }
      });
    }
  }
</script>

<style scoped>
  #app-detail {
    padding-top: 40px;
    padding-bottom: 53px;
  }
</style>