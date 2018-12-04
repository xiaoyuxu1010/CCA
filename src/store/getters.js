const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  avatar: state => state.user.avatar,
  permission_routers: state => state.permission.routers
}

export default getters
