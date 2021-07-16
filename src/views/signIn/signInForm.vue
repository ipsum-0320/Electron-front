<template>
  <div class="base-form" :class="{ 'toLeft': !isLoginFormActive, 'toRight': isLoginFormActive }">
    <div class="login-form" :class="{ 'active-form': isLoginFormActive }">
      <div class="form-title">SIGN IN</div>
      <form class="form-content">
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/account.svg" alt="">
          <input type="text" class="form-text" autofocus required v-model="username">
          <div class="form-element-label">Username</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/password.svg" alt="">
          <input type="password" class="form-text" required v-model="password">
          <div class="form-element-label">Password</div>
        </div>
        <div class="form-element validate-form-element">
          <img src="@/assets/image/svg/signIn/validate.svg" alt="">
          <input type="text" class="form-text" required v-model="validateCode">
          <div class="form-element-label">Validate</div>
          <div class="get-validate-btn" @click="validate" :class="{ 'get-validate-btn-opacity0': isValidateOpacity0 }">{{ isValidate ? validateContent : 'click me' }}</div>
        </div>
        <div class="button-group">
          <a href="">
            <img src="@/assets/image/svg/signIn/sina.svg" alt="">
            Sign In By Sina
          </a>
          <div class="base-form-button" @click="loginSubmit">Submit</div>
          <div class="waiting"></div>
          <div class="base-form-button result-button">
            <svg class="result" xmlns="http://www.w3.org/2000/svg">
              <polyline  points="3,17 13,27 30,7"></polyline>
            </svg>
            <svg class="result" xmlns="http://www.w3.org/2000/svg">
              <polyline  points="6,6 27,27"></polyline>
              <polyline  points="27,6 6,27"></polyline>
            </svg>
          </div>
        </div>
      </form>
    </div>
    <div class="register-form" :class="{ 'active-form': !isLoginFormActive }">
      <div class="form-title">REGISTER</div>
      <form class="form-content">
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/account.svg" alt="">
          <input type="text" class="form-text" autofocus required>
          <div class="form-element-label">Username</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/password.svg" alt="">
          <input type="password" class="form-text" required>
          <div class="form-element-label">Password</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/password.svg" alt="">
          <input type="password" class="form-text" required>
          <div class="form-element-label">Repeat Password</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/fullName.svg" alt="">
          <input type="text" class="form-text" autofocus required>
          <div class="form-element-label">Full Name</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/email.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">Email</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/phone.svg" alt="">
          <input type="text" class="form-text" autofocus required>
          <div class="form-element-label">Phone</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/address.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">Address One</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/address.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">Address Two</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/zip.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">Zip</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/city.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">City</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/state.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">State</div>
        </div>
        <div class="form-element">
          <img src="@/assets/image/svg/signIn/country.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">Country</div>
        </div>
        <div class="form-element validate-form-element">
          <img src="@/assets/image/svg/signIn/validate.svg" alt="">
          <input type="text" class="form-text" required>
          <div class="form-element-label">Validate</div>
          <div class="get-validate-btn" @click="validate" :class="{ 'get-validate-btn-opacity0': isValidateOpacity0 }">{{ isValidate ? validateContent : 'click me' }}</div>
        </div>
      </form>
      <div class="button-group">
        <div class="base-form-button">Reset</div>
        <div class="base-form-button" id="register-submit" @click="registerSubmit">Submit</div>
        <div class="waiting"></div>
        <div class="base-form-button result-button">
          <svg class="result" xmlns="http://www.w3.org/2000/svg">
            <polyline  points="3,17 13,27 30,7"></polyline>
          </svg>
          <svg class="result" xmlns="http://www.w3.org/2000/svg">
            <polyline  points="6,6 27,27"></polyline>
            <polyline  points="27,6 6,27"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
import { ElMessage  } from "element-plus";
import { getAvatar } from "@/api/user";

export default {
  name: "signInForm",
  data() {
    return {
      operator: ['+', '-', '×'],
      isValidateOpacity0: false,
      isValidate: false,
      validateContent: undefined,
      validateCode: '',
      username: '',
      password: ''
    }
  },
  props: {
    isLoginFormActive: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    validate() {
      let num1 = Math.round(Math.random() * 10);
      let num2 = Math.round(Math.random() * 10);
      let operatorIndex = Math.round(Math.random() * 10) % 3;
      this.isValidateOpacity0 = true;
      setTimeout(() => {
        this.isValidate = true;
        this.validateContent = num1 + this.operator[operatorIndex] + num2 + '=?';
        this.isValidateOpacity0 = false;
      }, 500);
    },
    async loginSubmit() {
      document.querySelector('.login-form .base-form-button').style['opacity'] = '0';
      document.querySelector('.login-form .base-form-button').style['visibility'] = 'hidden';
      // 等待图标出现.
      document.querySelector('.login-form .waiting').style['opacity'] = '1';
      document.querySelector('.login-form .waiting').style['visibility'] = 'visible';
      try {
        const res = await login(this.username, this.password);
        if (res.code === 10001) {
          this.$store.commit('setIsLogin', false);
        } else {
          this.$store.commit('setIsLogin', true);
          this.$store.commit('login', this.username);
          this.$store.commit('createWebSocket', this.username);
          const avatarURL = await getAvatar(this.username);
          this.$store.commit('setAvatarURL', avatarURL);
        }
        setTimeout(() => {
          document.querySelector('.login-form .waiting').style['opacity'] = '0';
          document.querySelector('.login-form .waiting').style['visibility'] = 'hidden';
          document.querySelector('.login-form .result-button').style['opacity'] = '1';
          document.querySelector('.login-form .result-button').style['visibility'] = 'visible';
          if(this.$store.state.isLogin) {
            document.querySelector('.login-form .result:nth-child(2)').classList.remove('active-result');
            setTimeout(() => {
              document.querySelector('.login-form .result:nth-child(1)').classList.add('active-result');
              setTimeout(() => {
                this.$router.push('/home');
              }, 1000);
            }, 1000);
          } else {
            document.querySelector('.login-form .result:nth-child(1)').classList.remove('active-result');
            setTimeout(() => {
              ElMessage({
                showClose: true,
                center: true,
                message: 'Invalid username or password.',
                type: 'error',
                duration: 2000
              });
              document.querySelector('.login-form .result:nth-child(2)').classList.add('active-result');
              setTimeout(() => {
                document.querySelector('.login-form .result-button').style['opacity'] = '0';
                document.querySelector('.login-form .result-button').style['visibility'] = 'hidden';
                setTimeout(() => {
                  document.querySelector('.login-form .result:nth-child(2)').classList.remove('active-result');
                  document.querySelector('.login-form .base-form-button').style['opacity'] = '1';
                  document.querySelector('.login-form .base-form-button').style['visibility'] = 'visible';
                }, 1500);
              }, 1000);
            }, 1000);
          }
        }, 1000);
      } catch (err) {
        console.error(err);
      }
    },
    registerSubmit() {
      document.querySelector('.register-form #register-submit').style['opacity'] = '0';
      document.querySelector('.register-form #register-submit').style['visibility'] = 'hidden';
      document.querySelector('.register-form .waiting').style['opacity'] = '1';
      document.querySelector('.register-form .waiting').style['visibility'] = 'visible';
      setTimeout(() => {
        document.querySelector('.register-form .waiting').style['opacity'] = '0';
        document.querySelector('.register-form .waiting').style['visibility'] = 'hidden';
        document.querySelector('.register-form .result-button').style['opacity'] = '1';
        document.querySelector('.register-form .result-button').style['visibility'] = 'visible';
        if(1 + 1 === 3) {
          document.querySelector('.register-form .result:nth-child(2)').classList.remove('active-result');
          setTimeout(() => {
            document.querySelector('.register-form .result:nth-child(1)').classList.add('active-result');
            setTimeout(() => {
              document.querySelector('.register-form .result-button').style['opacity'] = '0';
              document.querySelector('.register-form .result-button').style['visibility'] = 'hidden';
              setTimeout(() => {
                document.querySelector('.signIn-info .tray-button').click();
                document.querySelector('.register-form .result:nth-child(1)').classList.remove('active-result');
                document.querySelector('.register-form #register-submit').style['opacity'] = '1';
                document.querySelector('.register-form #register-submit').style['visibility'] = 'visible';
              }, 1500);
            }, 1000);
          }, 1000);
        } else {
          document.querySelector('.register-form .result:nth-child(1)').classList.remove('active-result');
          setTimeout(() => {
            document.querySelector('.register-form .result:nth-child(2)').classList.add('active-result');
            setTimeout(() => {
              document.querySelector('.register-form .result-button').style['opacity'] = '0';
              document.querySelector('.register-form .result-button').style['visibility'] = 'hidden';
              setTimeout(() => {
                document.querySelector('.register-form .result:nth-child(2)').classList.remove('active-result');
                document.querySelector('.register-form #register-submit').style['opacity'] = '1';
                document.querySelector('.register-form #register-submit').style['visibility'] = 'visible';
              }, 1500);
            }, 1000);
          }, 1000);
        }
      }, 1000);
    }
  }
}
</script>

<style scoped lang="scss">
.base-form {
  width: 30%;
  height: 65%;
  background-color: #D6D5B7;
  border: 5px solid #19CAAD;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  right: 18.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  &.toLeft {
    animation-name: toLeft;
  }

  &.toRight {
    animation-name: toRight;
  }

  .login-form {
    transform: translateX(-50px);
    position: absolute;
    width: 80%;
    height: 80%;
    opacity: 0;
    visibility: hidden;
    transition: transform 1s ease-in-out, opacity .5s, visibility .5s;
    pointer-events: none;
  }

  .register-form {
    transform: translateX(50px);
    position: absolute;
    width: 80%;
    height: 80%;
    opacity: 0;
    visibility: hidden;
    transition: transform 1s ease-in-out, opacity .5s, visibility .5s;
    pointer-events: none;

    .form-content {
      width: 100%;
      height: 60%;
      overflow-y: scroll;
      overflow-x: hidden;
      padding-top: 20px;
      margin-top: 20px;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: #11564b;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #808080;
        border-radius: 5px;
      }

      .form-text {
        width: 85%;
      }

      .validate-form-element {

        .form-text {
          width: 57%;
        }

        .get-validate-btn {
          right: 15px;
        }

      }

      .form-element:last-child {
        margin-bottom: 0;
      }

    }

    .button-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      margin-top: 40px;
      height: 10%;

      .waiting {
        width: 70px;
        height: 70px;
        position: absolute;
        right: 37px;
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s .5s, visibility .5s .5s;
        border: 5px solid #808080;
        border-top-color: #11564b;
        border-radius: 50%;
        animation: spin 1s infinite linear;
        z-index: -2;
      }

      .result-button.result-button { // 提高优先级！
        opacity: 0;
        visibility: hidden;
        z-index: -3;
        transition: opacity .5s 1s, visibility .5s 1s;
        position: absolute;
        right: 0;

        .result {
          position: absolute;
          opacity: 0;
          width: 35px;
          height: 35px;
          stroke: #11564b;
          stroke-width: 5px;
          fill: transparent;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 100px;
          animation-duration: 1.5s;
          animation-fill-mode: forwards;
        }

        .active-result {
          opacity: 1;
          animation-name: paint;
        }

        @keyframes paint {

          0% {
            stroke-dashoffset: 100px;
          }

          100% {
            stroke-dashoffset: 0;
          }

        }

      }

      .base-form-button {
        width: 40%;
        height: 125%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D6D5B7;
        color: #11564b;
        border: 3px solid #11564b;
        border-radius: 10px;
        transition: background-color .5s, color .5s, opacity .5s, visibility .5s;
        cursor: pointer;
        opacity: 1;
        visibility: visible;

        &:nth-child(1) {
          position: absolute;
          left: 0;
        }

        &:nth-child(2) {
          position: absolute;
          right: 0;
        }

        &:hover {
          background-color: #11564b;
          color: #D6D5B7;
        }
      }

    }

  }

  .form-title {
    color: #11564b;
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .form-content {
    margin-top: 40px;

    .form-element {
      position: relative;
      margin-bottom: 40px;

      img {
        position: absolute;
        width: 30px;
        height: 30px;
        bottom: 5px;
        display: inline-block;
      }

      .form-element-label {
        position: absolute;
        color: #808080;
        letter-spacing: 1px;
        transition: color .5s, transform .5s;
        margin-left: 35px;
        top: 5px;
        transform-origin: 0 0; // 设置scale变化的基准点。
        font-weight: bold;
        z-index: -1; // z-index可以用来降低层级来防止触发鼠标事件，例如点击事件。
      }

    }

    .validate-form-element {

      .form-text {
        padding-right: 100px;
        width: 63%;
      }

      .get-validate-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D6D5B7;
        color: #11564b;
        border: 3px solid #11564b;
        border-radius: 10px;
        transition: background-color .5s, color .5s, opacity .5s;
        opacity: 1;
        cursor: pointer;
        position: absolute;
        top: -10px;
        right: 0;
        padding: 5px;

        &.get-validate-btn-opacity0 {
          opacity: 0;
        }

        &:hover {
          background-color: #11564b;
          color: #D6D5B7;
        }

      }

    }

    .button-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      a {
        all: unset;
        letter-spacing: 1px;
        color: #808080;
        cursor: pointer;
        text-decoration: underline;
        transition: color .5s;

        &:hover {
          color: darken(#808080, 30%);
        }

        img {
          position: relative;
          width: 30px;
          height: 30px;
          bottom: -5px;
          display: inline-block;
        }

      }

      .base-form-button {
        width: 40%;
        height: 125%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D6D5B7;
        color: #11564b;
        border: 3px solid #11564b;
        border-radius: 10px;
        transition: background-color .5s, color .5s, opacity .5s, visibility .5s;
        cursor: pointer;
        position: absolute;
        right: 0;
        opacity: 1;
        visibility: visible;

        &:hover {
          background-color: #11564b;
          color: #D6D5B7;
        }
      }

      .waiting {
        width: 70px;
        height: 70px;
        position: absolute;
        right: 37px;
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s .5s, visibility .5s .5s;
        border: 5px solid #808080;
        border-top-color: #11564b;
        border-radius: 50%;
        animation: spin 1s infinite linear;
        z-index: -1;
      }

      .result-button {
        opacity: 0;
        visibility: hidden;
        z-index: -2;
        transition: opacity .5s 1s, visibility .5s 1s;

        .result {
          position: absolute;
          opacity: 0;
          width: 35px;
          height: 35px;
          stroke: #11564b;
          stroke-width: 5px;
          fill: transparent;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 100px;
          animation-duration: 1.5s;
          animation-fill-mode: forwards;
        }

        .active-result {
          opacity: 1;
          animation-name: paint;
        }

        @keyframes paint {

          0% {
            stroke-dashoffset: 100px;
          }

          100% {
            stroke-dashoffset: 0;
          }

        }

      }

      @keyframes spin {

        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }

      }

    }

    .form-text {
      all: unset;
      width: 90%;
      height: 30px;
      cursor: text;
      display: block;
      border-bottom: 2px solid #808080;
      background-color: transparent;
      padding-left: 35px;
      letter-spacing: 2px;
      color: #11564b;
      font-weight: bold;
      transition: border-color .5s;

      &:focus {
        border-color: darken(#808080, 30%);

        & + .form-element-label {
          font-weight: bold;
          color: darken(#808080, 30%);
          transform: translateY(-25px) scale(.9);
        }

      }

      &:valid + .form-element-label {
        font-weight: bold;
        color: darken(#808080, 30%);
        transform: translateY(-25px) scale(.9);
      }

    }

  }

  @keyframes toLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(calc(-110% - 30px));
    }
    100% {
      transform: translateX(-110%);
    }
  }

  @keyframes toRight {
    0% {
      transform: translateX(-110%);
    }
    50% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .active-form {
    pointer-events: auto;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

}
</style>
