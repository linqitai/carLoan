<template>
  <header>
    <div class="backIcon" @click="back">
    </div>
    <div class="text">
      <slot></slot>
    </div>
    <div class="helpIcon" @click="toHelpPage">
      <!-- <img src="../common/images/helpIcon.png" width="22" height="22"> -->
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.goBack()
    },
    toHelpPage() {
      this.$router.push('/help')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './header.scss'
</style>

