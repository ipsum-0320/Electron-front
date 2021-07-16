<template>
  <div class="window" :style="{ width: 'calc(68.5% - ' + windowWidth + 'px' }">
    <div class="chat-window" v-if="chatToUserInfo !== undefined">
      <div class="chat-message-item" v-for="item in chatMessageItems" :class="{ 'my-message': $store.state.username ===  item.username }">
        <img :src="$store.state.avatarURL" alt="" class="chat-avatar" v-if="$store.state.username ===  item.username">
        <img v-else :src="chatToUserInfo.avatarURL" alt="" class="chat-avatar">
        <div class="chat-bubble">
          <div class="chat-bubble-tips"></div>
          {{ item.context }}
        </div>
      </div>
    </div>
    <div class="enterArea" v-if="chatToUserInfo !== undefined">
      <div class="expression" tabindex="-1">
        <div class="expression-content">
          <div class="main-content">
            <div class="scroll-div">
              <div class="expression-item" v-for="(item, index) in expressionItems" @click="chooseExp(index)">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="subscript"></div>
        </div>
        <div class="quick-btn">
          <img :src="require('@/assets/image/svg/message/expression.svg')" alt="">
        </div>
      </div>
      <textarea class="enter" v-model="message"></textarea>
      <div class="tips">
        {{ message.length }} / {{ limit }}
      </div>
      <div class="send-btn" @click="send">
        <span>send</span>
        <svg viewBox="0 0 1024 1024"><path d="M915.515 142.82L98.213 458.2c-46.058 17.772-44.905 43.6 2.349 57.622l197.477 58.595 80.292 238.91c10.512 31.279 37.973 37.875 61.463 14.605L543.378 725.32l204.475 149.84c26.566 19.468 53.879 9.222 61.05-23.09l149.21-672.345c7.151-32.22-11.894-48.753-42.598-36.906zM791.141 294.833l-348.62 310.61c-6.268 5.586-11.941 16.653-12.812 24.847l-15.39 144.698c-1.729 16.248-7.331 16.919-12.498 1.345l-67.457-203.339c-2.64-7.954 0.976-17.705 8.022-21.93L784.5 285.882c28.174-16.898 31.173-12.907 6.64 8.951z"></path></svg>
      </div>
    </div>
    <div class="empty" v-else>
      <img src="@/assets/image/svg/message/toLeft.svg" alt="">
      <div class="chat-tips">
        Find someone to chat!
      </div>
    </div>
  </div>
</template>

<script>

import { getChatListByUserAndToUser } from '@/api/chat';
import { makeChat } from "@/api/chat";

export default {
  name: "chatWindow",
  props: {
    windowWidth: String,
    chatToUserInfo: String,
  },
  data() {
    return {
      expressionItems: [
          '┌(。Д。)┐---Scared',
          '(╬ Ò ‸ Ó)---angry',
          '٩(๑❛ᴗ❛๑)۶---happy',
          '(・⊝・)---daze',
          '(=｀ω´=)---cat',
          '(✖╭╮✖)---dead',
          '(~￣▽￣)~---cozy',
      ],
      message: '',
      limit: 300,
      messageItems: null,
      chatMessageItems: null,
      window: null
    }
  },
  watch: {
    chatToUserInfo: function (newVal, oldVal) {
      getChatListByUserAndToUser(this.$store.state.username, this.chatToUserInfo.toUsername, 1, 20).then(res => {
        this.chatMessageItems = res.reverse();
        this.window = document.querySelector('.chat-window');
        setTimeout(() => {
          this.window.scrollTop = this.window.scrollHeight;
        }, 0);
      }).catch(err => {
        console.log(err);
      });
    }
  },
  methods: {
    chooseExp(index) {
      this.message += this.expressionItems[index].substring(0, this.expressionItems[index].indexOf('---'));
    },
    send() {
      let messagePackage = {
        username: this.$store.state.username,
        toUsername: this.chatToUserInfo.toUsername,
        context: this.message,
      }
      makeChat(messagePackage).then(res => {
        this.chatMessageItems.push({
          username: this.$store.state.username,
          toUsername: this.chatToUserInfo.toUsername,
          context: this.message
        });
        this.message = '';
        setTimeout(() => {
          this.window.scrollTop = this.window.scrollHeight;
        }, 0);
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.$store.watch((state, getters) => state.webSocketData, () => {
      if (this.chatToUserInfo === undefined || this.$store.state.webSocketData.username !== this.chatToUserInfo.toUsername) {
        // 没有打开页面或者发送方和我当前正在聊天的对象不一致。

        // vuex 中的数据是响应式的，不能够直接传出去。
        // 但是 JS 中如果对象仍旧被变量所引用，那么内存是不会被回收的。
        this.$emit('receiveData', this.$store.state.webSocketData);
        return;
      }
      // 会出现两种可能的BUG
      this.chatMessageItems.push(this.$store.state.webSocketData);
      setTimeout(() => {
        this.window.scrollTop = this.window.scrollHeight;
      }, 0);
    });
  }
}
</script>

<style scoped lang="scss">
  .window {
    position: absolute;
    height: 100%;
    width: 68.5%;
    right: 0;
    background-color: darken(#D6D5B7, 5%);

    .chat-window {
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      width: 95%;
      height: 55%;
      overflow-y: auto;
      overflow-x: hidden;
      padding-top: 10px;

      .chat-message-item {
        user-select: none;
        width: 95%;
        display: flex;
        margin-bottom: 15px;

        .chat-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .chat-bubble {
          box-sizing: border-box;
          border-radius: 10px;
          border: 3px solid #11564b;
          max-width: 85%;
          word-break: break-all; // 响应式换行。
          padding: 10px;
          position: relative;
          left: 17px;

          .chat-bubble-tips {
            position: absolute;
            left: -12px;
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-right: 10px solid #11564b;
            border-bottom: 10px solid transparent;
          } // 这种方法对伪元素制作三角形无效。

        }

        &.my-message {
          flex-direction: row-reverse;

          .chat-bubble {
            left: -17px;

            .chat-bubble-tips {
              all: unset;
              transform: rotate(180deg);
              position: absolute;
              right: -13px;
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-right: 10px solid #11564b;
              border-bottom: 10px solid transparent;
            }

          }

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

    .enterArea {
      box-sizing: border-box;
      border-top: 3px #11564b solid;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40%;

      .expression {
        user-select: none;
        position: absolute;

        .expression-content {
          position: absolute;
          visibility: hidden;
          opacity: 0;
          transform: translateY(-10px);
          transition: visibility .5s, opacity .5s, transform .5s;

          .main-content {
            height: 160px;
            width: 190px;
            border: 3px solid #11564b;
            position: absolute;
            bottom: 29px;
            transform: translateX(2px);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #cdcca7;

            .scroll-div {
              overflow-x: hidden;
              overflow-y: auto;
              height: 95%;
              width: 90%;


              .expression-item {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 30px;
                cursor: pointer;
                font-weight: bold;
                font-size: 16px;

                &:hover {
                  background-color: darken(#D6D5B7, 10%);
                }

              }

              &::-webkit-scrollbar {
                width: 5px;
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


          .subscript {
            border-top: 10px solid #11564b;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            position: relative;
            bottom: 20px;
            left: 5px;
          }

        }

        .quick-btn {
          position: absolute;
          width: 30px;
          height: 30px;
          cursor: pointer;
          top: 5px;

          img {
            width: 100%;
            height: 100%;
          }

        }

        &:focus-within {
          .expression-content {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }

      }

      .enter {
        box-sizing: border-box;
        all: unset;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-51%);
        width: calc(97% - 20px);
        height: calc(50% - 20px);
        color: #11564b;
        font-weight: bold;
        border-radius: 5px;
        border: 1px solid #11564b;
        padding: 10px;
        overflow-x: hidden;
        word-break: break-all;

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

      .tips {
        color: #808080;
        position: absolute;
        bottom: 22px;
        right: 150px;
        font-weight: bold;
        font-size: 18px;
      }

      .send-btn {
        position: absolute;
        right: 15px;
        bottom: 15px;
        width: 120px;
        height: 40px;
        box-sizing: border-box;
        border: 3px solid #11564b;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .5s;

        span {
          color: #11564b;
          font-size: 18px;
          font-weight: bold;
          margin-right: 10px;
          transition: color .5s;
        }

        svg {
          width: 30px;
          height: 30px;
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

    }

    .empty {
      width: 80%;
      height: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 10px dashed #11564b;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 50%;
        height: 50%;
      }

      .chat-tips {
        color: #11564b;
        font-size: 26px;
        font-weight: bold;
      }

    }

  }
</style>
