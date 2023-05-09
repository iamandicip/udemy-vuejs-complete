export const albums = {
  namespaced: true,

  state() {
    return {
      all: []
    }
  },

  mutations: {
    setAlbums(state, albums) {
      state.all = albums
    }
  },

  actions: {
    async fetch(ctx) {
      const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
      const res = await window.fetch(albumsUrl)
      const json = await res.json()
      ctx.commit('setAlbums', json)
    }
  }
}