<template>
  <div class="chat">
    <chat-list :list-width="offsetX" @chatTo="chatTo" :web-socket-data="websocketData"></chat-list>
<!--    血泪史！当我们想要使用子组件给父组件通信时，通信函数不要加参数！！！-->
    <div class="divider" @mousedown="move" :style="{ left: 'calc(27.5% + ' + offsetX + 'px' }">
      <svg viewBox="0 0 1024 1024"><path d="M935.755 89.966a47.623 47.623 0 0 0-3.672-4.59A252.17 252.17 0 0 0 753.699 8.893c-66.385 1.148-131.794 24.73-180.622 72.352L398.021 256.818a248.096 248.096 0 0 0-72.065 180.392 258.539 258.539 0 0 0 76.54 179.875 30.213 30.213 0 0 0 3.902 3.27 68.163 68.163 0 0 0 94.73-4.475 68.278 68.278 0 0 0-2.41-95.99 123.188 123.188 0 0 1-36.55-85.721 112.229 112.229 0 0 1 32.303-81.303l174.655-175.343c22.72-21.746 52.385-34.426 83.884-32.59a116.933 116.933 0 0 1 82.852 36.836c22.95 22.721 35.918 53.13 36.549 85.778a110.909 110.909 0 0 1-31.385 80.213l-112.4 108.958a67.704 67.704 0 0 0-20.886 47.852c-0.401 18.245 6.369 35.516 19.05 48.655a68.278 68.278 0 0 0 96.507 1.836l113.376-109.417a248.9 248.9 0 0 0 72.065-180.335c-1.148-67.934-28.402-131.736-72.983-175.343z"></path><path d="M520.865 400.26a68.565 68.565 0 0 0-1.894 97.023c22.95 22.778 35.975 53.245 36.607 85.72a111.884 111.884 0 0 1-32.303 81.303L348.85 839.362a121.18 121.18 0 0 1-170.753-171.728L291.703 547.66a68.336 68.336 0 0 0-2.525-96.45 67.59 67.59 0 0 0-48.77-18.648c-18.188 0.46-35.115 8.033-47.737 21.23L80.212 572.56c-96.68 100.639-94.27 261.924 5.107 359.292a260.662 260.662 0 0 0 183.605 76.827h1.205a244.998 244.998 0 0 0 174.31-72.294l175.343-175.63a249.187 249.187 0 0 0 72.122-180.334 259.227 259.227 0 0 0-77.229-180.45 68.508 68.508 0 0 0-93.81 0.287z"></path></svg>
    </div>
    <chat-window :window-width="offsetX" :chatToUserInfo="chatToUserInfo" @receiveData="receiveData"></chat-window>
  </div>
</template>

<script>

import chatList from "@/views/message/component/chat/chatList";
import chatWindow from "@/views/message/component/chat/chatWindow";

export default {
  name: "chat",
  components: {
    chatList,
    chatWindow
  },
  data() {
    return {
      offsetX: undefined,
      chatToUserInfo: undefined,
      websocketData: null
    }
  },
  methods: {
    move() {
      document.onmousemove = (pointer) => {
        if (pointer.clientX < 690 || pointer.clientX > 920) return;
        this.offsetX = (pointer.clientX - 693);
        // 需要小查一下 client page offset layer screen 的区别。
      }
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    chatTo(chatToUserInfo) {
      this.chatToUserInfo = chatToUserInfo;
    },
    receiveData(websocketData) {
      this.websocketData = websocketData;
    }
  },
}
</script>

<style scoped lang="scss">

.chat {
  position: relative;
  left: 1vw;
  width: 65vw;
  height: 75vh;
  background-color: #D6D5B7;
  color: #11564b;
  border-radius: 10px;
  border: 5px solid #11564b;

  .divider {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 27.5%;
    width: 40px;
    background-image: linear-gradient(to right, #D6D5B7 , #cdcca7);

    &::before {
      content: '';
      position: relative;
      width: 3px;
      height: 0;
      background-color: #11564b;
      transition: height .5s ease-in-out;
      bottom: 10px;
    }

    svg {
      fill: #11564b;
      width: 35px;
      cursor: pointer;
      transition: transform .5s ease-in-out;
    }

    &::after {
      content: '';
      position: relative;
      width: 3px;
      height: 0;
      background-color: #11564b;
      transition: height .5s ease-in-out;
      top: 10px;
    }

    &:active {
      svg {
        cursor: move;
        transform: rotate(180deg);
      }
      &::before {
        height: 45%;
      }
      &::after {
        height: 45%;
      }
    }
  }
}

</style>
