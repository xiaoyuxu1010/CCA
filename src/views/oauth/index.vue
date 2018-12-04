<script>
import config from '@/config/oauth'
import { isLoggedIn } from '@/utils/oauth'

const env = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'bts'
const clientId = config.commonIdentity[env].clientId
const authorizeUrl = config.commonIdentity[env].authorizeUrl
const redirectUrl = encodeURIComponent(config.commonIdentity[env].redirectUrl)
const scopes = encodeURIComponent(config.commonIdentity.scopes.join(' '))

export default {
  name: 'OAuth',
  created () {
    console.log('oauth created:')
    _executeOAuthLogin(this.$router, this.$http)
  },
  render (h) {
    return h()
  }
}

function _executeOAuthLogin ($router, $http) {
  if (isLoggedIn()) {
    $router.replace({ name: '' })
    return
  }

  let code = $router.currentRoute.query.code
  console.log('code', code)
  if (!code) {
    console.log('start oauth authorize')

    let loginUrl = `${authorizeUrl}&scope=${scopes}&response_type=code&redirect_uri=${redirectUrl}&client_id=${clientId}`
    window.location.href = loginUrl
  } else {
    console.log('start retrieve access token')
    // $router.push({ name: '' })

    // $http.get('/pcs/healthcheck').then(res => {
    //   console.log(res.data)
    //   $router.replace({ name: '' })
    // }).catch((error) => {
    //   console.error(error.message)
    // })
  }
}
</script>
