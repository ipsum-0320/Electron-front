<template>
  <div class="top">
    <div class="gap"></div>
    <div class="menu-pull" @click="pullMenuLine" :class="{ 'anim-menu-pull': anim_menu_pull, 'anim-menu-has-pull': anim_menu_has_pull }">
      <img src="@/assets/image/svg/index/right.svg" alt="">
    </div>
    <div class="title">
      <div class="logo">
        <span v-for="letter in logoLetter" class="logoLetter" :class="{ 'logoLetterMove': letter.isMove }">{{ letter.content }}</span>
      </div>
      <p class="introduce" @mouseenter="logoLetterMove">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, corporis, delectus distinctio dolorem dolores eum exercitationem obcaecati officiis qui repudiandae voluptate. Beatae consequuntur esse facere fugiat illum in maiores maxime natus quod totam? Optio, reiciendis, rem. Adipisci cum delectus eligendi non nulla provident quidem, repellat, reprehenderit, sequi ullam voluptatibus?
      </p>
    </div>
    <div class="image">
      <img src="@/assets/image/index/cat-title.jpg" alt="loading..." class="fromTopImg">
      <img src="@/assets/image/index/dog-title.jpg" alt="loading..." class="fromBottomImg">
    </div>
    <div class="menu" :class="{ 'anim-menu-fade-in': anim_menu_fade_in, 'anim-menu-fade-out': anim_menu_fade_out }">
      <div class="filter" @click="toLogin">
        <div class="icon">
          <img src="@/assets/image/svg/index/signIn.svg" alt="">
          <div class="icon-font">Sign In</div>
        </div>
      </div>
      <menu-option v-for="option in menuOptions" :type="option" class="icon"></menu-option>
    </div>
    <div class="svg-container">
      <svg viewBox="0 0 202.9 45.5" >
        <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
          <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
        </clipPath>
      </svg>
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
      logoLetter: [
        { content: 'P', isMove: false },
        { content: 'e', isMove: false },
        { content: 't', isMove: false },
        { content: 's', isMove: false },
        { content: 't', isMove: false },
        { content: 'o', isMove: false },
        { content: 'r', isMove: false },
        { content: 'e.', isMove: false }
      ],
      isMenuPulled: false,
      anim_menu_pull: false,
      anim_menu_has_pull: false,
      anim_menu_fade_in: false,
      anim_menu_fade_out: false,
      index: 1,
      isLogoLetterMove: false
    }
  },
  methods: {
    pullMenuLine() {
      if (this.isMenuPulled) {
        this.anim_menu_has_pull = true;
        this.anim_menu_pull = false;
        document.querySelector('.menu-pull img').style['transform'] = 'rotate(45deg)';
        this.anim_menu_fade_out = true;
        this.anim_menu_fade_in = false;
        this.isMenuPulled = false;
      } else {
        this.anim_menu_has_pull = false;
        this.anim_menu_pull = true;
        document.querySelector('.menu-pull img').style['transform'] = 'rotate(225deg)';
        this.anim_menu_fade_out = false;
        this.anim_menu_fade_in = true;
        this.isMenuPulled = true;
      }
    },
    letterPromise(i) {
      return new Promise((resolve) => {
        this.logoLetter[i].isMove = true;
        setTimeout(() => {
          this.logoLetter[i].isMove = false;
          resolve();
        }, 200);
      });
    },
    async logoLetterMove() {
      for (let i = 0; i < this.logoLetter.length; i++) {
        if (this.logoLetter[i].isMove) return;
      }
      await this.letterPromise(0);
      await this.letterPromise(1);
      await this.letterPromise(2);
      await this.letterPromise(3);
      await this.letterPromise(4);
      await this.letterPromise(5);
      await this.letterPromise(6);
      await this.letterPromise(7);
    },
    toLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped lang="scss">

.top {
  height: 100vh;
  width: 100vw;
  background-color: #A0EEE1;

  .gap {
    height: 35px;
    width: 100px;
    position: absolute;
    right: 10vw;
    background-color: #000000;
    transform: rotate(-180deg) translateX(-35%);
    clip-path: url(#menu);
  }

  .menu-pull {
    background-color: black;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10vh;
    right: 10vw;
    display: flex;
    transform: rotate(45deg);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.18,1.55,.79,1.2);

    &.anim-menu-pull {
      animation-name: menu-pull;
    }

    &.anim-menu-has-pull {
      animation-name: menu-has-pull;
    }

    img {
      transform: rotate(45deg);
      width: 20px;
      height: 20px;
    }

    &::after {
      top: -423px;
      left: -175px;
      content: '';
      height: 500px;
      border-left: 5px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
    }

    &:hover {
      box-shadow: 0 0 30px 10px #fff200;
    }

  }

  @keyframes menu-pull {
    0% {
      transform: rotate(45deg) translateY(0) translateX(0);
    }

    75% {
      transform: rotate(45deg) translateY(23vh) translateX(23vh);
    }

    100% {
      transform: rotate(45deg) translateY(20vh) translateX(20vh);
    }
  }

  @keyframes menu-has-pull {
    0% {
      transform: rotate(45deg) translateY(20vh) translateX(20vh);
    }

    25% {
      transform: rotate(45deg) translateY(23vh) translateX(23vh);
    }

    100% {
      transform: rotate(45deg) translateY(0) translateX(0);
    }
  }

  .title {
    position: absolute;
    top: 20vh;
    right: 6vw;
    animation: title 2s;

    .logo {
      font-family: 'Cinzel', serif;
      font-size: 200px;
      display: flex;

      .logoLetter {
        display: inline-block;
        width: 100px;
        height: 200px;
        animation-duration: .2s;

        &.logoLetterMove {
          animation-name: logoLetterMove;
        }

        @keyframes logoLetterMove {

          50% {
            transform: translateY(-20px);
          }

        }

      }

    }

    .introduce {
      cursor: pointer;
      position: relative;
      width: 700px;
      padding: 0 20px;

      &::after {
        content: '';
        width: 700px;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        border-left: 5px solid #000000;
        transition: height 1s, opacity 1s;
      }

      &:hover::after {
        height: 104px;
        opacity: 1;
      }

    }

    @keyframes title {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

  }

  @media screen and (max-width: 1436px) {
    .image {
      .fromBottomImg {
        display: none;
      }

      @media screen and (max-width: 1228px) {
        .fromTopImg {
          display: none;
        }
      }

    }
  }

  .image {
    position: relative;
    top: 40px;
    left: 30px;

    .fromTopImg {
      width: 300px;
      height: 400px;
      object-fit: contain;
      opacity: 1;
      animation: fromTopImg 2s;
      box-shadow: 1px 1px 10px #000000;
      transition: transform 1s;
      cursor: pointer;

      &:hover {
        transform: translateY(-20px);
      }

    }

    @keyframes fromTopImg {
      0% {
        transform: translateY(-40px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .fromBottomImg {
      width: 300px;
      height: 400px;
      object-fit: contain;
      position: relative;
      top: 50px;
      right: 50px;
      animation: fromBottomImg 2s;
      box-shadow: 1px 1px 10px #000000;
      transition: transform 1s;
      cursor: pointer;

      &:hover {
        transform: translateY(-20px);
      }

    }

    @keyframes fromBottomImg {
      0% {
        transform: translateY(40px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

  }

  .menu {
    width: 40vw;
    height: 40vh;
    background-color: #D6D5B7;
    position: absolute;
    top: 5vh;
    right: 15vw;
    border: 5px solid #19CAAD;
    border-radius: 10px;
    transform: translateY(-47vh);
    display: grid;
    justify-items: center;
    align-items: center;
    column-gap: 10px;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.18,1.55,.79,1.2);

    &.anim-menu-fade-in {
      animation-name: menuFadeIn;
    }

    &.anim-menu-fade-out {
      animation-name: menuFadeOut;
    }

    .filter {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 10px;
      backdrop-filter: brightness(35%) blur(3px);
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {

        &::before {
          border: 5px dashed #D6D5B7;
        }

        .icon-font {
          color: #D6D5B7;
        }

      }


    }

    @media screen and (max-height: 700px){
      right: 20vw;
      height: 30vh;
      width: 60vw;

      .icon:nth-child(4), .icon:nth-child(5), .icon:nth-child(6) {
        display: none;
      }

      @media (max-height: 400px) {
        display: none;
      }

    }

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

  }

  @keyframes menuFadeIn {
    0% {
      transform: translateY(-47vh);
    }

    75% {
      transform: translateY(2.5%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes menuFadeOut {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(2.5%);
    }

    100% {
      transform: translateY(-47vh);
    }
  }

}

.svg-container {
  width: 0;
  height: 0;
}
</style>
