<template>
  <header>
    <div class="backIcon" @click="back">
      <div class="text">
        <slot></slot>
      </div>
    </div>
    <!--<div class="logo">
        </div>-->
  </header>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.goBack()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './header2.scss'
</style>

