<template>
  <div class="page">
    <h2>Login Page</h2>
  </div>
</template>

<script>
export default {
  name: 'Login',
  method:{
    login(){
      this.loading = true
      let userInfo = {
        account:this.loginForm.account,
        password: this.loginForm.password,
        captcha:this.loginForm.captcha
      }
    }
  }
}
</script>

<style lang="scss">

</style>

