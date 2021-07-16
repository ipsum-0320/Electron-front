<template>
  <div class="home">
    <top></top>
    <medium></medium>
    <bottom></bottom>
    <div class="chat-tips-window">

    </div>
  </div>
</template>

<script>

import Top from './top';
import Medium from './medium';
import Bottom from './bottom';

export default {
  name: "index",
  components: {
    Top,
    Medium,
    Bottom
  },
  created() {
    // if (this.$store.state.isLogin) {
    //   console.log(this.$store.state.webSocketData.length);
    //   this.$store.watch((state, getters) => state.webSocketData, () => {
    //     console.log('log');
    //   });
    // }
  }
}
</script>

<style scoped lang="scss">
  .chat-tips-window {
    position: fixed;
    width: 25%;
    height: 25%;
    background-color: #11564b;
    right: 40px;
    bottom: 40px;

  }
</style>
