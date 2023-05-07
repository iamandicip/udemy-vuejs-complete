<template>
  <h1>New Post</h1>
  <form @submit.prevent="submit">
    <input type="text" 
      v-model="newPost.title"
      placeholder="Title"
    />
    <br/>
    <textarea
      cols="50"
      rows="10"
      v-model="newPost.content"></textarea>
    <br/>  
    <button>Submit</button>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from './usePosts'

export default {
  setup() {
    
    const router = useRouter()

    const postStore = usePosts()

    const newPost = reactive({
      title: '',
      content: ''
    })

    const submit = () => {
      const id = postStore.posts.value.length + 1 

      postStore.addPost({
        title: newPost.title,
        content: newPost.content,
        id
      })

      router.push(`/posts/${id}`)
    }
  
    return {
      newPost,
      submit
    }
  }
}
</script>
<style scoped></style>