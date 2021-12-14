<template>
  <div class="home">
    <ChatWindow v-if="username !== ''" :username="username" />
    <LoginForm v-else @usernameChosen="setUsername" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatWindow from '@/components/ChatWindow.vue'
import LoginForm from '@/components/LoginForm.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ChatWindow,
    LoginForm
  },
  methods: {
    setUsername (username: string) {
      this.username = username;
    }
  },
  data () {
    return {
      username: ""
    };
  }
})
</script>
