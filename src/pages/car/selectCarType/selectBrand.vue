<template>
  <div class="selectCarType" ref="selectCarType">
    <!--<m-header>选择品牌</m-header>-->
    <div class="base" ref="base">
      <div class='items' ref="items" v-for='(item, index) in list'>
          <div class="title">{{item[0].initial}}</div>
          <template v-for='(cell, index) in item'>
            <div class='item' @click="toSelectSeries(cell.brandId)">{{cell.brandName}}</div>
          </template>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
//import mHeader from '@/components/Header2';
import { Toast } from 'vant'
import {queryForBrankList} from '../../../api/index' //  queryForSeriesList, queryModelList
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.queryForBrankList()
  },
  methods: {
    toSelectSeries(brandId) {
      this.$router.push('./selectSeries?brandId=' + brandId)
    },
    queryForBrankList() {
      queryForBrankList().then(res => {
        console.log(res)
        if (res.code === 0) {
          this.list = res.list
        } else {
          Toast(res.error)
        }
      })
    }
  },
//components: {
//  mHeader
//}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './selectBrand.scss'
</style>
