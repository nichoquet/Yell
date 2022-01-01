<template>
  <div>
    <label for="email">Email</label>
    <input type="email" v-model="email" name="email">
  </div>
  <div>
    <label for="username">Username</label>
    <input type="text" v-model="username" name="username">
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="text" v-model="pwd" name="pwd">
  </div>
  <button @click="sendNewUser">Create</button>
</template>

<script lang="ts">
export default {
  name: 'AccountCreationForm',
  data() {
    return {
      email: '',
      username: '',
      pwd: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
