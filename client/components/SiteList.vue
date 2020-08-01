
<template>
  <div>
    <div v-if='loading == true'> Loading... </div>
    <div v-for="(value, name) in sites">
      {{name}} : {{value}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'sites', 'loading'
  ])
}
</script>

<style>
</style>