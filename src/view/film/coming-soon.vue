<template>
  <div class="film-list">
    <ul>
      <coming-soon-item v-for="(film, index) in comingSoonFilms" :film="film" :key="index"></coming-soon-item>
    </ul>
  </div>
</template>

<style lang="less">

</style>
<script>
import ComingSoonItem from './coming-soon-item'
import { mapGetters } from 'vuex'

export default{
  computed: mapGetters({
    comingSoonFilms: 'getComingSoonFilms'
  }),
  mounted () {
    this.$store.dispatch('fetchComingSoonLists', 1, 10)
  },
  components: {
    ComingSoonItem
  }
}
</script>
