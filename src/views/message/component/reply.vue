<template>
  <div class="reply">
    <div class="reply-content">
      <div class="reply-item-and-reply-again" v-for="(item, index) in replyItems">
        <div class="reply-item">
          <img :src="avatars[index]" alt="" class="replier-avatar">
          <!-- 引入失败好像只会出现在引入 svg 文件中 -->
          <div class="reply-item-content">
            <div class="reply-user">
              <span>{{ item.username }}</span> reply:
            </div>
            <div class="reply-message">
              {{ item.username === $store.state.username ? `@${item.toUsername}  ${item.context}` : item.context }}
            </div>
            <div class="reply-operation">
              {{ item.createTime }}
              <div class="reply-operation-reply" :class="{ 'operation-active': isReplyAgain[index] }" @click="isReplyAgain[index] = !isReplyAgain[index];">
                <svg viewBox="0 0 1024 1024" class="sideBarOption-svg"><path d="M902.6 526.7h-71.4c0.2-5.3 0.4-10.6 0.4-15.9 0-187.6-140.5-342.4-327.9-342.4S161.5 323.2 161.5 510.7c0 56.9 23.1 130.8 32.1 160 6 19.5 20.5 54.9 43.5 106.3l-76-1.2c67.2 49.2 181 75.7 299 73.9l11.7-0.3 2.8-0.1 2.8 0.1c5.1 0.2 10.3 0.3 15.4 0.3 35.1 0 69.3-5.3 101.8-15.5l66.3 52.9c-50.8 23.2-107.1 37.1-166.3 37.1-6.2 0-13.7 0.3-19.8 0-4.3 0.2-9.5-0.1-13.8 0-125.6 1.9-333.7-32-406.1-164.4-6.9-12.7-6.5-33.9 0-42.1s16.5-9.5 23-8.2l56.2 8.6c-10.8-28.5-20.8-56.5-29.9-84-11.9-38.1-14.3-80.2-14.3-122.2C89.9 286.2 276.4 99.6 502 99.6S902.9 285 902.9 510.8c0 5.3-0.1 10.6-0.3 15.9z m-142.3 97.7c45.3 2.6 80.3 5.1 105.2 7.7 69.2 7.1 105.4 66.4 108.7 177.9-26.3-19.7-50.8-34.6-73.6-44.9-20.9-9.3-67.6-12.4-140.3-9.3v68.9c0 15.5-10 20.3-22.3 10.5L568.8 699.8c-12.3-9.8-12.3-25.8 0-35.7l169.3-135.5c12.3-9.8 22.3-5.2 22.3 10.5l-0.1 85.3z"></path></svg>
                reply
              </div>
            </div>
          </div>
          <div class="replied-content" v-if="comments.length !== 0 && comments[index] !== undefined">
            {{ comments[index].context }}
          </div>
        </div>
        <div class="reply-again" :class="{ 'active': isReplyAgain[index] }">
          <img :src="$store.state.avatarURL" alt="" class="user-avatar">
          <textarea class="reply-enter" placeholder="It is strictly forbidden to publish pornographic, violent, or reactionary remarks." v-model="reply_content"></textarea>
          <div class="confirm-btn" @click="reply(index)">
            reply
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import deleteImg from '@/assets/image/svg/message/delete.svg';
import {getChildCommentListByUsername, makeReply} from "@/api/comment";
import {getComment} from "@/api/comment";
import {ElMessage} from "element-plus";
import {getAvatar} from "@/api/user";

export default {
  name: "reply",
  data() {
    return {
      deleteImg,
      replyItems: null,
      isReplyAgain: null,
      comments: [],
      avatars: [],
      reply_content: ''
    };
  },
  watch: {
    replyItems(newValue, oldValue) {
      this.isReplyAgain = new Array(newValue.length);
      for (let i = 0; i < this.isReplyAgain.length; i++) {
        this.isReplyAgain[i] = false;
      }
    }
  },
  methods: {
    reply(index) {
      let replyPackage = {
        parentId: String(this.comments[index].commentId),
        username: this.$store.state.username,
        toUsername: this.replyItems[index].username === this.$store.state.username ? this.replyItems[index].toUsername : this.replyItems[index].username,
        context: this.reply_content
      };
      console.log(replyPackage);
      makeReply(replyPackage).then(res => {
        console.log(res);
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
    }
  },
  created() {
    getChildCommentListByUsername(this.$store.state.username, 1, 100).then(async res => {
      this.replyItems = res;
      for (let i = 0; i < this.replyItems.length; i++) {
        let comment = await getComment(this.replyItems[i].parentId);
        this.comments.push(comment);
        let avatarURL = await getAvatar(res[i].username);
        this.avatars.push(avatarURL);
      }
    }).catch(err => {
      console.log(err);
    });

    // this.replyItems = [
    //   {
    //     avatar: '',
    //     username: 'lorem.',
    //     replyMessage: 'That\'s so funny!',
    //     createdTime: '2021-06-05 13:29',
    //     repliedContent: 'Lorem ipsum dolor sit amet.'
    //   },
    //   {
    //     avatar: '',
    //     username: 'lorem.',
    //     replyMessage: 'That\'s so funny! That\'s so funny!',
    //     createdTime: '2021-06-05 13:29',
    //     repliedContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores atque blanditiis distinctio hic minus quibusdam sequi similique.'
    //   },
    //   {
    //     avatar: '',
    //     username: 'lorem.',
    //     replyMessage: 'That\'s so funny! That\'s so funny! That\'s so funny! That\'s so funny! That\'s so funny!',
    //     createdTime: '2021-06-05 13:29',
    //     repliedContent: 'Lorem ipsum dolor sit amet, consectetur.'
    //   },
    //   {
    //     avatar: '',
    //     username: 'lorem.',
    //     replyMessage: 'That\'s so funny!',
    //     createdTime: '2021-06-05 13:29',
    //     repliedContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. blanditiis distinctio hic minus quibusdam sequi similique.'
    //   },
    //   {
    //     avatar: '',
    //     username: 'lorem.',
    //     replyMessage: 'That\'s so funny! That\'s so funny! That\'s so funny!',
    //     createdTime: '2021-06-05 13:29',
    //     repliedContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores atque.'
    //   }
    // ]
  }
}
</script>

<style scoped lang="scss">

.reply {
  position: relative;
  left: 1vw;
  width: 65vw;
  height: 75vh;
  background-color: #D6D5B7;
  color: #11564b;
  border-radius: 10px;
  border: 5px solid #11564b;
  display: flex;
  justify-content: center;
  align-items: center;

  .reply-content {
    width: 95%;
    height: 90%;
    padding-right: 10px;
    overflow-x: hidden;
    overflow-y: auto;

    .reply-item-and-reply-again {
      position: relative;

      .reply-item {
        width: 100%;
        // height 不能够越级继承。
        background-color: #D6D5B7;
        position: relative;

        .replier-avatar {
          position: absolute;
          top: 50%;
          left: 20px;
          transform: translateY(-50%);
          height: 80px;
          width: 80px;
          border-radius: 50%;
        }

        .reply-item-content {
          position: absolute;
          top: 50%;
          left: 120px;
          width: 40%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 85%;

          .reply-user {
            color: #808080;
            span {
              color: #11564b;
              font-weight: bold;
              font-size: 20px;
            }
          }

          .reply-message {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .reply-operation {
            font-size: 14px;
            color: #808080;
            display: flex;
            align-items: center;

            .reply-operation-reply {
              cursor: pointer;
              user-select: none;
              position: relative;
              left: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: color .5s;
              &.operation-active {
                color: #11564b;
                svg {
                  fill: #11564b;
                }
              }
              svg {
                width: 20px;
                fill: #808080;
                margin-right: 5px;
                transition: fill .5s;
              }
              &:hover {
                color: #11564b;
                svg {
                  fill: #11564b;
                }
              }

            }

          }
        }

        .replied-content {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          max-width: calc(45% - 20px);
          height: calc(100% - 20px);
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: darken(#D6D5B7, 5%);
          color: #11564b;
          word-wrap: break-word;
          padding: 10px;
        }

        &:hover {
          background-color: darken(#D6D5B7, 5%);

          .replied-content {
            background-color: darken(#D6D5B7, 10%);
          }

        }

        &::before {
          content: '';
          display: block; // 伪元素默认是行内元素。
          width: 100%;
          height: 100px;
          position: relative;
          // 使用伪元素将高度撑起来！
        }
      }

      .reply-again {
        box-sizing: border-box;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100px;
        z-index: -1;
        background-color: darken(#D6D5B7, 5%);
        margin-top: 20px;

        .user-avatar {
          position: absolute;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
        }

        .reply-enter {
          box-sizing: border-box;
          all: unset;
          position: absolute;
          height: calc(75% - 20px);
          width: calc(72% - 20px);
          border: 3px solid #11564b;
          border-radius: 5px;
          top: 50%;
          transform: translateY(-50%);
          left: 13%;
          padding: 10px;
          color: #11564b;
          font-weight: bold;

          &::placeholder {
            color: #808080;
            font-weight: normal;
          }

        }

        .confirm-btn {
          user-select: none;
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 10%;
          right: 20px;
          height: 75%;
          background-color: #11564b;
          border-radius: 10px;
          border: 3px #11564b solid;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #D6D5B7;
          font-weight: bold;
          font-size: 20px;
          cursor: pointer;
          transition: color .5s, background-color .5s;

          &:hover {
            color: #11564b;
            background-color: darken(#D6D5B7, 5%);
          }

        }

        &.active {
          z-index: 0;
          position: relative;
        }

      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

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
