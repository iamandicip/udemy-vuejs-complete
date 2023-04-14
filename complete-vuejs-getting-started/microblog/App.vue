<template>
  <input type="text" 
    :value="currentTag"
    @input="setHashtag"
  />
  <card 
    v-for="post in filteredPosts"
    :key="post.id"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post"/>
    </template>
  </card>
</template>

<script>
import { store } from './store.js'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'
import { computed } from 'vue'

export default {
  components: {
    Card,
    Controls
  },

  setup() {

    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
    }
  }
}
</script>

<style scoped>
</style>