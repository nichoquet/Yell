<template>
    <div>
        <span>Username</span>
        <input type="text" v-model="username" autocomplete="username" />
        <span>Password</span>
        <input type="password" v-model="password" />
        <button type="button" @click="submit">Submit</button>
        <div>
          <router-link to="/create-account">Create account</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "LoginForm",
  methods: {
    submit () {
      if (this.username.length > 0 && this.password.length > 0) {
        this.$store.dispatch('account/login', { username: this.username, password: this.password }).then(() => {
          location.reload();
        }).catch(() => {
          alert('erreur lord du login')
        })
      }
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
})
</script>
