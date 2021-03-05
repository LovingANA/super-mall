<template>
  <div id="app-home">
    <top-title :title="title"></top-title>
    <carousel-image :carouselImages="carouselImages"></carousel-image>
    <home-recommend :recommends="recommends"></home-recommend>
    <div class="margin-bar"></div>
    <div id="home-tab-bar"></div>
    <tab-bar :tabBarItems="tabBarItems" @clickTabBar="setGoodsListData"></tab-bar>
    <router-view :goodsListItems="goodsListItems"></router-view>
    <back-to-top :image="image" v-if="isShowBackToTop"></back-to-top>
  </div>
</template>

<script>
  import TopTitle from '@/components/uniform/TopTitle.vue'
  import CarouselImage from '@/components/uniform/CarouselImage.vue'
  import HomeRecommend from './HomeRecommend.vue'
  import TabBar from '@/components/uniform/TabBar.vue'
  import BackToTop from '@/components/uniform/BackToTop.vue'
  import {getHomeData, getHomeGoodsListData} from '@/network'

  export default {
    name: 'AppHome',
    components: {
      TopTitle,
      CarouselImage,
      HomeRecommend,
      TabBar,
      BackToTop
    },
    data() {
      return {
        title: '购物车',
        carouselImages: [],
        recommends: [],
        tabBarItems: [
          {
            name: '流行',
            href: '/home/popular'
          },
          {
            name: '新款',
            href: '/home/new'
          },
          {
            name: '精选',
            href: '/home/selection'
          }
        ],
        currentGoodsListType: 'pop',
        goodsListItems: [],
        requestedPage: 1,
        image: {
          src: require('@/assets/images/back-to-top.png'),
          name: '回到顶部'
        },
        isShowBackToTop: false
      }
    },
    methods: {
      setGoodsListData(type) {
        switch (type) {
          case '流行': 
            type = 'pop';
            break;
          case '新款': 
            type = 'new';
            break;
          case '精选': 
            type = 'sell';
            break;
        }
        this.currentGoodsListType = type;
        getHomeGoodsListData(type, this.requestedPage).then(res => {
          this.goodsListItems = res.data.data.list.map(element => ({
            src: element.show.img,
            name: element.title,
            price: element.price,
            starNumber: element.cfav,
            href: element.link
          }))
        })
      },
      loadNextPageData() {
        getHomeGoodsListData(this.currentGoodsListType, ++this.requestedPage).then(res => {
          this.goodsListItems.push(...(res.data.data.list.map(element => ({
            src: element.show.img,
            name: element.title,
            price: element.price,
            starNumber: element.cfav,
            href: element.link
          }))))
        });
      } 
    },
    created() {
      getHomeData().then(res => {
        this.carouselImages = res.data.data.banner.list.map(element => ({
          src: element.image,
          name: element.title,
          href: element.link
        }));
        this.recommends = res.data.data.recommend.list.map(element => ({
          src: element.image,
          name: element.title,
          href: element.link
        }))
      });
      getHomeGoodsListData('pop', this.requestedPage).then(res => {
        this.goodsListItems = res.data.data.list.map(element => ({
          src: element.show.img,
          name: element.title,
          price: element.price,
          starNumber: element.cfav,
          href: element.link
        }))
      });
      window.addEventListener('scroll', () => {
        if (window.scrollY >= document.getElementById('home-tab-bar').offsetTop - 40) {
          this.isShowBackToTop = true;
        } else {
          this.isShowBackToTop = false;
        }
        const viewportHeight = window.innerHeight;
        const pageHeight = document.getElementById('app').offsetHeight;
        if (Math.ceil(window.scrollY) === pageHeight - viewportHeight) {
          this.loadNextPageData();
        }
      });
    },
    mounted() {
      
    }
  }
</script>

<style scoped>
  #app-home {
    padding-top: 40px;
  }

  .margin-bar {
    height: 4px;
    background-color: #EEEEEE;
    margin: 5px 0 0;
  }
</style>