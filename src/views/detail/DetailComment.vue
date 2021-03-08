<template>
  <div id="detail-comment">
    <div class="base" style="color:black">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div style="height:3px;background-color:lightgray;margin-top:8px;margin-bottom:18px;opacity:.4;"></div>
    <div class="user">
      <img :src="detailCommentData.userAvatar" :alt="detailCommentData.userName">
      <span style="color:black">{{detailCommentData.userName}}</span>
    </div>
    <div style="margin-bottom:10px">
      <p>{{detailCommentData.userComment}}</p>
    </div>
    <div style="margin-bottom:10px">
      <span style="margin-right:10px">{{commentDate}}</span>
      <span>{{detailCommentData.style}}</span>
    </div>
    <div v-if="detailCommentData.images" class="comment-image">
      <ul>
        <li v-for="item in detailCommentData.images" :key="item" style="margin-right:5px">
          <img :src="item">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      detailCommentData: {
        type: Object,
        default() {
          return {
            commentAmount: 0,
            userAvatar: '',
            userName: '',
            userComment: '',
            commentTime: '',
            style: '',
            images: ['']
          }
        }
      }
    },
    computed: {
      commentDate() {
        const date = new Date(this.detailCommentData.commentTime * 1000)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        return `${year}-${month}-${day}`
      }
    }
  }
</script>

<style scoped>
  #detail-comment {
    padding: 0 10px;
    color: rgb(95, 89, 89);
  }

  .base > *:first-child {
    float: left;
  }

  .base > *:last-child {
    float: right;
  }

  .base::after {
    content: '';
    display: block;
    clear: both;
  }

  .user img {
    width:40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user > * {
    vertical-align: middle;
  }

  .comment-image > ul {
    display: flex;
  }

  .comment-image img {
    width: 100px;
  }

   .comment-image > ul > li {
    font-size: 0;
  }
</style>