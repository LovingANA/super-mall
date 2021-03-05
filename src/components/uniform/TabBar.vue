<template>
  <ul class="tab-bar">
    <li v-for="tabBarItem in tabBarItems" :key="tabBarItem.href" @click="postType(tabBarItem.name)">
      <router-link :to="tabBarItem.href">
        <div class="name">
          <span>{{tabBarItem.name}}</span>
        </div>
        <div :class="{'pink-bar': $route.path === tabBarItem.href}"></div>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: '',
    props: {
      tabBarItems: {
        type: Array
      }
    },
    data() {
      return {

      }
    },
    methods: {
      postType(type) {
        this.$emit('clickTabBar', type);
      }
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 40px;
    padding: 0 30px;
    background-color: #fff;
  }

  a > *:last-child {
    width: 45px;
    height: 3px;
  }

  .pink-bar {
    background-color: var(--themeColor);
  }

  .name {
    text-align: center;
    margin-bottom: 2px;
  }

  a {
    padding: 8px 0;
  }
</style>