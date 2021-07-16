<template>
<div class="rate">
  <svg v-if="isShow < 1" @mouseenter="showTo(1)" t="1626158179447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4262" width="200" height="200"><path d="M512 816.213333l-307.456 161.621334 58.709333-342.357334L14.506667 393.045333 358.272 343.04 512 31.573333l153.728 311.466667 343.765333 49.92-248.746666 242.474667 58.709333 342.357333L512 816.213333z m0-96.426666l194.133333 102.058666-37.12-216.149333 157.098667-153.088-217.045333-31.573333L512 224.426667 414.933333 421.077333l-217.045333 31.573334 157.056 153.045333-37.077333 216.149333L512 719.786667z" p-id="4263" fill="#11564b"></path></svg>
<!--  填满颜色的星星-->
  <svg v-if="isShow >= 1" @mouseleave="onLeave" @click="confirmRate" t="1626158321465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4915" width="200" height="200"><path d="M520 46.4 361.6 337.6 32 401.6 262.4 644.8 219.2 974.4 520 830.4 820.8 974.4 779.2 644.8 1008 400 681.6 337.6Z" p-id="4916" fill="#11564b"></path></svg>
  <svg v-if="isShow < 2" @mouseenter="showTo(2)" t="1626158179447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4262" width="200" height="200"><path d="M512 816.213333l-307.456 161.621334 58.709333-342.357334L14.506667 393.045333 358.272 343.04 512 31.573333l153.728 311.466667 343.765333 49.92-248.746666 242.474667 58.709333 342.357333L512 816.213333z m0-96.426666l194.133333 102.058666-37.12-216.149333 157.098667-153.088-217.045333-31.573333L512 224.426667 414.933333 421.077333l-217.045333 31.573334 157.056 153.045333-37.077333 216.149333L512 719.786667z" p-id="4263" fill="#11564b"></path></svg>
  <!--  填满颜色的星星-->
  <svg v-if="isShow >= 2" @mouseleave="onLeave" @click="confirmRate" t="1626158321465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4915" width="200" height="200"><path d="M520 46.4 361.6 337.6 32 401.6 262.4 644.8 219.2 974.4 520 830.4 820.8 974.4 779.2 644.8 1008 400 681.6 337.6Z" p-id="4916" fill="#11564b"></path></svg>
  <svg v-if="isShow < 3" @mouseenter="showTo(3)" t="1626158179447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4262" width="200" height="200"><path d="M512 816.213333l-307.456 161.621334 58.709333-342.357334L14.506667 393.045333 358.272 343.04 512 31.573333l153.728 311.466667 343.765333 49.92-248.746666 242.474667 58.709333 342.357333L512 816.213333z m0-96.426666l194.133333 102.058666-37.12-216.149333 157.098667-153.088-217.045333-31.573333L512 224.426667 414.933333 421.077333l-217.045333 31.573334 157.056 153.045333-37.077333 216.149333L512 719.786667z" p-id="4263" fill="#11564b"></path></svg>
  <!--  填满颜色的星星-->
  <svg v-if="isShow >= 3" @mouseleave="onLeave" @click="confirmRate" t="1626158321465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4915" width="200" height="200"><path d="M520 46.4 361.6 337.6 32 401.6 262.4 644.8 219.2 974.4 520 830.4 820.8 974.4 779.2 644.8 1008 400 681.6 337.6Z" p-id="4916" fill="#11564b"></path></svg>
  <svg v-if="isShow < 4" @mouseenter="showTo(4)" t="1626158179447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4262" width="200" height="200"><path d="M512 816.213333l-307.456 161.621334 58.709333-342.357334L14.506667 393.045333 358.272 343.04 512 31.573333l153.728 311.466667 343.765333 49.92-248.746666 242.474667 58.709333 342.357333L512 816.213333z m0-96.426666l194.133333 102.058666-37.12-216.149333 157.098667-153.088-217.045333-31.573333L512 224.426667 414.933333 421.077333l-217.045333 31.573334 157.056 153.045333-37.077333 216.149333L512 719.786667z" p-id="4263" fill="#11564b"></path></svg>
  <!--  填满颜色的星星-->
  <svg v-if="isShow >= 4" @mouseleave="onLeave" @click="confirmRate" t="1626158321465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4915" width="200" height="200"><path d="M520 46.4 361.6 337.6 32 401.6 262.4 644.8 219.2 974.4 520 830.4 820.8 974.4 779.2 644.8 1008 400 681.6 337.6Z" p-id="4916" fill="#11564b"></path></svg>
  <svg v-if="isShow < 5" @mouseenter="showTo(5)" t="1626158179447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4262" width="200" height="200"><path d="M512 816.213333l-307.456 161.621334 58.709333-342.357334L14.506667 393.045333 358.272 343.04 512 31.573333l153.728 311.466667 343.765333 49.92-248.746666 242.474667 58.709333 342.357333L512 816.213333z m0-96.426666l194.133333 102.058666-37.12-216.149333 157.098667-153.088-217.045333-31.573333L512 224.426667 414.933333 421.077333l-217.045333 31.573334 157.056 153.045333-37.077333 216.149333L512 719.786667z" p-id="4263" fill="#11564b"></path></svg>
  <!--  填满颜色的星星-->
  <svg v-if="isShow >= 5" @mouseleave="onLeave" @click="confirmRate" t="1626158321465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4915" width="200" height="200"><path d="M520 46.4 361.6 337.6 32 401.6 262.4 644.8 219.2 974.4 520 830.4 820.8 974.4 779.2 644.8 1008 400 681.6 337.6Z" p-id="4916" fill="#11564b"></path></svg>

</div>
</template>

<script>
export default {
  name: "rate",
  props:{
    star:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: this.star,
      isActive: null
    }
  },
  methods: {
    showTo(index) {
      if(this.isActive) {
        this.isShow = index
      }
    },
    onLeave() {
      if(this.isActive) {
        this.isShow = 0
      }
    },
    confirmRate() {
      console.log('click')
      this.isActive = false
    }
  },
  mounted() {
    this.isActive = this.star === 0;
  }
}
</script>

<style scoped lang="scss">
.rate {
  display: flex;
  justify-content: space-around;
  cursor: pointer;

  svg {
    width: 4em;
    height: 4em;
    cursor: pointer;
  }
}
</style>