<template>
    <div>
        <span>Username</span>
        <input type="text" v-model="username" />
        <div>
          <span>Créer une nouvelle discussion</span>
          <input type="checkbox" v-model="createNewDiscussion" />
        </div>
        <div v-if="!createNewDiscussion">
          <span>Discussion Id</span>
          <input type="text" v-model="discussionId" />
        </div>
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
    async submit () {
      if (this.username.length > 0) {
        let discussion;
        if (this.createNewDiscussion) {
          discussion = await (await fetch("http://localhost:3000/textdiscussion", { method: "POST" })).json()
        } else {
          discussion = await (await fetch("http://localhost:3000/textdiscussion/" + this.discussionId)).json()
        }
        this.$emit("usernameChosen", { username: this.username, discussion });
      }
    }
  },
  data () {
    return {
      username: "",
      createNewDiscussion: true,
      discussionId: ""
    }
  }
})
</script>
