<template>
  <div id="app-detail">
    <detail-tab-bar :tabBarItems="tabBarItems" :returnHref="returnHref" @clickTabBar=processClickCTabBar :currentPart="currentPart"></detail-tab-bar>
    <carousel-image :carouselImages="carouselImages" style="height: 300px"></carousel-image>
    <goods-base-info :goodsBaseInfo="goodsBaseInfo"></goods-base-info>
    <div style="height:3px;background-color:lightgray;margin-top:15px;margin-bottom:10px;opacity:.4;"></div>
    <shop-info :shopInfoData="shopInfoData"></shop-info>
    <div style="height:3px;background-color:lightgray;margin-top:8px;margin-bottom:15px;opacity:.4;"></div>
    <detail-image :detailImages="detailImages" :detailImageDesciption="detailImageDesciption"></detail-image>
    <div style="height:3px;background-color:lightgray;margin-top:8px;margin-bottom:18px;opacity:.4;"></div>
    <goods-param :sizeInfo="sizeInfo" :productInfo="productInfo" style="margin-bottom:30px"></goods-param>
    <detail-comment :detailCommentData="detailCommentData"></detail-comment>
    <div style="height:3px;background-color:lightgray;margin-top:10px;margin-bottom:18px;opacity:.4;"></div>
    <goods-list :goodsListItems="goodsListItems" style="padding-bottom:0" id="detail-goods-list"></goods-list>
    <back-to-top v-if="isShowBackToTop"></back-to-top>
  </div>
</template>

<script>
  import {getDetailData} from '@/network'
  import {getDetailRecommendData} from '@/network'
  import DetailTabBar from './DetailTabBar.vue'
  import CarouselImage from '@/components/uniform/CarouselImage.vue'
  import GoodsBaseInfo from './GoodsBaseInfo.vue'
  import ShopInfo from './ShopInfo.vue'
  import DetailImage from './DetailImage.vue'
  import GoodsParam from './GoodsParam.vue'
  import DetailComment from './DetailComment.vue'
  import GoodsList from '@/components/project/GoodsList.vue'
  import BackToTop from '@/components/uniform/BackToTop.vue'

  export default {
    name: 'AppDetail',
    components: {
      DetailTabBar,
      CarouselImage,
      GoodsBaseInfo,
      ShopInfo,
      DetailImage,
      GoodsParam,
      DetailComment,
      GoodsList,
      BackToTop
    },
    data() {
      return {
        tabBarItems: ['商品', '参数', '评论', '推荐'],
        returnHref: '/',
        carouselImages: [],
        goodsBaseInfo: {},
        shopInfoData: {},
        detailImages: [],
        detailImageDesciption: '',
        sizeInfo: [],
        productInfo: [],
        detailCommentData: {},
        goodsListItems: [],
        currentPart: '商品',
        isShowBackToTop: false,
        goodsParamTop: 0,
        detailCommentTop: 0,
        detailGoodsListTop: 0
      }
    },
    computed: {
      iid() {
        return this.$route.query.iid
      }
    },
    methods: {
      processWindowScroll() {
        this.goodsParamTop = document.getElementById('goods-param').offsetTop
        this.detailCommentTop = document.getElementById('detail-comment').offsetTop
        this.detailGoodsListTop = document.getElementById('detail-goods-list').offsetTop
        if (window.scrollY >= 0 && window.scrollY < this.goodsParamTop) {
          this.currentPart = '商品'
        }
        if (window.scrollY >= this.goodsParamTop && window.scrollY < this.detailCommentTop) {
          this.currentPart = '参数'
        }
        if (window.scrollY >= this.detailCommentTop && window.scrollY < this.detailGoodsListTop) {
          this.currentPart = '评论'
        }
        if (window.scrollY >= this.detailGoodsListTop) {
          this.currentPart = '推荐'
        }
      },
      processClickCTabBar(currentPart) {
        this.currentPart = currentPart
      }
    },
    created() {
      window.scrollTo(0, 0);
      getDetailData(this.iid).then(res => {
        this.carouselImages = res.data.result.itemInfo.topImages.map(element => ({
          src: element
        }))
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
        this.detailImageDesciption = res.data.result.detailInfo.desc;
        this.detailImages = res.data.result.detailInfo.detailImage.map(item => ({
          description: item.key,
          images: item.list
        }))
        this.sizeInfo = res.data.result.itemParams.rule.tables[0].map(item => ({
          sizeType: item[0],
          first: item[1],
          second: item[2],
          third: item[3]
        }))
        this.productInfo = res.data.result.itemParams.info.set.map(item => ({
          type: item.key,
          typeValue: item.value
        }))
        this.detailCommentData = {
          commentAmount: res.data.result.rate.cRate,
          userAvatar: res.data.result.rate.list[0].user.avatar,
          userName: res.data.result.rate.list[0].user.uname,
          userComment: res.data.result.rate.list[0].content,
          commentTime: res.data.result.rate.list[0].created,
          style: res.data.result.rate.list[0].style,
          images: res.data.result.rate.list[0].images ?? ''
        }
      })
      getDetailRecommendData().then(res => {
        this.goodsListItems = res.data.data.list.map(element => ({
          src: element.image,
          name: element.title,
          price: element.price,
          starNumber: element.cfav,
          iid: element.item_id
        }))
      })
      window.addEventListener('scroll', this.processWindowScroll)
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.goodsParamTop = document.getElementById('goods-param').offsetTop
          this.detailCommentTop = document.getElementById('detail-comment').offsetTop
          this.detailGoodsListTop = document.getElementById('detail-goods-list').offsetTop
        }, 3000)
      })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.processWindowScroll)
    },

  }
</script>

<style scoped>
  #app-detail {
    padding-top: 40px;
    padding-bottom: 53px;
  }
</style>