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
          <span :class="{active: $route.path === navBarItem.href}">{{navBarItem.name}}</span>
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

  .item-image + div > span{
    font-size: 15px;
    color: black;
  }

  .item-image + div > span.active {
    color: var(--themeColor);
  }
</style>