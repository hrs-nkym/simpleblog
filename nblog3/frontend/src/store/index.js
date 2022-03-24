import { createStore } from 'vuex'
import { UPDATE_POSTS } from './mutation-types'

export default createStore({
  strict: true,
  state: {
    posts: {},
  },
  getters: {
    postList(state) {
      return state.posts
    }
  },
  mutations: {
    [UPDATE_POSTS](state, payload) {
      state.posts = payload
    }
  },
  actions: {
    [UPDATE_POSTS]({ commit }, payload) {
      commit(UPDATE_POSTS, payload)
    }
  },
  modules: {
  }
})
