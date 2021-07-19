<template>
  <b-container fluid="md">
    <h1 v-if="posts === null">API endpoint is not available</h1>
    <h1 v-else>Blog</h1>
  </b-container>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch({ $axios }) {
    try {
      this.posts = await $axios.$get('http://localhost:3001/api/me')
      console.log(this.posts)
    } catch (error) {
      if (error.response) {
        console.log(error.response.status)
      } else {
        console.log('API endpoint is not available')
        this.posts = null
      }
    }
  },
}
</script>
