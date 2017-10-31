<template>
  <div id="app">
<<<<<<< HEAD
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
=======
      <router-view/>
>>>>>>> 4199c8ad1b4f496aa808c1fc3f476444fc98c102
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
<<<<<<< HEAD
}
.child-view {
  position: absolute;
  width:100%;
  transition: all .2s;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
=======
>>>>>>> 4199c8ad1b4f496aa808c1fc3f476444fc98c102
}
</style>
