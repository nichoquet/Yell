<template>
  <div>
      <div>
          Connecté !
          {{ user }}
      </div>
      <button type="button" @click="logout">Logout</button>
      <div>
          <h2>Groups</h2>
          <ul>
              <li v-for="group in groups" :key="group._id">{{ group }}</li>
          </ul>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Group from '@/types/Group';

export default defineComponent({
  name: 'MainView',
  data () {
    return {
      groups: new Array<Group>(),
      user: {}
    }
  },
  created () {
    this.$store.dispatch('account/fetchLoggedInUser').then(() => {
      this.user = this.$store.getters['account/getLoggedInUser']
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('account/logout').then(() => {
        location.reload();
      })
    }
  }
})
</script>
