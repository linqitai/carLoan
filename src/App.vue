<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-left' // localStorage.getItem('isBack') ? 'slide-right' :
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    console.log('isBack:' + isBack)
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
