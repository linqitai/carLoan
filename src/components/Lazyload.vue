<template>
  <div class="imgs">
    <img v-for="(img, index) in imageList" v-lazy="img" :key="index">
  </div>  
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
  name: 'hello',
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.imgs {
  img{
    width: 100%;
  }
}
</style>
