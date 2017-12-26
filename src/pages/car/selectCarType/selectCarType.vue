<template>
  <div class="selectCarType" ref="selectCarType">
    <m-header>选择车型</m-header>
    <div class="base" ref="base">
      <div class='items' ref="items" v-for='(item, index) in carTypeList'>
          <div class="title">{{item[0].modelYear}}</div>
          <template v-for='(cell, index) in item'>
            <div class='item' @click="toCarEvaluatePage(cell.modelName, cell.modelId, cell.modelYear, cell.maxRegYear)">
              <div class="name mt10">{{cell.modelName}}</div>
              <div class="line2">指导价：{{cell.modelPrice}}, 排量：{{cell.liter}}</div>
            </div>
          </template>
      </div>
    </div>
  </div>
</template>

<script>
import mHeader from '@/components/Header2';
import { Toast } from 'vant'
import {queryModelList} from '../../../api/index' //  queryForSeriesList, queryModelList
export default {
  data() {
    return {
      carTypeList: [],
      seriesId: this.$route.query.seriesId
      // carType: ''
    }
  },
  created() {
    this.queryModelList(this.seriesId)
  },
  methods: {
    toCarEvaluatePage(modelName, modelId, minRegYear, maxRegYear) {
      console.log(`minRegYear:${minRegYear}`)
      // 设置缓存
      localStorage.setItem('modelName', modelName)
      localStorage.setItem('modelId', modelId)
      localStorage.setItem('minRegYear', minRegYear)
      localStorage.setItem('maxRegYear', maxRegYear)
      // 设置是否已经更改车型的标识
      // localStorage.setItem('isChangeCarType', true)
      // 获取缓存
      let customerKey = localStorage.getItem('customerKey')
      let accountTel = localStorage.getItem('accountTel')
      let type = localStorage.getItem('type')
      let shopId = localStorage.getItem('shopId')
      let isLogin = localStorage.getItem('isLogin')
      let from = localStorage.getItem('from')
      // 清空缓存
      localStorage.setItem('time', '')
      localStorage.setItem('provinceCity', '')
      localStorage.setItem('mileage', '')
      this.$router.push(`./carEvaluate?customerKey=${customerKey}&accountTel=${accountTel}&type=${type}&shopId=${shopId}&isLogin=${isLogin}&from=${from}&isSelectCarType=1`)
    },
    queryModelList(seriesId) {
      let params = {
        seriesId: seriesId
      }
      queryModelList(params).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.carTypeList = res.list
        } else {
          Toast(res.error)
        }
      })
    }
  },
  components: {
    mHeader
  }
}
</script>

<style scoped lang="scss">
@import './selectCarType.scss'
</style>
