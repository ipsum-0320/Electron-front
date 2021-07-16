<template>
  <div class="log-container">
    <div class="log-content">
      <div class="log-tips">A total of {{ totalItems }} browsing records: </div>
      <div class="log-real-content" v-for="item in logItems">

      </div>
    </div>
  </div>
</template>

<script>

import { viewBrowseLog } from "@/api/browseLog";

export default {
  name: "index",
  data() {
    return {
      logItems: null,
      totalItems: undefined
    };
  },
  created() {
    viewBrowseLog(this.$store.state.username).then(res => {
      this.logItems = res.browseLogItems;
      this.totalItems = res.numberOfItems;
    }).catch(err => {
      console.log(err);
    });

  }
}
</script>

<style scoped lang="scss">

.log-container {
  width: 100vw;
  height: 88vh;
  background-color: #A0EEE1;
  position: relative;

  .log-content {
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    width: 80%;
    height: 85%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    .log-tips {
      position: absolute;
      left: 20px;
      top: 20px;
      font-weight: bold;
      color: #11564b;
      font-size: 20px;

    }

    .log-real-content {
      width: 95%;
      height: 80%;
      position: absolute;
      left: 50%;
      bottom: 5%;
      transform: translateX(-50%);
      background-color: #11564b;






    }


  }



}


</style>
