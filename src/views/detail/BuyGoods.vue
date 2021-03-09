<template>
  <div id="buy-goods">
    <div>
    <ul class="shop">
      <li>
        <div>
          <img src="@/assets/images/buy-goods/service.png" alt="客服">
        </div>
        <div>
          <span>客服</span>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/buy-goods/shop.png" alt="店铺">
        </div>
        <div>
          <span>店铺</span>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/star.png" alt="收藏">
        </div>
        <div>
          <span>收藏</span>
        </div>
      </li>
    </ul>
    </div>
    <div class="buy">
      <div @click="processAddCart">
        <span>加入购物车</span>
      </div>
      <div>
        <span style="color:white">购买</span>
      </div>
    </div>
    <div v-if="isShowMessage" class='message' style="width:120px;font-size: 14px;">
      <span>加入购物车成功!</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        isShowMessage: false
      }
    },
    methods: {
      processAddCart() {
        this.$emit('addCart')
        this.isShowMessage = true
        setTimeout(() => {
          this.isShowMessage = false
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  #buy-goods {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    font-size: 0;
    background-color: white;
  }

  #buy-goods > * {
    display: inline-block;
    font-size: 1rem;
    width: 50%;
    vertical-align: bottom;
  }

  .shop {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    width: 100% ;
    height: 53px;
    padding: 5px 0;
  }

  .shop > li > div {
    text-align: center;
  }

  img {
    width: 20px;
  }

  .buy {
    font-size: 0;
    line-height: 53px;
  }

  .buy > * {
    display: inline-block;
    font-size: 1rem;
    width: 50%;
    text-align: center;
  }

  .buy > *:first-child {
    background-color: #F7DA47;
  }

  .buy > *:nth-child(2) {
    background-color: #FF789A;
  }

  .message {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    border-radius: 999em;
    line-height: 30px;
    text-align: center;
    background-color: var(--themeColor);
    opacity: .8;
  }
</style>