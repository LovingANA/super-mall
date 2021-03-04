<template>
  <div id="app-home">
    <top-title :title="title"></top-title>
    <carousel-image :carouselImages="carouselImages"></carousel-image>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
  import {getHomeData} from '@/network'
  import TopTitle from '@/components/uniform/TopTitle.vue'
  import CarouselImage from '@/components/uniform/CarouselImage.vue'
  import HomeRecommend from './HomeRecommend.vue'

  export default {
    name: 'AppHome',
    components: {
      TopTitle,
      CarouselImage,
      HomeRecommend
    },
    data() {
      return {
        title: '购物车',
        carouselImages: [],
        recommends: []
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
      })
    }
  }
</script>

<style scoped>
  #app-home {
    padding-top: 40px;
  }
</style>