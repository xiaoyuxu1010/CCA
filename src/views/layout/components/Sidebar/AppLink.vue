<template>
  <!-- eslint-disable vue/require-component-is-->
  <router-link v-if="!isExternalLink(to)" :to='to'><slot/></router-link>
  <a v-else :href="to" target="_blank" rel="noopener"><slot /></a>
  <!-- <router-link :to="to"><slot/></router-link> -->
</template>

<script>
import { isExternal } from '@/utils'
export default {
  name: 'AppLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isExternalLink (routePath) {
      return isExternal(routePath)
    }
  }
}
</script>
