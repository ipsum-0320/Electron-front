<template>
  <div class="nav-bar">
    <div class="web-logo" @click="router('/home')">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="logo-image">
        <path d="M314.9824 571.35104c78.2336-17.24416
        103.2192-87.28576 68.9152-166.4-13.55776-31.3344-68.28032-138.69056-90.7264-182.59968-12.14464 10.19904-22.17984
        21.9136-29.22496 34.93888-26.74688 49.27488-28.59008 158.65856-42.06592
         295.23968 24.3712 16.1792 55.7056 27.01312 93.10208
         18.8416z m558.98112-184.79104a31.47776 31.47776 0 0 0-34.67264-30.18752c-30.35136 3.072-77.08672
          3.072-116.9408-17.08032-65.1264-32.99328-37.0688-80.60928-90.8288-130.8672-54.4768-50.93376-194.21184-56.48384-288.01024-16.26112
           36.78208 74.71104 90.7264 186.20416 103.64928 222.28992 37.15072
           104.18176-20.31616 188.8256-109.11744 215.67488-52.0192
           15.7696-93.02016 7.22944-123.71968-9.216a2106.1632 2106.1632
           0 0 1-9.07264 63.95904c-9.58464 60.2112-22.4256 110.08-35.10272
           149.42208a59.55584 59.55584 0 0 0 57.89696 92.93824l0.53248
            0.512h416.23552c0.96256 0.1024 2.02752 0.18432 2.99008
            0.18432a35.75808 35.75808 0 0 0 31.86688-51.9168 237.85472 237.85472 0 0
            0-97.50528-139.38688c1.8432-39.07584 10.99776-74.97728 33.25952-98.57024
            46.36672-49.19296 162.97984-12.67712 226.24256-96.09216 31.15008-41.2672
            33.8944-112.64 32.29696-155.40224z m-292.2496 15.29856a45.01504 45.01504
             0 0 1-44.9536-45.056c0-24.90368 20.15232-45.056 44.9536-45.056 24.82176
              0 44.97408 20.15232 44.97408 45.056 0 24.90368-20.15232 45.056-44.97408
               45.056z"></path>
      </svg>
      <div class="log-text">PetStore</div>
    </div>
    <div class="nav-options">
      <div class="nav-option nav-option-pet">
        <div class="nav-pet-option">
          <img src="@/assets/image/svg/navbar/pet.svg" alt="">
          <div class="icon-font">
            Pet<img src="@/assets/image/svg/navbar/more.svg" alt="" class="icon-more">
          </div>
        </div>
        <div class="nav-pet-content">
          <div class="triangle"></div>
          <div class="content">
            <div class="nav-pet-content-option nav-pet-content-option-fish">
              <img src="@/assets/image/svg/navbar/FISH.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">FISH</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-bird">
              <img src="@/assets/image/svg/navbar/BIRDS.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">BIRD</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-dog" @click="router('/main/category')">
              <img src="@/assets/image/svg/navbar/DOGS.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">DOG</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-cat">
              <img src="@/assets/image/svg/navbar/CATS.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">CAT</div>
            </div>
            <div class="nav-pet-content-option nav-pet-content-option-reptile">
              <img src="@/assets/image/svg/navbar/REPTILES.svg" alt="" class="icon">
              <div class="icon-font nav-pet-content-font">REPTILE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-option nav-option-cart" @click="router('/main/cart')">
        <img src="@/assets/image/svg/index/cart.svg" alt="">
        <div class="icon-font">Cart</div>
      </div>
      <div class="nav-option nav-option-order" @click="router('/main/orderList')">
        <img src="@/assets/image/svg/index/order.svg" alt="">
        <div class="icon-font">Order</div>
      </div>
      <div class="nav-option nav-option-search" @click="router('/main/search')">
        <img src="@/assets/image/svg/index/search.svg" alt="">
        <div class="icon-font">Search</div>
      </div>
      <div class="nav-option nav-option-collection" @click="router('/main/message')">
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
          <div class="profile-option" @click="router('/main/user/profile')">
            <img src="@/assets/image/svg/index/profile.svg" alt="" class="icon">
            <div class="icon-font">Profile</div>
          </div>
          <div class="profile-option" @click="router('/main/user/log')">
            <img src="@/assets/image/svg/navbar/log.svg" alt="" class="icon">
            <div class="icon-font">Log</div>
          </div>
          <div class="profile-option" @click="router('/main/user/collection')">
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
    router(route) {
      this.$router.push(route);
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
