<template>
  <div class="nav-bar">
    <div class="web-logo" @click="router2('/home')">
      <svg viewBox="0 0 1024 1024" class="logo-image"><path d="M836.4 354.4c-10.8-3.6-21.6-7-32.4-10.2 1.8-7.4 3.4-14.8 5-22.2 24.6-119.2 8.4-215-46.2-246.6-52.6-30.2-138.4 1.2-225.2 76.8-8.6 7.4-17 15.2-25 23-5.4-5.2-11-10.4-16.6-15.4-91-80.8-182.2-114.8-236.8-83-52.4 30.4-68 120.6-46 233.4 2.2 11.2 4.6 22.2 7.4 33.4-12.8 3.6-25.4 7.6-37.2 11.8C76.6 392.4 0 450.8 0 511.2c0 62.4 81.6 125 192.6 163 9 3 18 6 27.2 8.6-3 12-5.6 23.8-8 36-21 111-4.6 199 47.8 229.2 54 31.2 144.8-0.8 233.2-78.2 7-6.2 14-12.6 21-19.4 8.8 8.6 18 16.8 27.2 24.8 85.6 73.6 170.2 103.4 222.4 73.2 54-31.2 71.6-125.8 48.8-241-1.8-8.8-3.8-17.8-6-27 6.4-1.8 12.6-3.8 18.8-5.8 115.4-38.2 199-100 199-163.4 0-60.6-78.8-119.4-187.6-156.8zM565.8 184.6c74.4-64.8 143.8-90.2 175.4-72 33.8 19.4 46.8 97.8 25.6 200.8-1.4 6.8-2.8 13.4-4.6 20-44.4-10-89.4-17.2-134.6-21.2-26-37.2-54.4-72.8-85.2-106.2 7.8-7.4 15.4-14.4 23.4-21.4zM334.4 615c10.2 17.4 20.6 34.8 31.6 51.8-31.2-3.4-62.2-8.4-92.8-15 8.8-28.8 19.8-58.6 32.6-89 9.2 17.6 18.6 35 28.6 52.2z m-60.6-240.6c28.8-6.4 59.4-11.6 91.2-15.6-10.6 16.6-21 33.6-30.8 50.8-9.8 17-19.4 34.4-28.4 52-12.6-29.8-23.2-59-32-87.2z m54.8 137.8c13.2-27.6 27.6-54.6 42.8-81.2s31.6-52.4 48.8-77.8c30-2.2 60.6-3.4 91.8-3.4s62 1.2 91.8 3.4c17 25.2 33.2 51 48.6 77.4s29.8 53.4 43.4 80.8c-13.4 27.6-27.8 54.8-43.2 81.6-15.2 26.6-31.4 52.4-48.4 78-29.8 2.2-60.8 3.2-92.2 3.2s-61.8-1-91.2-2.8c-17.4-25.4-33.8-51.4-49.2-78s-29.6-53.6-43-81.2z m361.2 102.4c10.2-17.6 19.8-35.4 29.2-53.4 12.8 29 24 58.4 33.8 88.6-31 7-62.4 12.4-94 16 10.8-16.8 21-34 31-51.2z m28.8-153c-9.4-17.6-19-35.2-29-52.4-9.8-17-20-33.8-30.6-50.4 32.2 4 63 9.4 91.8 16-9.2 29.6-20 58.4-32.2 86.8zM512.4 236.6c21 22.8 40.8 46.8 59.2 71.6-39.6-1.8-79.4-1.8-119 0 19.6-25.8 39.8-49.8 59.8-71.6zM280.4 114c33.6-19.6 108.2 8.4 186.8 78 5 4.4 10 9.2 15.2 14-31 33.4-59.6 69-85.8 106.2-45.2 4-90 11-134.4 20.8-2.6-10.2-4.8-20.6-7-31-18.8-96.8-6.4-169.8 25.2-188z m-49 527.2c-8.4-2.4-16.6-5-24.8-7.8-42.6-13.4-91-34.6-126-62.4-20.2-14-33.8-35.6-37.6-59.8 0-36.6 63.2-83.4 154.4-115.2 11.4-4 23-7.6 34.6-11 13.6 43.4 30 86 49 127.2-19.2 41.8-35.8 85-49.6 129z m233.2 196c-33 30.2-71.2 54.2-112.8 70.6-22.2 10.6-47.8 11.6-70.6 2.6-31.8-18.4-45-89-27-184 2.2-11.2 4.6-22.4 7.4-33.4 44.8 9.6 90 16.2 135.8 19.6 26.4 37.4 55.4 73.2 86.4 106.8-6.4 6.2-12.8 12.2-19.2 17.8z m49-48.6c-20.4-22-40.8-46.4-60.6-72.6 19.2 0.8 39 1.2 59 1.2 20.6 0 40.8-0.4 60.8-1.4-18.4 25.4-38.2 49.6-59.2 72.8z m261.4 60c-1.8 24.4-13.8 47.2-33 62.6-31.8 18.4-99.6-5.6-172.8-68.4-8.4-7.2-16.8-15-25.4-23 30.6-33.8 58.8-69.6 84.4-107.2 45.8-3.8 91.4-10.8 136.4-21 2 8.2 3.8 16.4 5.4 24.4 9.8 43.2 11.4 88.2 5 132.6z m36.4-215c-5.6 1.8-11.2 3.6-17 5.2-14-43.6-31.2-86.2-51-127.6 19.2-40.8 35.4-82.8 49-125.8 10.4 3 20.4 6.2 30 9.4 93.2 32 158.6 79.6 158.6 116 0 39.2-69.8 89.8-169.6 122.8z m-299.4-30c50.6 0 91.6-41 91.6-91.6s-41-91.6-91.6-91.6c-50.6 0-91.6 41-91.6 91.6s41 91.6 91.6 91.6z" ></path></svg>
      <div class="log-text">Electron</div>
    </div>
    <div class="nav-options">
      <div class="nav-option nav-option-pet">
        <div class="nav-pet-option">
          <img src="@/assets/image/svg/navbar/product.svg" alt="">
          <div class="icon-font">
            Product<img src="@/assets/image/svg/navbar/more.svg" alt="" class="icon-more">
          </div>
        </div>
        <div class="nav-pet-content">
          <div class="triangle"></div>
          <div class="content">
            <div class="nav-pet-content-option nav-pet-content-option-fish" @click="router1('PHONE')">
              <img src="@/assets/image/svg/navbar/PHONE.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">PHONE</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-bird" @click="router1('COMPUTER')">
              <img src="@/assets/image/svg/navbar/COMPUTER.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">COMPUTER</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-dog" @click="router1('WATCH')">
              <img src="@/assets/image/svg/navbar/WATCH.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">WATCH</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-cat" @click="router1('EARPHONE')">
              <img src="@/assets/image/svg/navbar/EARPHONE.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">EARPHONE</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-reptile" @click="router1('PAD')">
              <img src="@/assets/image/svg/navbar/PAD.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">PAD</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-option nav-option-cart" @click="router2('/main/cart')">
        <img src="@/assets/image/svg/index/cart.svg" alt="">
        <div class="icon-font">Cart</div>
      </div>
      <div class="nav-option nav-option-order" @click="router2('/main/orderList')">
        <img src="@/assets/image/svg/index/order.svg" alt="">
        <div class="icon-font">Order</div>
      </div>
      <div class="nav-option nav-option-search" @click="router2('/main/search')">
        <img src="@/assets/image/svg/index/search.svg" alt="">
        <div class="icon-font">Search</div>
      </div>
      <div class="nav-option nav-option-collection" @click="router2('/main/message')">
        <img src="@/assets/image/svg/navbar/message.svg" alt="">
        <div class="icon-font">Message</div>
      </div>
    </div>
    <div class="avatar">
      <img :src="$store.state.avatarURL" alt="">
      <div class="profile">
        <div class="profile-name"> {{ $store.state.username }} </div>
        <div class="divide-line"></div>
        <div class="profile-group">
          <div class="profile-option" @click="router2('/main/user/profile')">
            <img src="@/assets/image/svg/index/profile.svg" alt="" class="icon">
            <div class="icon-font">Profile</div>
          </div>
          <div class="profile-option" @click="router2('/main/user/log')">
            <img src="@/assets/image/svg/navbar/log.svg" alt="" class="icon">
            <div class="icon-font">Log</div>
          </div>
          <div class="profile-option" @click="router2('/main/user/collection')">
            <img src="@/assets/image/svg/index/collection.svg" alt="" class="icon">
            <div class="icon-font">Collection</div>
          </div>
        </div>
        <div class="divide-line"></div>
        <div class="profile-group" @click="signOut">
          <div class="profile-option signOut-profile-option">
            <img src="@/assets/image/svg/index/signout.svg" alt="" class="icon">
            <div class="icon-font">Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "navBar",
  methods: {
    router1(categoryId) {
      if (this.$route.path === '/main/category') {
        this.$EventBus.emit('update', { categoryId });
      }
      else this.$router.push({path: '/main/category', query:{categoryId: categoryId}})
    },
    router2(path) {
      this.$router.push(path);
    },
    signOut() {
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
    }
  }
}
</script>

<style scoped lang="scss">

  .nav-bar {
    width: 100vw;
    height: 12vh;
    background-color: #A0EEE1;
    display: flex;
    justify-content: center;
    align-items: center;

    .web-logo {
      top: 8px;
      left: 65px;
      position: absolute;
      display: grid;
      grid-template: 2.8vw 1.2vw / 4vw;
      justify-items: center;
      align-items: center;
      background-color: #D6D5B7;
      border: 5px solid #11564b;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color .5s;
      width: 4vw;
      height: 4vw;

      .logo-image {
        fill: #11564b;
        width: 70%;
        height: 70%;
        transition: fill .5s;
      }

      .log-text {
        color: #11564b;
        font-weight: bold;
        font-size: 10px;
        position: relative;
        top: -10px;
        transition: color .5s;
      }

      &:hover {
        background-color: #11564b;

        .log-text {
          color: #D6D5B7;
        }

        .logo-image {
          fill: #D6D5B7;
        }

      }

    }

    .nav-options {
      height: 100%;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      right: 70px;

      .nav-pet-option {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
      }

      .nav-pet-content {
        position: absolute;
        width: 200px;
        margin-top: 5px;
        top: 70px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: opacity .5s, visibility .5s, transform .5s;
        z-index: 1;

        .triangle {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #11564b;
        }

        .content {
          width: 100%;
          background-color: #D6D5B7;
          border-radius: 10px;
          border: 5px solid #11564b;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          .nav-pet-content-option {
            display: flex;
            margin-top: 25px;

            &:first-child {
              margin-top: 20px;
            }

            &:last-child {
              margin-bottom: 20px;
            }

            .icon {
              width: 25px;
              height: 25px;
              transition: transform .5s;
              transform-origin: right center;
            }

            .icon-font {
              display: inline-block;
              font-size: 18px;
              letter-spacing: 1px;
              position: relative;
              margin-left: 3px;
              bottom: 5px;
              font-weight: bold;
              color: #11564b;
              transition: transform .5s;

              &::after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 35px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-bottom: 5px solid #11564b;
                transition: transform .5s;
              }

            }

            &:hover {
              .icon-font {
                transform: translateY(-5px);
                &::after {
                  transform: translate(-50%, calc(-50% + 5px));
                }
              }
              img {
                transform: scale(1.3);
              }
            }

          }

        }
      }

      .nav-option {
        height: 100%;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        img.icon-more {
          height: 18px;
          width: 18px;
          position: relative;
          top: 4px;
          margin-left: 2px;
          transform: rotate(-180deg);
          transition: transform .5s;
        }

        img:not(.icon-more):not(.icon) {
          height: 30%;
          transition: transform .5s;
          transform-origin: right center;

          & + .icon-font {
            font-size: 20px;
            letter-spacing: 1px;
            position: relative;
            margin-left: 5px;
            font-weight: bold;
            color: #11564b;
            transition: transform .5s;

            &::after {
              content: '';
              display: block;
              position: absolute;
              width: 100%;
              height: 35px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-bottom: 5px solid #11564b;
              transition: transform .5s;
            }

          }

        }

        &:hover {
          .icon-font.icon-font:not(.nav-pet-content-font) {
            transform: translateY(-5px);
            &::after {
              transform: translate(-50%, calc(-50% + 5px));
            }
          }
          img:not(.icon-more):not(.icon) {
            transform: scale(1.8);
          }
          img.icon-more {
            transform: rotate(0deg);
          }
          .nav-pet-content {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }

      }

    }

    .avatar {
      top: 13px;
      right: 145px;
      position: absolute;
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img:not(.icon) {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: transform .5s;
        transform-origin: center top;
        box-shadow: 0 0 10px 3px #11564b;
        cursor: pointer;
        position: relative;
        z-index: 2;
      }

      .profile {
        visibility: hidden;
        opacity: 0;
        top: 73px;
        position: absolute;
        width: 275px;
        height: 327px;
        background-color: #D6D5B7;
        border-radius: 10px;
        border: 5px solid #11564b;
        transform: translateY(10px);
        transition: opacity .5s, visibility .5s, transform .5s;
        z-index: 1;

        .profile-name {
          margin-top: 40px;
          text-align: center;
          font-weight: bold;
          color: #11564b;
          font-size: 25px;
        }

        .divide-line {
          width: 100%;
          height: 3px;
          margin: 10px 0;
          background-image: linear-gradient(to right, rgba(#11564b, 0) 5%, rgba(#11564b, 1) 20%, rgba(#11564b, 1) 80%, rgba(#11564b, 0) 95%);
        }

        .profile-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .profile-option {
            margin-top: 10px;
            cursor: pointer;

            &:not(:first-child) {
              margin-top: 20px;
            }

            &:last-child {
              margin-bottom: 10px;
            }

            .icon {
              width: 25px;
              height: 25px;
              transition: transform .5s;
              transform-origin: right center;
            }

            .icon-font {
              display: inline-block;
              font-size: 18px;
              letter-spacing: 1px;
              position: relative;
              margin-left: 3px;
              bottom: 5px;
              font-weight: bold;
              color: #11564b;
              transition: transform .5s;

              &::after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 35px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-bottom: 5px solid #11564b;
                transition: transform .5s;
              }

            }

            &:hover {
              .icon-font {
                transform: translateY(-5px);
                &::after {
                  transform: translate(-50%, calc(-50% + 5px));
                }
              }
              img {
                transform: scale(1.5);
              }
            }

          }

        }

      }

      &:hover {

        img:not(.icon) {
          transform: scale(1.5) translateY(10px);
        }

        .profile {
          transform: translateY(0);
          visibility: visible;
          opacity: 1;
        }

      }

    }

  }
</style>
