<template>
  <div id="home-recommend">
    <ul>
      <li v-for="recommend in recommends" :key="recommend.href">
        <a :href="recommend.href">
          <div>
            <img :src="recommend.src" :alt="recommend.name">
          </div>
          <div class="recommend-name">
            <span>{{recommend.name}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-size: 14px;
  }

  img {
    width: 70px;
  }

  .recommend-name {
    text-align: center;
  }

  a > *:first-child {
    margin-bottom: 2px;
  }
</style>