<template>
  <button 
    v-for="post in posts"
    :key="post.id"
    @click="click(post)">
    {{post.title}}
  </button>
  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <h4>{{ currentPost.content }}</h4>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  setup() {

    const click = (post) => {
      store.commit('posts/setPostId', post.id)
    }

    const fetchData = () => {
      store.dispatch('posts/fetch')
    }

    onMounted(() => {
      fetchData()
    })

    const store = useStore()

    return {
      postId: computed(() => store.state.posts.postId),
      posts: computed(() => store.state.posts.data),
      click,
      currentPost: computed(() => store.getters['posts/currentPost'])
    }
  }
}
</script>

<style scoped></style>