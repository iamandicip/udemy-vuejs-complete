import { reactive } from 'vue'
import { testPosts } from './testPosts.js'

class Store {
  constructor() {
    this.state = reactive({
      posts : testPosts,
      currentTag: null
    })
  }

  // we store the selected hashtag in here
  // instead of using events that we need to pass through the chain of components
  // we would use emit if we wanted to make the hashtag component reusable
  // otherwise, it is simpler to use this object to store the selected tag
  setHashtag(tag) {
    this.state.currentTag = tag
  }

  incrementLike(post) {
    const thePost = this.state.posts.find(
      p => p.id === post.id
    )

    if(thePost) {
      thePost.likes++
    }
  }

  get filteredPosts() {
    if(!store.state.currentTag) {
      return store.state.posts
    }

    return store.state.posts.filter(post => {
      const lowerCaseTag = store.state.currentTag.toLowerCase(); 
      for(var i = 0; i < post.hashtags.length; i++){
        const tag = post.hashtags[i].toLowerCase()
        if(tag === lowerCaseTag
            || tag.startsWith(lowerCaseTag)){
          return true
        }
      }
    })
  }
}

export const store = new Store()