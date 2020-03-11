<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
export default {
  mounted () {
    // this.$store.dispatch('getAddress') 请求地址信息方式1
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo']) // 请求地址信息方式2 mapActions
  },
  components: {
    FooterGuide
  }

}
</script>

<style lang="stylus" type="text/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5

</style>
<!--<style lang="stylus" type="text/stylus">-->
<!--  .app-->
<!--    color: blue-->
<!--  -->
<!--</style>-->
