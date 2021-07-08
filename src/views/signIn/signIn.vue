<template>
  <div>
    <div class="web-logo" @click="toHome">
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
    <div class="main-container">
      <sign-in-tip @register="register" @login="login"></sign-in-tip>
      <sign-in-form :isLoginFormActive="isLoginFormActive"></sign-in-form>
    </div>
  </div>
</template>

<script>
import signInForm from "@/views/signIn/signInForm";
import signInTip from "@/views/signIn/signInTip";
export default {
  name: "signIn",
  components: {
    signInTip,
    signInForm
  },
  data() {
    return {
      isLoginFormActive: true
    };
  },
  methods: {
    register() {
      this.isLoginFormActive = false;
    },
    login() {
      this.isLoginFormActive = true;
    },
    toHome() {
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped lang="scss">
$background: #A0EEE1;

.web-logo {
  top: 4%;
  left: 2%;
  position: absolute;
  display: grid;
  grid-template: 70px 30px / 100px;
  justify-items: center;
  align-items: center;
  background-color: #D6D5B7;
  border: 5px solid #11564b;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color .5s;

  .logo-image {
    fill: #11564b;
    width: 70%;
    height: 70%;
    transition: fill .5s;
  }

  .log-text {
    color: #11564b;
    font-weight: bold;
    font-size: 17px;
    position: relative;
    top: -14px;
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

.main-container {
  width: 100vw;
  height: 100vh;
  background-color: $background;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
