<template>
  <div class="hello">
    123123123123
    <van-button type="default">Default</van-button>
    <van-button type="primary">Primary</van-button>
    <van-button type="danger">Danger</van-button>
    <van-button size="large">Large</van-button>
    <van-button size="normal">Normal</van-button>
    <van-button size="small">Small</van-button>
    <van-button size="mini">Mini</van-button>

    <van-button loading></van-button>
    <van-button :loading="b" type="primary" ref="nextBtn" @click="nextBtnEvent" class="btnWidth">下一步</van-button>

    <van-button type="primary" bottom-action>立即购买</van-button>

    <van-row>
      <van-col span="12">
        <van-button bottom-action>加入购物车</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary" bottom-action>立即购买</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      b: false
    }
  },
  created() {
    console.log(this.$refs.nextBtn)
    // this.$refs.nextBtn.removeAttribute('loading')
  },
  methods: {
    nextBtnEvent() {
      let self = this
      this.b = true
      setTimeout(function() {
        self.b = false
        console.log(`b:false`)
      }, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$main-width: 100px;
.btnWidth {
  width: $main-width;
}
</style>
