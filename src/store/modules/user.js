const user = {
  state: {
    avatar: ''
  },

  mutations: {
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    setUserAvatar: ({ commit }) => {
      commit('SET_AVATAR')
    }
  }
}

export default user
