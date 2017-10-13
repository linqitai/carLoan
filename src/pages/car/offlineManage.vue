<template>
  <div class="carEvaluate" style="background-color:#fff">
    <m-header>线下办理</m-header>
    <div class="base">
      <div class="steps_wrapper">
        <div class="steps">
          <div class="steps_icon bgImg3"></div>
          <div class="steps_texts">
            <div class="text active">车辆评估</div>
            <div class="text active">申请借款</div>
            <div class="text active">线下办理</div>
          </div>
        </div>
      </div>
      <div class="border-bg10"></div>
      <section class="contentSuccessWrapper">
        <div class="success"></div>
        <div class="text">您的借款申请已提交，微贷网工作人员线下会联系您，请耐心等待并保持手机畅通！</div>
        <div class="btnWrapper">
          <button class="next_step_btn bg_color_success" ref="next_step_btn" @click="submitApply">完成</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import mHeader from '@/components/Header';

export default {
  name: 'HelloWorld',
  data() {
    return {
      isEvaluate: false,
      active: 0,
      form: {
        name: '',
        identity: '',
        mobile: '',
        platform: ''
      },
      showPlatFormPop: false,
      title: '选择车型',
      pickerColumns: [
        {
          values: ['微贷网'],
          className: 'column1'
        }
      ]
    }
  },
  created() {
  },
  methods: {
    submitApply() {
      // begin
    },
    carTypeEvent() {
      this.showPlatFormPop = true;
      this.showPlatFormPop = true;
    },
    handlePickerCancel() {
      this.showPlatFormPop = false;
    },
    handlePickerConfirm(values) {
      this.showPlatFormPop = false;
      this.form.platform = values[0]
    },
    nextBtnEvent() {
      let self = this
      this.b = true
      setTimeout(function() {
        self.b = false
        console.log(`b:false`)
      }, 3000)
    }
  },
  components: {
    mHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './offlineManage.scss'
</style>
