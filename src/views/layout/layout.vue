<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from "@/components/navBar/navBar";

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style lang="scss">

</style>
