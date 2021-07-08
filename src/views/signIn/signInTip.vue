<template>
  <div class="tray">
    <div class="register-info">
      <div class="info-title">Don't have an account?</div>
      <div class="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis odit optio quod sed temporibus?</div>
      <div class="tray-button" @click="register">REGISTER NOW!</div>
    </div>
    <div class="signIn-info">
      <div class="info-title">Have an account?</div>
      <div class="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maiores quae quasi quo voluptates voluptatum!</div>
      <div class="tray-button" @click="signIn">SIGN IN!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signInTip",
  methods: {
    register() {
      this.$emit('register');
    },
    signIn() {
      this.$emit('login');
    }
  }
}
</script>

<style scoped lang="scss">
.tray {
  width: 70%;
  height: 50%;
  background-color: #D6D5B7;
  border: 5px solid #19CAAD;
  border-radius: 10px;
  display: grid;
  grid-template: 1fr / repeat(2 , 1fr);

  .register-info {
    padding: 10%;
    position: relative;
  }

  .signIn-info {
    padding: 10%;
    position: relative;
  }

  .info-title {
    position: relative;
    margin-top: 5%;
    color: #11564b;
    font-size: 35px;
    font-weight: bold;
  }

  .info-text {
    color: #11564b;
    margin-top: 5%;
    padding-left: 2%;
    border-left: 5px solid #11564b;
  }

  .tray-button {
    width: 40%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D6D5B7;
    color: #11564b;
    border: 3px solid #11564b;
    border-radius: 10px;
    transition: background-color .5s, color .5s;
    cursor: pointer;
    position: absolute;
    left: 10%;
    bottom: 15%;

    &:hover {
      background-color: #11564b;
      color: #D6D5B7;
    }

  }

}

</style>
