<template>
<div class="comment">
  <div class="comment-items">
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item :comment-text="text"></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
  </div>
</div>
</template>

<script>
import CommentItem from "@/views/product/commentItem";
export default {
  name: "comment",
  components: {CommentItem},
  data() {
    return {
      text: "的库哈斯官方巴萨的几个房间暗杀部队嘎斯空间的法术抵抗结果很快就会科技活动看价格哈库建设的规划aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
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