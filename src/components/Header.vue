<template>
  <header>
    <div class="back-img" @click="back">
    </div>
    <div class="text">
      <slot></slot>
    </div>
    <div class="logo" @click="toHelpPage">
      <mu-icon value="help_outline" :size="22" color="#efeff4"/>
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

