<template>
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
    setUsername (infos: ChatInfo) {
      this.infos = infos;
    }
  },
  data () {
    return {
      infos: null as ChatInfo | null
    };
  }
})
</script>
