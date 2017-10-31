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
      localStorage.setItem('isBack', true)
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './header.scss'
</style>

