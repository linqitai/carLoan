<template>
  <div class="carEvaluate">
    <m-header>臻车贷</m-header>
    <div class="steps_wrapper">
      <div class="steps">
        <div class="steps_icon bgImg2"></div>
        <div class="steps_texts">
          <div class="text active">车辆评估</div>
          <div class="text active">申请借款</div>
          <div class="text">线下办理</div>
        </div>
      </div>
    </div>
    <section class="contentWrapper">
      <div class="myCellWrapper border-1px">
        <div class="title">姓名</div>
        <div class="value">
          <input type="text" v-model="form.name" placeholder="请输入姓名">
        </div>
        <div class="clear" @click="form.name=''" v-show="form.name">
          <van-icon name="clear" />
        </div>
      </div>
      <div class="myCellWrapper border-1px">
        <div class="title">身份证号</div>
        <div class="value">
          <input type="text" v-model="form.identity" placeholder="请输入身份证号" maxlength="18">
        </div>
        <div class="clear" @click="form.identity=''" v-show="form.identity">
          <van-icon name="clear" />
        </div>
      </div>
      <div class="myCellWrapper border-1px">
        <div class="title">联系方式</div>
        <div class="value">
          <input type="tel" v-model="form.mobile" placeholder="请输入联系方式" maxlength="11">
        </div>
        <div class="clear" @click="form.mobile=''" v-show="form.mobile">
          <van-icon name="clear" />
        </div>
      </div>
      <div class="myCellWrapper border-1px" @click="carTypeEvent">
        <div class="title">平台选择</div>
        <div class="value">
          <input type="text" v-model="form.platform" placeholder="未选择" readonly>
        </div>
        <div class="clear">
          <van-icon name="arrow" />
        </div>
      </div>
      <van-popup v-model="showPlatFormPop" position="bottom" class="van-popup-2">
        <van-picker v-model="form.platform" :title="titlePlatForm" :columns="pickerColumns" show-toolbar @cancel="handlePickerCancel" @confirm="handlePickerConfirm"></van-picker>
        </van-datetime-picker>
      </van-popup>
    </section>
    <section class="btnBox">
      <div class="btnWrapper">
        <button class="next_step_btn bg_color_green" ref="next_step_btn" @click="submitApplyBtn">提交申请</button>
      </div>
    </section>
    <section class="cooperationPlatWrapper">
      <div class="title">合作平台</div>
      <div class="content">
        <div class="box flex1">
          <div class="img"></div>
        </div>
        <div class="box flex2">
          <div class="left">1.国资企业强势入股</div>
          <div class="left">2.行业内权威企业</div>
          <div class="left">3.全国数百家店，标的真实可靠</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mHeader from '@/components/Header';
import { Indicator, Toast } from 'mint-ui'
import { submitApply } from '../../api/index'
import { checkPhone, isObjectHaveNull } from '../../common/js/utils'
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
        platform: '微贷网',
        platformId: ''
      },
      showPlatFormPop: false,
      title: '选择车型',
      titlePlatForm: '平台选择',
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
      let params = {
        name: this.form.name,
        mobile: this.form.mobile,
        carNum: this.form.identity,
        pushPlatformType: '',
        carCreditId: localStorage.getItem('carCreditId'),
        city: localStorage.getItem('city')
      }
      console.log(localStorage.getItem('city'))
      if (this.form.platform === '微贷网') {
        params.pushPlatformType = 1
      }
      if (isObjectHaveNull(params)) {
        Toast('所填资料不完整')
      } else {
        Indicator.open()
        if (checkPhone(this.form.mobile)) {
          submitApply(params).then(res => {
            console.log(params)
            console.log(res)
            if (res.code === 0) {
              this.$router.push('/offlineManage')
            } else if (res.code === -1) {
              Toast(res.error)
            }
            Indicator.close()
          })
        } else {
          Toast('不存在此手机号码')
        }
      }
    },
    submitApplyBtn() {
      this.submitApply()
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
@import './carEvaluate.scss'
</style>
