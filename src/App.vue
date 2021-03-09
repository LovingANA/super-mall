<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar :navBarItems="navBarItems"></nav-bar>
  </div>
</template>

<script>
  import 'normalize.css'
  import NavBar from '@/components/uniform/NavBar.vue'
  
  export default {
    name: 'App',
    components: {
      NavBar
    },
    data() {
      return {
        navBarItems: [
          {
            name: '首页',
            src: [
              // require('@/assets/images/nav-bar/home/active.png'),
              require('@/assets/images/nav-bar/home/inactive.png')
            ],
            href: '/home'
          },
          {
            name: '分类',
            src: [
              // require('@/assets/images/nav-bar/category/active.png'),
              require('@/assets/images/nav-bar/category/inactive.png')
            ],
            href: '/category'
          },
          {
            name: '购物车',
            src: [
              // require('@/assets/images/nav-bar/cart/active.png'),
              require('@/assets/images/nav-bar/cart/inactive.png')
            ],
            href: '/cart'
          },
          {
            name: '我的',
            src: [
              // require('@/assets/images/nav-bar/profile/active.png'),
              require('@/assets/images/nav-bar/profile/inactive.png')
            ],
            href: '/profile'
          }
        ]
      }
    }
  }
</script>

<style>
  @import './assets/css/basic.css';
  @import './assets/css/app.css';
</style>