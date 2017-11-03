<template>
  <div class='carEvaluate' id="carEvaluate">
    <!--<m-header>臻车贷</m-header>-->
    <header>
      <div class="back-img" @click="back">
      </div>
      <div class="text">
        臻车贷
      </div>
      <!--<div class="logo">
      </div>-->
    </header>
    <div class="base" id="base">
      <div class='steps_wrapper'>
        <div class='steps'>
          <div class='steps_icon bgImg1'></div>
          <div class='steps_texts'>
            <div class='text active'>车辆评估</div>
            <div class='text'>申请借款</div>
            <div class='text'>线下办理</div>
          </div>
        </div>
      </div>
      <section class='contentWrapper' id="contentWrapper">
        <div class='myCellWrapper border-1px' @click='carTypeEvent'>
          <div class='title'>选择车型</div>
          <div class='value'>
            <input type='text' v-model='form.carType' placeholder='未选择' readonly>
          </div>
          <div class='clear'>
            <van-icon name='arrow' />
          </div>
        </div>
        <div class='myCellWrapper border-1px' @click='timeEvent'>
          <div class='title'>上牌时间</div>
          <div class='value'>
            <input type='text' v-model='form.time' placeholder='未选择' readonly>
          </div>
          <div class='clear'>
            <van-icon name='arrow' />
          </div>
        </div>
        <!-- 上牌时间Popup -->
        <van-popup v-model='showTimePopup' position='bottom' class='van-popup-2'>
          <!--<div class="page-picker-wrapper" style="margin-bottom:2rem;">
            <span style="float:left;font-size:1rem;padding:0.7rem 1rem" @click='showTimePopup = false'>取消</span>
            <span style="float:right;font-size:1rem;padding:0.7rem 1rem;color:#5aa8f0" @click='timeHandlePickerConfirm()'>确定</span>
          </div>
          <mt-picker :slots="slotsDate" @change="timeChange"></mt-picker>-->
          <van-picker title="选择时间" :columns="timePickerColumns" show-toolbar @change="handleTimePickerChange" @cancel="handleTimePickerCancel" @confirm="timeHandlePickerConfirm"></van-picker>
          </van-datetime-picker>
        </van-popup>
        <div class='myCellWrapper border-1px' @click='cityEvent'>
          <div class='title'>所在城市</div>
          <div class='value'>
            <input type='text' v-model='form.city' placeholder='未选择' readonly>
          </div>
          <div class='clear'>
            <van-icon name='arrow' />
          </div>
        </div>
        <!-- 所在城市Popup -->
        <van-popup v-model='showCityPopup' position='bottom' class='van-popup-2'>
          <van-picker :title="titleCity" :columns="cityPickerColumns" show-toolbar @change="handleCityPickerChange" @cancel="handleCityPickerCancel" @confirm="handleCityPickerConfirm"></van-picker>
          </van-datetime-picker>
        </van-popup>
        <div class='myCellWrapper border-1px'>
          <div class='titleMore'>行驶里程</div>
          <div class='value'>
            <input type='number' v-model='form.mileage' placeholder='请输入行驶里程' @blur="mileageBlur(form.mileage)">
          </div>
          <div class='clear' @click="form.mileage=''" v-show='form.mileage'>
            <van-icon name='clear' />
          </div>
          <div class="unit">公里</div>
        </div>
      </section>
      <section class="btnBox">
        <!-- 开始评估按钮 -->
        <div class='btnWrapper' v-show='!isEvaluate'>
          <div class='next_step_btn bg_color_green mt10' @click='beginEvaluateEvent'>评估</div>
        </div>
        <div class='btnWrapper' v-show='isEvaluate'>
          <div>车辆评估价：
            <span class='amount'>{{highPrice}}万</span>
          </div>
          <button class='next_step_btn bg_color_green mt24' ref='next_step_btn' @click='applyBtn'>借款</button>
        </div>
      </section>
      <section class='advantageWrapper'>
        <!--<div class='title' v-if="showAdvantage">臻车贷优势</div> -->
        <div class='content'>
          <div class='box'>
            <div class='img img1'></div>
            <div class='mtb18 fs14'>费率低</div>
            <div class="fontSize" v-if="showAdvantage">月费率9厘起</div>
          </div>
          <div class='box'>
            <div class='img img2'></div>
            <div class='mtb18 fs14'>放款快</div>
            <div class="fontSize" v-if="showAdvantage">最快当天可放款</div>
          </div>
          <div class='box'>
            <div class='img img3'></div>
            <div class='mtb18 fs14'>额度高</div>
            <div class="fontSize" v-if="showAdvantage">最高估值100%</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import qs from 'qs'
import BScroll from 'better-scroll'
import mHeader from '@/components/HeaderBackAPP'
import { Indicator, Toast } from 'mint-ui'
import { queryForBrankList, queryForSeriesList, queryModelList, queryCitylList, queryCarPrice, visit, editApplyStatus, dataCache } from '../../api/index'
const citys = {
  province: ['安徽', '澳门', '北京', '重庆', '福建', '广东', '甘肃', '广西', '贵州', '湖北', '湖南', '河北', '河南', '海南', '黑龙江', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '四川', '山东', '上海', '山西', '陕西', '天津', '台湾', '香港', '新疆', '西藏', '云南', '浙江']
};
// console.log('citys:' + citys.province.length);
const addressList = {
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山',
    '潮州', '揭阳', '云浮'
  ],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江',
    '神农架林区'
  ],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳',
    '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'
  ],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州',
    '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'
  ],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县',
    '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'
  ],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州',
    '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'
  ],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县',
    '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市'
  ]
};
// console.log('addressList:' + addressList.length)
var years = ['2014', '2015', '2016', '2017']
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
export default {
  data() {
    return {
      showAdvantage: true,
      sYears: years,
      timeSlots: [
      ],
      currentDate: [years[0], '01'],
      currentYear: years[0],
      currentMonth: months[0],
      slotsDate: [
        {
          flex: 1,
          values: ['2017'],
          className: 'slot1',
          textAlign: 'left'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: months,
          defaultIndex: 2,
          className: 'slot3',
          textAlign: 'right'
        }],
      timePickerColumns: [
        {
          values: ['2017'],
          className: 'column1',
          defaultIndex: 0
        },
        {
          values: months,
          className: 'column2',
          defaultIndex: 2
        }
      ],
      titleCity: '地区选择',
      cityPickerColumns: [
        {
          values: citys.province,
          className: 'column1',
          defaultIndex: 2
        },
        {
          values: ['北京'],
          className: 'column2'
        }
      ],
      list: [],
      seriesList: [],
      modelList: [],
      isEvaluate: false,
      active: 0,
      b: false,
      minRegYear: '',
      maxRegYear: '',
      minDate: new Date(),
      maxDate: new Date(),
      form: {
        carType: '',
        modelId: '',
        time: '',
        city: '',
        mileage: ''
      },
      province: '',
      city: '',
      showCarTypePop: false, // 是否显示选择品牌
      showSeriesListPop: false, // 是否显示选择系列
      showModelListPop: false, // 是否显示选择车型
      showTimePopup: false,
      showCityPopup: false,
      title: '选择车型',
      currentCityNames: '',
      currentCityName: '',
      currentCityId: '',
      highPrice: '',
      carCreditId: localStorage.getItem('carCreditId') ? localStorage.getItem('carCreditId') : '',
      customerKey: parseInt(this.$route.query.customerKey),
      accountTel: parseInt(this.$route.query.accountTel),
      from: this.$route.query.from
    }
  },
  created() {
    console.log('===carEvaluatePage===')
    console.log('customerKey:' + this.customerKey)
    console.log('accountTel:' + this.accountTel)
    let hash = sessionStorage.getItem('hash2')
    console.log('hash1:' + hash)
    if (hash === null || hash === '') {
      // 用户进入页面后获取上次所填写的数据
      console.log('visit:customerKey-' + this.customerKey + ',accountTel-' + this.accountTel)
      this.visit()
      sessionStorage.setItem('hash2', 1)
    }
    if (this.$route.query.isSelectCarType) {
      // this.ssdataCache()
    }
    // 判断当前用户的 customerKey 是否与上次进入这个页面的 customerKey 一样 是？获取上次本地存储的记录:从接口获取
    if (localStorage.getItem('customerKey')) {
      if (this.$route.query.customerKey === localStorage.getItem('customerKey')) {
        this.form.time = localStorage.getItem('time') ? localStorage.getItem('time') : ''
        this.form.city = localStorage.getItem('provinceCity') ? localStorage.getItem('provinceCity') : ''
        this.province = (this.form.city).split(',')[0]
        this.city = (this.form.city).split(',')[1]
        this.currentCityId = localStorage.getItem('currentCityId') ? localStorage.getItem('currentCityId') : ''
        this.form.mileage = localStorage.getItem('mileage') ? localStorage.getItem('mileage') : ''
        console.log(`modelName:${localStorage.getItem('modelName')}`)
        if (localStorage.getItem('modelName')) {
          let modelName = localStorage.getItem('modelName')
          let modelId = localStorage.getItem('modelId')
          let minRegYear = localStorage.getItem('minRegYear')
          let maxRegYear = localStorage.getItem('maxRegYear')
          console.log(`minRegYear:${minRegYear}`)
          this.chooseModel(modelName, modelId, minRegYear, maxRegYear)
        }
      } else {
        localStorage.setItem('customerKey', this.customerKey)
        console.log('setItem(customerKey):' + this.customerKey)
        localStorage.setItem('accountTel', this.accountTel)
        localStorage.setItem('type', this.$route.query.type)
        localStorage.setItem('shopId', this.$route.query.shopId)
        localStorage.setItem('isLogin', this.$route.query.isLogin)
        localStorage.setItem('from', this.$route.query.from)
        //  这里请求用户上次评估车辆所填写的数据
      }
    } else {
      localStorage.setItem('customerKey', this.customerKey)
      console.log('setItem(customerKey):' + this.customerKey)
      localStorage.setItem('accountTel', this.accountTel)
      localStorage.setItem('type', this.$route.query.type)
      localStorage.setItem('shopId', this.$route.query.shopId)
      localStorage.setItem('isLogin', this.$route.query.isLogin)
      localStorage.setItem('from', this.$route.query.from)
    }
    // this.$nextTick(() => {
    //   this._initScroll()
    // })
  },
  methods: {
    _initScroll() {
      this.baseScroll = new BScroll(document.getElementById('base'), {
        click: true
      })
    },
    back() {
      if (this.$route.query.isSelectCarType) {
        this.ssdataCache()
      }
      // this.$router.go(-1)
      // window.location.href = `http://fq.51puhui.cn/hk/zyd/dist/#/financing?type=${this.type}&shopId=${this.shopId}&isLogin=${this.isLogin}&customerKey=${this.customerKey}&accountTel=${this.accountTel}`
      if (this.from === 'app') {
        // h5返回安卓或是返回IOS
        let ua = navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(ua)) {
          popToViewController()
        } else if (/android/.test(ua)) {
          htmlToJava.popToViewController()
        }
      } else {
        window.location.href = `http://fq.51puhui.cn/hk/zyd/dist/#/financing?type=${this.$route.query.type}&shopId=${this.$route.query.shopId}&isLogin=${this.$route.query.isLogin}&customerKey=${this.$route.query.customerKey}&accountTel=${this.$route.query.accountTel}`
      }
    },
    dataCache(params) {
      dataCache(params).then(res => {
        if (res.code === 0) {
          console.log('cache成功')
        } else {
          console.log('cache失败')
        }
      })
    },
    mileageBlur(mileage) {
      localStorage.setItem('mileage', mileage)
      // this.ssdataCache()
    },
    visit() {
      let params = {
        zedAccount: this.accountTel,
        customerKey: this.customerKey
      }
      visit(params).then(res => {
        // form: {
        //   carType: '',
        //   modelId: '',
        //   time: '',
        //   city: '',
        //   mileage: ''
        // },
        console.log(res)
        if (res.code === 0) {
          this.carCreditId = res.obj.carCreditId
          localStorage.setItem('carCreditId', this.carCreditId)
          let zone = res.obj.zone
          this.form.time = res.obj.regDate
          this.form.mileage = res.obj.mile
          this.form.modelId = res.obj.modelId
          let params = {
            cityId: zone
          }
          this.queryCity(params)
          let params2 = {
            modelId: this.form.modelId
          }
          this.queryMode(params2)
        }
      })
    },
    queryMode(params) {
      queryModelList(params).then(res => {
        console.log(res)
        if (res.code === 0) {
          let list = res.list
          this.form.carType = list[0][0].modelName
        } else {
          Toast(res.error)
        }
      })
    },
    timeChange(picker, values) {
      let selectedDate = picker.getValues()
      this.currentDate = selectedDate[0] + '-' + selectedDate[1]
      // console.log(this.currentDate)
    },
    editApplyStatus() {
      let params = {
        carPriceId: this.carCreditId
      }
      editApplyStatus(params).then(res => {
        console.log(res)
      })
    },
    applyBtnTest() {
      this.$router.push('/applyBM')
    },
    applyBtn() {
      let params = {
        carCreditId: this.carCreditId
      }
      editApplyStatus(params).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.$router.push('/applyBM')
        }
      })
    },
    // 获取城市列表
    queryCitylList(params) {
      queryCitylList(params).then(res => {
        this.currentCityNames = res.list
        console.log(this.currentCityNames)
        console.log('len:' + this.currentCityNames.length)
        for (let i = 0; i < this.currentCityNames.length; i++) {
          if (this.currentCityNames[i].cityName === this.currentCityName) {
            this.currentCityId = this.currentCityNames[i].cityId
            console.log('this.currentCityId:' + this.currentCityId)
            localStorage.setItem('currentCityId', this.currentCityId)
          }
        }
      })
    },
    // 获取城市
    queryCity(params) {
      queryCitylList(params).then(res => {
        let list = res.list
        this.form.city = list[0].provName + ',' + list[0].cityName
        this.province = list[0].provName
        this.city = list[0].cityName
        console.log(`this.form.city:` + this.form.city)
      })
    },
    handleTimePickerChange(picker, values) {
      picker.setColumnValues(1, months);
    },
    handleTimePickerCancel() {
      this.showTimePopup = false
    },
    handleTimePickerConfirm(value) {
      console.log('time:' + value)
      localStorage.setItem('time', value)
      this.form.time = value
    },
    handleCityPickerChange(picker, values) {
      picker.setColumnValues(1, addressList[values[0]]);
    },
    handleCityPickerCancel() {
      this.showCityPopup = false
    },
    handleCityPickerConfirm(value) {
      this.showCityPopup = false
      this.form.city = value
      localStorage.setItem('provinceCity', value)
      this.province = value[0]
      this.city = value[1]
      this.currentCityName = value[1]
      localStorage.setItem('city', this.currentCityName)
      let params = {
        provName: this.province
      }
      this.queryCitylList(params)
      // this.ssdataCache()
    },
    closeSelectBrand() {
      // this.showCarTypePop = true
      this.showCarTypePop = false
    },
    closeSelectSeries() {
      // this.showCarTypePop = true
      this.showSeriesListPop = false
    },
    closeSelectModel() {
      // this.showCarTypePop = true
      this.showModelListPop = false
    },
    chooseBrand(brandId) {
      console.log(brandId)
      // 获取车系列表
      this.queryForSeriesList(brandId)
    },
    chooseSeries(seriesId) {
      console.log(seriesId)
      // 获取车型列表
      this.queryModelList(seriesId)
    },
    chooseModel(modelName, modelId, minRegYear, maxRegYear) {
      // console.log(modelName + ':' + modelId)
      this.form.carType = modelName
      this.form.modelId = modelId
      this.minRegYear = minRegYear
      this.maxRegYear = maxRegYear
      let ayears = []
      for (let i = this.minRegYear; i <= this.maxRegYear; i++) {
        ayears.push(String(i))
      }
      years = ayears
      // console.log('years:' + years)
      this.timePickerColumns[0].values = years
      this.timePickerColumns[1].values = months
      this.currentYear = years[0]
      this.currentMonth = months[0]
      this.showModelListPop = false
      this.showSeriesListPop = false
      this.showCarTypePop = false
      // this.queryModelList(seriesId)
    },
    queryForBrankList() {
      queryForBrankList().then(res => {
        // console.log(res)
        this.list = res.list
      })
    },
    queryForSeriesList(brandId) {
      let params = {
        brankId: brandId
      }
      queryForSeriesList(params).then(res => {
        // console.log(res)
        this.showSeriesListPop = true
        this.seriesList = res.list
        // console.log(res.list[0])
      })
    },
    // 获取车型列表
    queryModelList(seriesId) {
      let params = {
        seriesId: seriesId
      }
      queryModelList(params).then(res => {
        // console.log(res)
        this.showModelListPop = true
        this.modelList = res.list
      })
    },
    queryCarPrice() {
      // console.log('this.from.city11:' + this.city)
      let inputs = document.getElementsByTagName('input')
      let params = {
        carCreditId: this.carCreditId ? this.carCreditId : 1,
        modelId: this.form.modelId, // 车型ID
        regDate: this.form.time, // 待估车辆的上牌时间（格式：yyyy-MM）如2012-3
        mile: this.form.mileage, // 待估车辆的公里数，单位万公里
        zone: this.currentCityId, // 城市ID
        customerKey: this.customerKey, // 臻E盾用户ID
        zedAccount: this.accountTel,
        province: this.province,
        city: this.city
      }
      if (params.modelId === '' || params.modelId === null) {
        Toast('请填选择车型')
        // this.carTypeEvent()
        // inputs[0].focus()
        return
      }
      if (params.regDate === '' || params.regDate === null) {
        Toast('请填选择上牌时间')
        return
      }
      if (params.city === '' || params.city === null) {
        Toast('请填选择所在城市')
        return
      }
      if (params.mile === '' || params.mile === null) {
        Toast('请填写行驶里程')
        inputs[3].focus()
        return
      }
      if (params.mile > 1000000) {
        Toast('行驶里程不能大于100万公里')
        return
      }
      if (params.mile < 1) {
        Toast('行驶里程不能小于1公里')
        return
      }
      Indicator.open('评估中')
      queryCarPrice(params).then(res => {
        if (res.code === 0) {
          this.highPrice = res.obj.highPrice
          this.showAdvantage = false
          this.isEvaluate = true
          // 存储用户填写信息
          this.dataCache(params)
        } else if (res.code === -1) {
          Toast(res.error)
        }
        Indicator.close()
      })
      Indicator.close()
      // setTimeout(function () {
      //   Indicator.close()
      // }, 3000)
    },
    ssdataCache() {
      let params = {
        carCreditId: this.carCreditId ? this.carCreditId : 1,
        modelId: localStorage.getItem('modelId'), // 车型ID
        regDate: this.form.time, // 待估车辆的上牌时间（格式：yyyy-MM）如2012-3
        mile: this.form.mileage, // 待估车辆的公里数，单位万公里
        zone: this.currentCityId, // 城市ID
        customerKey: this.customerKey, // 臻E盾用户ID
        zedAccount: this.accountTel,
        province: this.province,
        city: this.form.city
      }
      this.dataCache(params)
    },
    beginEvaluateEvent() {
      // begin
      // 在这里调用车辆评估接口
      this.queryCarPrice()
    },
    carTypeEvent() {
      // this.showCarTypePop = true;
      this.$router.push(`./selectBrand`)
    },
    handlePickerCancel() {
      this.showCarTypePop = false;
    },
    handlePickerConfirm(values) {
      this.showCarTypePop = false;
      this.form.carType = values[0]
    },
    timeEvent() {
      if (this.form.carType) {
        this.showTimePopup = true;
      } else {
        Toast('请先选择车型')
      }
    },
    timeHandlePickerConfirm(value) {
      this.showTimePopup = false;
      this.form.time = value[0] + '-' + value[1];
      localStorage.setItem('time', this.form.time)
      // this.ssdataCache()
    },
    cityEvent() {
      this.showCityPopup = true;
    }
  },
  components: {
    mHeader
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import './carEvaluate.scss'
</style>
