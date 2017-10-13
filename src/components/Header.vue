<template>
  <header>
    <div class="back-img" @click="back">
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
header {
  @include border-1px();
  @include topHeader();
  width: 100%;
  height: 44px;
  font-size: 18px;
  color: #323232;
  background-color: #ffffff;
  .text {
    width: 100%;
    line-height: 44px;
    text-align: center;
  }
  .back-img {
    width: 10px;
    height: 17px;
    background-image: url('../common/images/btn_back.png');
    background-size: 100% 100%;
    @include extend-click();
    position: absolute;
    top: 14px;
    left: 15px;
  }
}
</style>

