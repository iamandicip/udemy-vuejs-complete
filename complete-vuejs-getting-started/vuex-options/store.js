import { createStore } from 'vuex'
import { testPosts } from '../microblog/testPosts.js'

const delay = () => new Promise(res => setTimeout(res, 1000))

const posts = {
  namespaced: true,

// action -> mutation -> state
  state() {
    return {
      postId: null,
      data: []
    }
  },

  mutations: {
      // don´t do complex or async behaviours in mutations
    setPostId(state, postId) {
      state.postId = postId
    },

    setPosts(state, posts) {
      state.data = posts
    }
  },

  actions: {
    async fetch(ctx) {
      await delay()
      ctx.commit('setPosts', testPosts)
    }
  },

  getters: {
    currentPost(state) {
      return state.data.find(x => {
        return x.id === state.postId
      })
    }
  }
}

export const store = createStore({
  modules: {
    posts // store.state.posts.posts
  }
})