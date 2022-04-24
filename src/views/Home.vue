<template>
  <div class="home">
    <MainView v-if="isLoggedIn" />
    <LoginForm v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainView from '@/views/MainView.vue'
import LoginForm from '@/components/LoginForm.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MainView,
    LoginForm
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters['account/isLoggedIn'];
    }
  }
})
</script>
