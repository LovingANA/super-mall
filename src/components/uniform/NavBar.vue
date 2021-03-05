<template>
  <ul class="nav-bar">
    <li v-for="navBarItem in navBarItems" :key="navBarItem.href">
      <router-link :to="navBarItem.href">
        <div class="item-image">
          <img 
            :src="navBarItem.src[0]" 
            :alt="navBarItem.name">
        </div>
        <div>
          <span :class="{active: sliceStr($route.path) === navBarItem.href}">{{navBarItem.name}}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      navBarItems: {
        type: Array
      }
    },
    data() {
      return {

      }
    },
    methods: {
      sliceStr(path) {
        const temp = path.substring(1);
        if (temp.indexOf('/') !== -1) {
          const realIndex = temp.indexOf('/') + 1;
          return path.substring(0, realIndex);
        } else {
          return path
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #F6F6F6;
    padding: 2px 0;
    font-size: 15px;
  }

  .item-image {
    text-align: center;
  }

  img {
    width: 28px;
  }

  .item-image + div {
    text-align: center;
  }

  .active {
    color: var(--themeColor);
  }
</style>