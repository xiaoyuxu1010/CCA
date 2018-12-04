import { constantRouterMap } from '@/router'

const permission = {
  state: {
    routers: null
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', constantRouterMap)
        resolve()
      })
    }
  }
}

export default permission
