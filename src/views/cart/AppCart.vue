<template>
  <div id="app-cart">
    <top-title :title="title">
      <span>({{goodsAmount}})</span>
    </top-title>
    <ul>
      <li v-for="(item, index) in $store.state.cartGoods" :key="item.image" style="margin-bottom:10px" >
        <ul>
          <li @click="toggleSelect(index)">
            <div class="pink-ball" v-if="selectedGoods.indexOf(index) !== -1">
              <img src="@/assets/images/selected.png">
            </div>
            <div v-else class="gray-ball"></div>
          </li>
          <li>
            <img :src="item.image">
          </li>
          <li class="goods">
            <div>
              <span>{{item.description}}</span>
            </div>
            <div class="money" style="font-size:18px">
              <span style="color:orange">{{'￥' + item.price}}</span>
              <span>{{'x' + item.amount}}</span>
            </div>
          </li>
        </ul>
        <div style="height:2px;background-color:lightgray;margin-top:2px"></div>
      </li>
    </ul>
    <ul class="summary">
      <li @click="processAll">
        <div class="pink-ball" v-if="isAllSelected">
          <img src="@/assets/images/selected.png">
        </div>
        <div v-else class="gray-ball"></div>
      </li>
      <li style="margin-right:40px" @click="processAll">
        <span>全选</span>
      <li>
        <span>{{'合计' + '￥' + totalPrice}}</span>
      </li>
      <li>
        <span>{{'去计算' + '(' + goodsAmount + ')'}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import TopTitle from '@/components/uniform/TopTitle.vue'

  export default {
    name: 'AppCart',
    components: {
      TopTitle
    },
    data() {
      return {
        title: '购物车',
        selectedGoods: [],
      }
    },
    computed: {
      goodsAmount() {
        if (this.selectedGoods.length) {
          return this.$store.state.cartGoods.map((item, index) => {
            if (this.selectedGoods.indexOf(index) !== -1) {
              return item.amount
            } else {
              return 0
            }
          }).reduce((prev, cur) => prev + cur)
        } else {
          return 0
        }
      },
      totalPrice() {
        if (this.selectedGoods.length) {
          return this.$store.state.cartGoods.filter((item, index) => {
            return this.selectedGoods.indexOf(index) !== -1
          }).map(item => item.amount * item.price).reduce((prev, cur) => prev + cur)
        } else {
          return 0
        }
      },
      isAllSelected() {
        if (this.selectedGoods.length) {
          return this.$store.state.cartGoods.every((item, index) => {
            return this.selectedGoods.indexOf(index) !== -1
          })
        } else {
          return false
        }
      }
    },
    methods: {
      toggleSelect(index) {
        if (this.selectedGoods.indexOf(index) !== -1) {
          this.selectedGoods.splice(this.selectedGoods.indexOf(index), 1)
        } else {
          this.selectedGoods.push(index)
        }
      },
      processAll() {
        if (this.isAllSelected) {
          this.selectedGoods = []
        } else {
          this.selectedGoods = this.$store.state.cartGoods.map((item,index) => index);
        }
        
      }
    },
    created() {
      this.selectedGoods = this.$store.state.cartGoods.map((item,index) => index)
    }
  }
</script>

<style scoped>
  #app-cart {
    padding-top: 45px;
    padding-bottom: 92px;
  }

  ul ul {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  img {
    width: 80px;
    border-radius: 4px;
  }

  .pink-ball {
    border-radius: 50%;
    background-color: var(--themeColor);
    font-size: 0;
  }

  .pink-ball img {
    width: 20px;
    height: 20px;
  }

  .gray-ball {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 2px solid rgb(148, 146, 146);
    border-radius: 50%;
  }

  .goods {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }

  .goods > *:first-child {
    margin-bottom: auto;
  }

  .goods > *:first-child span{
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .money > *:first-child {
    float: left;
  }

  .money > *:last-child {
    float: right;
  }

  ul ul > *:first-child {
    display: flex;
    align-items: center;
  }

  .summary {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 53px;
    box-sizing: border-box;
    width: 100%;
    background-color: #EEEEEE;
    padding-left: 10px;
  }

  .summary > *:nth-child(3) {
    margin-right: auto;
  }

  .summary > *:nth-child(4) {
    padding: 0 10px;
    background-color: rgb(199, 83, 68);
    line-height: 40px;
  }
</style>