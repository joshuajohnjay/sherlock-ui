<template>
  <div>
    <div class='body'>
      <search-form></search-form>
      <site-list></site-list>
    </div>

  </div>
</template>

<script>
import SearchForm from 'components/SearchForm'
import SiteList from 'components/SiteList'

export default {
  components: {
    SearchForm,
    SiteList
  }
}
</script>
