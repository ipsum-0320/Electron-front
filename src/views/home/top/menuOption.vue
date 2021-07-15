<template>
  <div class="icon" @click="router(type)">
    <img :src="require('@/assets/image/svg/index/' + type.split(' ').join('').toLowerCase() + '.svg')" alt="">
    <!--  webpack 为什么不解析如下代码？ -->
    <!--
      <img :src="'@/assets/image/svg/index/' + type.split(' ').join('').toLowerCase() + '.svg'" alt="">
      必须使用 require 包起来后，路径才能够被解析。
      -->
    <div class="icon-font">{{ type }}</div>
  </div>
</template>

<script>

import { ElMessage  } from "element-plus";

export default {
  name: "menuOption",
  props: {
    type: String
  },
  methods: {
    router(route) {
      if (route === 'Order') {
        this.$router.push('/main/orderList');
      } else if (route === 'Sign Out') {
        this.$store.commit('setIsLogin', false);
        this.$store.commit('login', undefined);
        this.$store.commit('setToken', undefined);
        this.$store.commit('closeWebSocket');
        this.$router.push('/login');
        ElMessage({
          showClose: true,
          center: true,
          message: 'Sign out successfully.',
          type: 'success',
          duration: 2000
        });
      } else if (route === 'Profile') {
        this.$router.push('/main/user/profile');
      } else {
        this.$router.push(`/main/${route.toLowerCase()}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .icon {
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;

    &::before {
       content: '';
       width: 90%;
       height: 90%;
       background-color: transparent;
       border: 5px dashed #11564b;
       border-radius: 10px;
       position: absolute;
       opacity: 0;
       transition: opacity .5s;
     }

    &:hover::before {
       opacity: 1;
     }

    .icon-font {
      font-size: 18px;
      letter-spacing: 1px;
      position: relative;
      top: -15px;
      font-weight: bold;
      color: #11564b;
    }

    img {
      display: block;
      width: 50%;
      height: 50%;
    }
  }
</style>
