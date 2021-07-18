<template>
<div class="comment">
  <div class="empty-cart" :class="{ 'show': comments.length === 0 }">
    <img src="@/assets/image/svg/index/noCategory.svg" alt="">
    <div class="tips">no comments for this product.</div>
  </div>
  <div class="comment-items">
    <comment-item v-for="(comment, index) in comments" :comment="comment" :url="avatars[index]" @reply="reply(index)"></comment-item>
  </div>
  <el-dialog v-model="isDialogShow">
    <div class="content-description">
      <div class="content-description-capital">Reply: </div>
      <textarea class="content-description-input" v-model="reply_content"/>
    </div>
    <div class="confirm-btn dialog-btn" @click="confirm">
      <span>Confirm</span>
      <svg viewBox="0 0 1024 1024"><path d="M915.515 142.82L98.213 458.2c-46.058 17.772-44.905 43.6 2.349 57.622l197.477 58.595 80.292 238.91c10.512 31.279 37.973 37.875 61.463 14.605L543.378 725.32l204.475 149.84c26.566 19.468 53.879 9.222 61.05-23.09l149.21-672.345c7.151-32.22-11.894-48.753-42.598-36.906zM791.141 294.833l-348.62 310.61c-6.268 5.586-11.941 16.653-12.812 24.847l-15.39 144.698c-1.729 16.248-7.331 16.919-12.498 1.345l-67.457-203.339c-2.64-7.954 0.976-17.705 8.022-21.93L784.5 285.882c28.174-16.898 31.173-12.907 6.64 8.951z"></path></svg>
    </div>
    <div class="cancel-btn dialog-btn" @click="cancel">
      <span>Cancel</span>
      <svg viewBox="0 0 1024 1024"><path d="M693.527273 512l311.854545-311.854545c18.618182-18.618182 18.618182-55.854545 0-79.127273L902.981818 18.618182C884.363636 0 847.127273 0 823.854545 18.618182L512 330.472727 200.145455 13.963636C176.872727-4.654545 139.636364-4.654545 121.018182 13.963636L13.963636 121.018182c-18.618182 18.618182-18.618182 55.854545 0 79.127273L330.472727 512 18.618182 823.854545c-18.618182 18.618182-18.618182 55.854545 0 79.127273l102.4 102.4c18.618182 18.618182 55.854545 18.618182 79.127273 0l311.854545-311.854545 311.854545 311.854545c18.618182 18.618182 55.854545 18.618182 79.127273 0l102.4-102.4c18.618182-18.618182 18.618182-55.854545 0-79.127273L693.527273 512z"></path></svg>
    </div>
  </el-dialog>
</div>
</template>

<script>
import CommentItem from "@/views/product/commentItem";
import {getCommentListByProductId} from "@/api/comment";
import {getAvatar} from "@/api/user";
import {makeReply} from "@/api/comment";
import {ElDialog, ElMessage} from 'element-plus';

export default {
  name: "comment",
  components: {
    CommentItem,
    ElDialog
  },
  props: ['productId'],
  data() {
    return {
      comments:[],
      avatars: [],
      isDialogShow: false,
      reply_content: undefined,
      toReplyIndex: undefined
    }
  },
  methods: {
    reply(index) {
      this.isDialogShow = true;
      this.toReplyIndex = index;
    },
    confirm() {
      let replyPackage = {
        parentId: String(this.comments[this.toReplyIndex].commentId),
        username: this.$store.state.username,
        toUsername: this.comments[this.toReplyIndex].username,
        context: this.reply_content
      };
      makeReply(replyPackage).then(res => {
        this.isDialogShow = false;
        this.reply_content = '';
        ElMessage({
          showClose: true,
          center: true,
          message: 'success.',
          type: 'success',
          duration: 2000
        });
      });
    },
    cancel() {
      this.isDialogShow = false;
      this.reply_content = '';
    }
  },
  created() {
    console.log(this.productId)
    getCommentListByProductId(this.productId, 1, 20).then(async (res) => {
      this.comments = res;
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        let url = await getAvatar(res[i].username)
        this.avatars.push(url);
      }
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

  & /deep/ .el-overlay .el-dialog{
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    height: 60%;

    .dialog-title {
      font-weight: bold;
      font-size: 30px;
      color: #11564b;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .content-title {
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translate(-50%, 0);
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      .content-title-capital {
        font-weight: bold;
        font-size: 20px;
        color: #11564b;
        display: inline-block;
      }

      .content-title-input {
        all: unset;
        border-bottom: 3px #11564b solid;
        width: 400px;
        position: relative;
        left: 27px;
        height: 30px;
        letter-spacing: 2px;
        color: #11564b;
        font-weight: bold;
        font-size: 18px;
      }

    }

    .content-description {
      position: absolute;
      left: 50%;
      top: 10%;
      transform: translate(-50%, 0);
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      .content-description-capital {
        display: inline-block;
        font-weight: bold;
        font-size: 22px;
        color: #11564b;
        position: relative;
        right: 27px;
      }

      .content-description-input {
        all: unset;
        border-radius: 10px;
        border: 3px #11564b solid;
        width: 290px;
        height: 130px;
        letter-spacing: 2px;
        color: #11564b;
        font-weight: bold;
        font-size: 18px;
        padding: 10px;
      }

    }

    .dialog-btn {
      border: 3px #11564b solid;
      border-radius: 10px;
      width: 150px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 30px;
      cursor: pointer;
      transition: background-color .5s;

      span {
        color: #11564b;
        font-size: 18px;
        font-weight: bold;
        margin-right: 5px;
        transition: color .5s;
      }

      svg {
        fill: #11564b;
        transition: fill .5s;
      }

      &:hover {
        background-color: #11564b;
        span {
          color: #D6D5B7;
        }
        svg {
          fill: #D6D5B7;
        }
      }

    }

    .confirm-btn {
      left: 20%;
      svg {
        width: 25%;
      }
    }

    .cancel-btn {
      right: 20%;
      span {
        margin-right: 10px;
      }
      svg {
        width: 15%;
      }
    }

  }

}
</style>
