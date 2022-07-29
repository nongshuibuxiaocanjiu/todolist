export default {
  namespaced: true,
  state: {
    list: [
      { name: '吃饭', done: true, id: 1 },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      { name: '打豆豆', done: false, id: 3 }
    ],
    highlight: 'all'
  },
  getters: {},
  mutations: {
    // 删除单个
    delFn (state, payload) {
      const index = state.list.findIndex((ele) => ele.id === payload)
      state.list.splice(index, 1)
      // state = payload
    },
    // 添加
    addFn (state, payload) {
      state.list.unshift({
        id: state.list.length + 1,
        name: payload,
        done: false
      })
    },
    // 底部切换
    changeFnn (state, payload) {
      state.highlight = payload
    }
  },
  actions: {
    delFn (context, payload) {
      context.commit('delFn', payload)
    },
    addFn (context, payload) {
      context.commit('addFn', payload)
    },
    changeFnn (context, payload) {
      context.commit('changeFnn', payload)
    }
  }
}
