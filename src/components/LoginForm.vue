<template>
    <div>
        <span>Username</span>
        <input type="text" v-model="username" />
        <button @click="submit">Submit</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "LoginForm",
  event: [
    "usernameChosen"
  ],
  methods: {
    submit () {
      if (this.username.length > 0) {
        this.$emit("usernameChosen", this.username);
      }
    }
  },
  data () {
    return {
      username: ""
    }
  }
})
</script>
