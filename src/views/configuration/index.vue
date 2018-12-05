<template>
  <div>Configuration for SP Partner {{size}}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['size'])
  }
}
</script>
