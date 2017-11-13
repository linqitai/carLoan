<template>
  <div class="selectCarType" ref="selectCarType">
    <m-header>选择车系</m-header>
    <div class="base" ref="base">
      <div class="searchBox" v-if="isShowSearchBox">
        <template v-for="(item, index) in seriesGroupNames">
          <span @click="queryCarSeries(item, index)" :class="{'current':type===index}">{{item}}</span>
        </template>
      </div>
      <div class='items' ref="items" v-for='(item, index) in seriesList'>
          <div class='item' @click="toSelectCarType(item.seriesId)">{{item.seriesName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mHeader from '@/components/Header2';
import { Toast } from 'mint-ui'
import {queryForSeriesList} from '../../../api/index' //  queryForSeriesList, queryModelList
export default {
  data() {
    return {
      seriesList: [],
      brandId: this.$route.query.brandId,
      seriesGroupNames: '',
      isShowSearchBox: false,
      type: 0
    }
  },
  created() {
    this.queryForSeriesListByBrandId(this.brandId)
  },
  methods: {
    queryCarSeries(item, index) {
      this.type = index
      // e.target.class
      if (item === '全部') {
        this.queryForSeriesListByName('', this.brandId)
      } else {
        this.queryForSeriesListByName(item, this.brandId)
      }
    },
    toSelectCarType(seriesId) {
      this.$router.push('./selectCarType?seriesId=' + seriesId)
    },
    // 根据名称获取车系列表
    queryForSeriesListByName(item, brandId) {
      let params = {
        brankId: brandId,
        seriesGroupName: item
      }
      queryForSeriesList(params).then(res => {
        let self = this
        if (res.code === 0) {
          this.seriesList = res.list
        } else {
          Toast(res.error)
        }
      })
    },
    // 获取车系列表
    queryForSeriesListByBrandId(brandId) {
      let params = {
        brankId: brandId
      }
      queryForSeriesList(params).then(res => {
        let self = this
        if (res.code === 0) {
          let name = res.obj.split(',')
          console.log(name)
          this.$nextTick(() => {
            self.seriesGroupNames = name
            console.log(self.seriesGroupNames.length)
          })
          this.seriesList = res.list
          this.isShowSearchBox = true
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
@import './selectSeries.scss'
</style>
