<template>
  <div class="comment-item">
    <img :src="url" alt="">
    <div class="comment-info">
      <div class="user-name">{{ comment.username }}</div>
      <div class="comment-text">{{comment.context}}</div>
      <div class="comment-date">{{ comment.createTime }}</div>
      <div class="reply-btn" v-if="comment.username !== $store.state.username" @click="reply">reply</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentItem",
  props:['comment', 'url'],
  methods: {
    reply() {
      this.$emit('reply');
    }
  }
}
</script>

<style scoped lang="scss">
.comment-item {
  text-align: left;
  box-sizing: border-box;
  width: 90%;
  min-height: 25%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-top: 0.75em;
  margin-left: 3%;
  border-left: 3px solid #11564b;
  border-right: 3px solid #11564b;
  padding: 10px 40px;

  img {
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
  }

  .comment-info {
    margin-left: 1em;
    position: relative;

    .user-name {
      color: #11564b;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .comment-text {
      word-break: break-all;
    }

    .comment-date {
      margin-top: 0.5em;
      color: #11564b;
    }

    .reply-btn {
      border-radius: 10px;
      border: 3px solid #11564b;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 80px;
      height: 80px;
      background-color: #D6D5B7;
      color: #11564b;
      font-weight: bold;
      font-size: 24px;
      right: -560px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color .5s, color .5s;

      &:hover {
        background-color: #11564b;
        color: #D6D5B7;
      }

    }

  }

  &:hover {
    box-shadow: 0 0 20px 2px #11564b;
  }


}
</style>
