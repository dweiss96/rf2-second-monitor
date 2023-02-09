import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

export default ({ store }, _) => {
  Vue.use(VueNativeSock, 'ws://localhost:5397/websocket/ui', {
    store,
    format: 'json',
  })
}
