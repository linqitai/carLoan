<template>
  <div id="app">
    <transition name="component-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 44px;
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity .1s ease;
  }
  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }
}
</style>
