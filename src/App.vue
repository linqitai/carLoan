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
.van-picker__cancel, .van-picker__confirm {
  color: #797979 !important;
  font-size: 15px;
}
.van-picker__title{
  color: #00917e !important;
  font-size: 15px;
  font-weight: 600;
}
.van-picker-column__item--selected{
  color: #00917e !important;
}

</style>
