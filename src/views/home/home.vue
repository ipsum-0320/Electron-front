<template>
  <div class="home">
    <top></top>
    <medium></medium>
    <bottom></bottom>
    <div class="chat-tips-window" :class="{ 'receive-msg': receiveMsgAnimation }">
      <div class="info">
        <img :src="avatar !== undefined ? avatar : ''" alt="" class="avatar">
        {{ receiveMsgInfo !== null ? receiveMsgInfo[0].username : '' }} and others sent you a message.
      </div>
      <div class="view-now-btn" @click="$router.push('/main/message/chat')">
        View now
        <svg viewBox="0 0 1024 1024"><path d="M998.4 953.6L896 851.2c19.2-32 32-70.4 32-108.8 0-108.8-89.6-198.4-198.4-198.4s-198.4 89.6-198.4 198.4c0 108.8 89.6 198.4 198.4 198.4 44.8 0 83.2-12.8 115.2-38.4l102.4 102.4c12.8 12.8 38.4 12.8 51.2 0 12.8-12.8 12.8-38.4 0-51.2z m-275.2-89.6c-70.4 0-121.6-57.6-121.6-121.6 0-70.4 57.6-121.6 121.6-121.6 70.4 0 121.6 57.6 121.6 121.6 6.4 70.4-51.2 121.6-121.6 121.6z"></path><path d="M211.2 1024c-51.2 0-160-32-160-140.8V198.4c0-128 83.2-192 160-192H768c96 0 160 64 160 166.4v230.4c0 19.2-12.8 44.8-38.4 44.8-32-6.4-44.8-19.2-44.8-44.8V185.6c0-70.4-64-96-89.6-96H211.2C179.2 89.6 128 128 128 211.2v640c0 96 64 96 89.6 96h192c25.6-6.4 38.4 19.2 38.4 38.4s-12.8 38.4-44.8 38.4h-192z"></path><path d="M268.8 179.2H704c19.2 0 32 12.8 32 32s-12.8 32-32 32H268.8c-19.2 0-32-12.8-32-32s6.4-32 32-32zM268.8 364.8H704c19.2 0 32 12.8 32 32s-12.8 32-32 32H268.8c-19.2 0-32-12.8-32-32 0-12.8 6.4-32 32-32zM268.8 556.8h185.6c19.2 0 32 12.8 32 32s-19.2 32-32 32H268.8c-19.2 0-32-12.8-32-32s6.4-32 32-32z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>

import Top from './top';
import Medium from './medium';
import Bottom from './bottom';
import {getAvatar} from "@/api/user";

export default {
  name: "index",
  data() {
    return {
      receiveMsgAnimation: false,
      receiveMsgInfo: null,
      avatar: undefined
    };
  },
  components: {
    Top,
    Medium,
    Bottom
  },
  mounted() {
    if (this.$store.state.isLogin) {
      document.querySelector('.chat-tips-window').addEventListener('animationend', () => {
        this.receiveMsgAnimation = false;
      });
      this.$store.watch((state, getters) => state.webSocketData, () => {
        if (this.$store.state.webSocketData === undefined) return;
        // 初始化 $store.watch 并不会致使回调函数的调用。
        this.receiveMsgInfo = [];
        this.receiveMsgInfo.push(this.$store.state.webSocketData);
        this.$store.commit('setWebSocketData', undefined);
        getAvatar(this.receiveMsgInfo[0].username).then(res => {
          this.avatar = res;
          this.receiveMsgAnimation = true;
        }).catch(err => {
          console.log(err);
        });
      });
      if (this.$store.state.webSocketData !== undefined && this.$store.state.webSocketData.length !== 0) {
        this.receiveMsgInfo = this.$store.state.webSocketData;
        this.$store.commit('setWebSocketData', undefined);
        getAvatar(this.receiveMsgInfo[0].username).then(res => {
          this.avatar = res;
          this.receiveMsgAnimation = true;
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .chat-tips-window {
    position: fixed;
    width: 20%;
    height: 20%;
    background-color: #D6D5B7;
    border: 5px solid #11564b;
    border-radius: 10px;
    right: 40px;
    bottom: -180px;
    opacity: 0;

    &.receive-msg {
      animation: move 5s ease-in-out;
    }

    @keyframes move {
      0%, 100% {
        bottom: -180px;
        opacity: 0;
      }

      20%, 80% {
        bottom: 20px;
        opacity: 1;
      }

    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #11564b;
      font-weight: bold;
      font-size: 16px;
      position: absolute;
      left: 50%;
      top: 10%;
      width: 90%;
      transform: translateX(-50%);

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
      }

    }

    .view-now-btn {
      cursor: pointer;
      border: 3px solid #11564b;
      height: 40px;
      width: 120px;
      background-color: #D6D5B7;
      color: #11564b;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      position: absolute;
      right: 10px;
      bottom: 10px;
      transition: background-color .5s, color .5s;

      svg {
        width: 30px;
        fill: #11564b;
        margin-left: 5px;
        transition: fill .5s;
      }

      &:hover {
        background-color: #11564b;
        color: #D6D5B7;
        svg {
          fill: #D6D5B7;
        }
      }

    }

  }
</style>
