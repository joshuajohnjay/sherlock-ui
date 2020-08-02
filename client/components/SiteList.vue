
<template>
  <div class="center">
    <div v-for="(value, name) in sites" :key="name">
        <div class="result" >{{name}} : {{value}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'sites'
  ])
}
</script>

<style>
</style>