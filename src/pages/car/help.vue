<template>
  <div class="help">
    <m-header>帮助</m-header>
    <div ref="base" class="base">
      <div class="content">
        <div class="title">臻车贷是什么？</div>
        臻车贷，臻e盾与多家优秀车贷平台合作推出的一款汽车抵押融资产品。聚焦普惠金融，新型线上+线下结合的运营模式，快捷、方便、安全、高效。<br/> 我们为您提供精准、专业、真实的二手车免费评估系统，同时向您推荐值得信赖的车贷合作平台。轻松盘活固定资产，为每一位经营者创造价值，为每一位融资者提供资金帮助。
        <br/><br/>
        <div class="title">臻心实意为你着想</div>
        额度高：可借额度高达车辆估值100%<br/> 不押车：办理抵押手续可开走
        <br/> 还款灵活：1到36期任意选择
        <br/> 费率低：月综合费率低至0.9%
        <br/> 超可靠：与优秀大平台合作，不入征信，更放心！
        <br/><br/>
        <div class="title">常见问题</div>
        1.臻车贷如何申请？<br/> 答：臻e盾-我的车-臻车贷-车辆评估-申请贷款-线下办理
        <br/> 2.办理业务是否在线上？
        <br/> 答：贷款业务在线下办理，平台将致电与您联系，请保持电话通畅。
      </div>
    </div>
  </div>
</template>

<script>
import mHeader from '@/components/Header2';
import BScroll from 'better-scroll';

export default {
  data() {
    return {
      no: '',
      pull: 'pull',
      drop: 'drop',
      loading: 'loading'
    }
  },
  created() {
  },
  methods: {
  },
  components: {
    mHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './help.scss'
</style>
