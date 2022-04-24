<template>
  <div>
    <label for="username">Username</label>
    <input type="text" v-model="user.username" name="username">
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" v-model="user.password" name="password">
  </div>
  <div>
    <label for="password_confirmation">Password Confirmation</label>
    <input type="password" v-model="passwordConfirmation" name="password_confirmation">
  </div>
  <button @click="sendNewUser">Create</button>
</template>

<script lang="ts">
export default {
  name: 'AccountCreationForm',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      passwordConfirmation: ''
    }
  },
  methods: {
    sendNewUser () {
      if (this.user.username.length > 4 && this.user.password.length > 4 && this.user.password === this.passwordConfirmation) {
        this.$store.dispatch('account/registerUser', this.user).then(() => {
          this.$router.push('/')
        });
      } else {
        alert('the form is not well filled');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
