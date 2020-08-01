<template>
  <div class="search-site__form">
    <form @submit.prevent
      @submit="handleSearch()">

      <div class="ui action input">
        <input v-model="username"
          placeholder="Username"
          type="text"
          required />

          <button class="ui icon pink button">
          Search
            <i class="search icon"></i>
          </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: ''
    }
  },
  methods: {
    handleSearch () {
      this.$store.dispatch('FETCH_SITES', this.username)
    }
  }
}
</script>