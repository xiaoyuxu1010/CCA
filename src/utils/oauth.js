export function isLoggedIn () {
  return !!_.get(sessionStorage, 'accessToken')
}
