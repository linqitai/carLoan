<template>
  <div class="lqt">
    <van-icon name="success" />
    <van-button @touchstart.native.stop="showKeyboard = true">
      弹出键盘
    </van-button>

    <van-button @touchstart.native.stop="showKeyboard = false">
      收起键盘
    </van-button>
    <van-cell-group>
      <van-field label="用户名" placeholder="请输入用户名" v-model="username" icon="clear" @click-icon="username = ''"></van-field>
      <van-field label="手机号码" placeholder="请输入手机号码" @blur="showKeyboard = false" v-model="mobile" icon="clear" @click-icon="mobile = ''"></van-field>
    </van-cell-group>
    <!-- 密码输入框 -->
    <van-password-input :value="password" info="密码为 6 位数字" @focus="showKeyboard = true"></van-password-input>
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" extraKey="清空" />
  </div>
</template>

<script>
// import { Toast } from 'vant';
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
    onInput(key) {
      this.password = (this.password + key).slice(0, 6);
      console.log(this.password)
      if (key === '清空') {
        this.password = '';
      }
      if (this.password.length === 6) {
        this.showKeyboard = false
      }
    },
    onDelete() {
      this.password = this.password.slice(0, this.password.length - 1);
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
