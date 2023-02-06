import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      session: {},
      drivers: []
    }
  },
  mutations: {
    setSession (state) {
      state.count++
    }
  }
})