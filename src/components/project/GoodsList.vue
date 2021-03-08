<template>
  <div class="goods-list">
    <ul>
      <li v-for="goodsListItem in goodsListItems" :key="goodsListItem.name + Math.random()">
        <router-link :to="{path: '/detail', query: {iid: goodsListItem.iid}}">
          <div class="image">
            <img :src="goodsListItem.src" :alt="goodsListItem.name">
          </div>
          <div class="name"> 
            <span>{{goodsListItem.name}}</span>
          </div>
          <div class="price">
            <span>{{goodsListItem.price}}</span>
            <div>
              <img src="@/assets/images/star.png" alt="星">
              <span>{{goodsListItem.starNumber}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <img src="@/assets/images/loading.gif" alt="加载" v-if="isShowLoading">
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      goodsListItems: {
        type: Array
      },
      isShowLoading: {
        type: Boolean
      }
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    padding-top: 0;
  }

  .image > img {
    width: 175px;
    height: 270px;
    border-radius: 2px;
  }

  .name > span {
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price img {
    width: 18px;
  }

  .price > *:first-child {
    float: left;
  }

  .price > *:last-child {
    float: right;
  }

  .price::after {
    content: '';
    display: block;
    clear: both;
  }

  .price > div > * {
    vertical-align: top;
  }

  .price {
    padding: 0 35px;
  }

  .goods-list {
    text-align: center;
    padding-bottom: 80px;
  }

  .goods-list > img {
    width: 20px;
  }
</style>