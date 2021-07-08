<template>
  <div class="home">
    <top></top>
    <medium></medium>
    <bottom></bottom>
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
  }
}
</script>

<style scoped>

</style>
