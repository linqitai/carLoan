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
  data() {
    return {
      type: this.$route.query.type,
      shopId: this.$route.query.shopId,
      isLogin: this.$route.query.isLogin,
      customerKey: this.$route.query.customerKey,
      accountTel: this.$route.query.accountTel,
      from: this.$route.query.from
    }
  },
  methods: {
    back() {
      // this.$router.go(-1)
      // window.location.href = `http://fq.51puhui.cn/hk/zyd/dist/#/financing?type=${this.type}&shopId=${this.shopId}&isLogin=${this.isLogin}&customerKey=${this.customerKey}&accountTel=${this.accountTel}`
      if (this.from === 'app') {
        // h5返回安卓或是返回IOS
        let ua = navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(ua)) {
          popToViewController()
        } else if (/android/.test(ua)) {
          htmlToJava.popToViewController()
        }
      } else {
        window.location.href = `http://fq.51puhui.cn/hk/zyd/dist/#/financing?type=${this.type}&shopId=${this.shopId}&isLogin=${this.isLogin}&customerKey=${this.customerKey}&accountTel=${this.accountTel}`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './header.scss'
</style>

