<template>
  <div class="lqt">
    <van-button @click="showImagePreview">预览图片</van-button>
  </div>  
</template>

<script>
// import { Toast } from 'vant';
import { ImagePreview } from 'vant';
export default {
  name: 'hello',
  data() {
    return {
      username: '',
      mobile: '',
      password: '',
      showKeyboard: false
    }
  },
  methods: {
    showImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.lqt {
  .van-field .van-cell__title {
    text-align: left;
  }
}
</style>
