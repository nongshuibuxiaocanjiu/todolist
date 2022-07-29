import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'
import main from './modules/main'
// import todolist from './modules/todolist'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: 'red'
  },
  getters: {
    arr (state) {
      return state.main.list
    }
  },
  mutations: {
    changeFn (state, payload) {
      state.color = payload
      // console.log(payload)
    }
  },
  actions: {
    changeFn (context, payload) {
      return context.commit('changeFn', payload)
    }
  },
  modules: {
    header,
    main
    // todolist
  },

  // 插件配置
  plugins: [
    // 自动本地存储持久化
    createVuexPersisted({
      reducer (state) {
        return {
          // list: state.list
        }
      }
    })
  ]
})
