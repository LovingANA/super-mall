<template>
  <div id="detail-tab-bar">
    <ul>
      <li v-for="tabBarItem in tabBarItems" :key="tabBarItem.name" @click="changeCurrentPart(tabBarItem)">
        <span :class="{pink: tabBarItem === currentPart}">{{tabBarItem}}</span>
      </li>
    </ul>
    <router-link :to="returnHref">
      <img src="@/assets/images/back.png" alt="返回">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      tabBarItems: {
        type: Array
      },
      returnHref: {
        type: String
      },
      currentPart: {
        type: String
      } 
    },
    methods: {
      changeCurrentPart(currentPart) {
        this.$emit('clickTabBar', currentPart);
      }
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    width: 53vw;
    margin: 0 auto;
  }

  img {
    width: 30px;
  }

  a {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0;
  }

  span {
    font-size: 14px;
    line-height: 40px;
  }

  #detail-tab-bar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: white;
  }

  .pink {
    color: var(--themeColor);
  }
</style>