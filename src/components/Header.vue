<template>
  <header>
    <div class="back-img" @click="back">
    </div>
    <div class="text">
      <slot></slot>
    </div>
    <div class="logo">
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    back() {
<<<<<<< HEAD
      localStorage.setItem('isBack', true)
      this.$router.back()
=======
      this.$router.goBack()
>>>>>>> 4199c8ad1b4f496aa808c1fc3f476444fc98c102
    }
  }
}
</script>
<style lang="scss" scoped>
@import './header.scss'
</style>

