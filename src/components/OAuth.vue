<template>
  <div></div>
</template>

// TODO: need update OAuth.vue to OAuth.js, because there is no any template for this component in fact

<script>
import config from '@/config/oauth'

const env = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'bts'
const clientId = config.commonIdentity[env].clientId
const authorizeUrl = config.commonIdentity[env].authorizeUrl
const redirectUrl = encodeURIComponent(config.commonIdentity[env].redirectUrl)
const scopes = encodeURIComponent(config.commonIdentity.scopes.join(' '))

export default {
  name: 'OAuth',
  created () {
    console.log('oauth created:')
    _executeOAuthLogin(this.$route.query.code, this.$http)
  },
  mounted () {
    console.log('oauth mounted:')
  }
}

function _executeOAuthLogin (code, $http) {
  if (!code) {
    console.log('start oauth authorize')

    let loginUrl = `${authorizeUrl}&scope=${scopes}&response_type=code&redirect_uri=${redirectUrl}&client_id=${clientId}`
    window.location.href = loginUrl
  } else {
    console.log('start retrieve access token')

    $http.get('/pcs/accesstoken').then(res => {
      console.log(res.data)
    }).catch((error) => {
      console.error(error.message)
    })
  }
}
</script>
