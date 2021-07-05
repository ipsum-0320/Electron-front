<template>
  <div class="menu-option">
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
export default {
  name: "menuOption",
  props: {
    type: String
  }
}
</script>

<style scoped>

</style>
