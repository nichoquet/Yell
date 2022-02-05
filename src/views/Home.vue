<template>
  <a @click="createAccount">Create account</a>
  <div class="home">
    <ChatWindow v-if="infos !== null" :infos="infos" />
    <LoginForm v-else @usernameChosen="setUsername" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatWindow from '@/components/ChatWindow.vue'
import LoginForm from '@/components/LoginForm.vue'
import { ChatInfo } from '@/types/ChatInfo';

export default defineComponent({
  name: 'Home',
  components: {
    ChatWindow,
    LoginForm
  },
  methods: {
    setUsername (username: string) {
      this.username = username;
    },
    createAccount () {
      this.$router.push({ name: 'AccountCreationForm' })
    }
  },
  data () {
    return {
      infos: null as ChatInfo | null
    };
  }
})
</script>
