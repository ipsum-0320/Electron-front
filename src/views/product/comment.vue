<template>
<div class="comment">
  <div class="empty-cart" :class="{ 'show': comments.length === 0 }">
    <img src="@/assets/image/svg/index/noCategory.svg" alt="">
    <div class="tips">no comments for this product.</div>
  </div>
  <div class="comment-items">
    <comment-item v-for="comment in comments" :comment="comment"></comment-item>
  </div>
</div>
</template>

<script>
import CommentItem from "@/views/product/commentItem";
import {getCommentListByProductId} from "@/api/comment";
export default {
  name: "comment",
  components: {CommentItem},
  props: ['productId'],
  data() {
    return {
      comments:[]
    }
  },
  created() {
    console.log(this.productId)
    getCommentListByProductId(this.productId, 1, 20).then((res) => {
      this.comments = res.object
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="scss">
.comment {
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  background-color: #D6D5B7;
  border-radius: 10px;
  border: 5px solid #11564b;

  .empty-cart {
    display: none;
    width: 30%;
    height: 40%;
    border: 5px dashed #11564b;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.show {
      display: flex;
    }

    .tips {
      color: #11564b;
      position: relative;
      top: 5%;
      font-size: 20px;
      font-weight: bold;
    }

    img {
      position: relative;
      top: -5%;
      width: 60%;
      height: 60%;
    }
  }

  .comment-items {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    overflow-x: auto;
    padding-right: 0;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #11564b;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #808080;
      border-radius: 5px;
    }
  }



}
</style>