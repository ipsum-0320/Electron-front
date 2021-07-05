<template>
  <div class="top">
    <div class="gap"></div>
    <div class="menu-pull">
      <img src="@/assets/image/svg/index/right.svg" alt="">
    </div>
    <div class="title">
      <div class="logo">
        <span v-for="letter in logoLetter">{{ letter }}</span>
      </div>
      <p class="introduce">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, corporis, delectus distinctio dolorem dolores eum exercitationem obcaecati officiis qui repudiandae voluptate. Beatae consequuntur esse facere fugiat illum in maiores maxime natus quod totam? Optio, reiciendis, rem. Adipisci cum delectus eligendi non nulla provident quidem, repellat, reprehenderit, sequi ullam voluptatibus?
      </p>
    </div>
    <div class="image">
      <img src="@/assets/image/index/cat-title.jpg" alt="loading..." class="fromTopImg">
      <img src="@/assets/image/index/dog-title.jpg" alt="loading..." class="fromBottomImg">
    </div>
    <div class="menu">
      <div class="filter">
        <div class="icon">
          <img src="@/assets/image/svg/index/signIn.svg" alt="">
          <div class="icon-font">Sign In</div>
        </div>
      </div>
      <div v-for="option in menuOptions">
        <menu-option :type="option"></menu-option>
      </div>
    </div>
  </div>
</template>

<script>

import menuOption from "@/views/home/top/menuOption";

export default {
  name: "index",
  components: {
    menuOption
  },
  data() {
    return {
      menuOptions: ['Profile', 'Cart', 'Order', 'Collection', 'Search', 'Sign Out'],
      logoLetter: ['P','e','t','s','t','o','r','e.']
    }
  }
}
</script>

<style scoped>

</style>
