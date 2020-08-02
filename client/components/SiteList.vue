
<template>
<div>
  <div class="row" v-for="(value, name) in sites" :key="name">
    <div class="column left" style="background-color:#FFFFFF;">
      <p>{{name}}</p>
    </div>
    <div class="column right" style="background-color:#FFFFFF; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
      <p><a target="_blank" :href="value">{{value}}</a></p>
    </div>
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