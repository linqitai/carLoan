webpackJsonp([1],{117:function(t,e,i){function o(t){i(456)}var s=i(24)(i(209),i(484),o,"data-v-42725260",null);t.exports=s.exports},174:function(t,e,i){function o(t){i(459)}var s=i(24)(i(208),i(487),o,"data-v-75c3265c",null);t.exports=s.exports},175:function(t,e,i){"use strict";var o=i(54),s=i(493),a=i(475),r=i.n(a),n=i(477),c=i.n(n),l=i(476),u=i.n(l),m=i(478),d=i.n(m),v=i(479),f=i.n(v),p=i(481),h=i.n(p),y=i(480),g=i.n(y);s.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},o.default.use(s.a);var C=new s.a({routes:[{path:"/",name:"PageTransition",component:r.a,children:[{path:"",component:c.a},{path:"/carEvaluate",component:c.a},{path:"/applyBM",component:u.a},{path:"/offlineManage",component:d.a},{path:"/selectBrand",component:f.a},{path:"/selectSeries",component:h.a},{path:"/selectCarType",component:g.a}]}]});e.a=C},177:function(t,e){},178:function(t,e){},179:function(t,e){},180:function(t,e){},184:function(t,e,i){function o(t){i(460)}var s=i(24)(i(207),i(488),o,null,null);t.exports=s.exports},204:function(t,e,i){"use strict";var o=i(218),s=i.n(o),a=i(186),r=i.n(a),n=i(466),c=i.n(n),l=i(35);i.n(l);r.a.defaults.timeout=7e3,e.a={fetchGet:function(t,e){return new s.a(function(i,o){r.a.get(t,e).then(function(t){i(t.data)}).catch(function(t){o(t)})})},fetchPost:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(o,s){l.Indicator.open(),r.a.post(t,c.a.stringify(e)).then(function(t){l.Indicator.close(),o(t.data)}).catch(function(t){i.i(l.Toast)("请求超时，网速有点慢哦"),l.Indicator.close(),s(t)})})},fetchPostPrimary:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(o,s){r.a.post(t,c.a.stringify(e)).then(function(t){o(t.data)}).catch(function(t){i.i(l.Toast)("请求超时，网速有点慢哦"),l.Indicator.close(),s(t)})})},fetchPostForUpload:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(i,o){var s={headers:{"Content-Type":"multipart/form-data"}};r.a.post(t,e,s).then(function(t){i(t.data)}).catch(function(t){o(t)})})}}},205:function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return s});var o=function(t){return!!/^1[3|4|5|7|8][0-9]\d{8}$/.test(t)},s=function(t){return!!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(t)}},206:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(176),s=(i.n(o),i(54)),a=i(184),r=i.n(a),n=i(175),c=i(183),l=i.n(c),u=i(35),m=i.n(u),d=i(182),v=i.n(d),f=i(179),p=(i.n(f),i(178)),h=(i.n(p),i(180)),y=(i.n(h),i(181)),g=i.n(y),C=i(177);i.n(C);g.a.attach(document.body),s.default.use(l.a),s.default.use(m.a),s.default.use(v.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:n.a,template:"<App/>",components:{App:r.a}})},207:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{transitionName:"slide-left"}},beforeRouteUpdate:function(t,e,i){var o=this.$router.isBack;console.log("isBack:"+o),this.transitionName=o?"slide-right":"slide-left",this.$router.isBack=!1,i()}}},208:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{back:function(){this.$router.goBack()}}}},209:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{back:function(){this.$router.goBack()}}}},210:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{type:this.$route.query.type,shopId:this.$route.query.shopId,isLogin:this.$route.query.isLogin,customerKey:this.$route.query.customerKey,accountTel:this.$route.query.accountTel,from:this.$route.query.from}},methods:{back:function(){if("app"===this.from){var t=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(t)?popToViewController():/android/.test(t)&&htmlToJava.popToViewController()}else window.location.href="http://fq.51puhui.cn/hk/zyd/dist/#/financing?type="+this.type+"&shopId="+this.shopId+"&isLogin="+this.isLogin+"&customerKey="+this.customerKey+"&accountTel="+this.accountTel}}}},211:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{transitionName:"slide-left"}},beforeRouteUpdate:function(t,e,i){var o=this.$router.isBack;this.transitionName=o?"slide-right":"slide-left",this.$router.isBack=!1,i()}}},212:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(174),s=i.n(o),a=i(35),r=(i.n(a),i(55)),n=i(205);e.default={name:"HelloWorld",data:function(){return{isEvaluate:!1,active:0,form:{name:"",identity:"",mobile:"",platform:"微贷网",platformId:""},showPlatFormPop:!1,title:"选择车型",titlePlatForm:"平台选择",pickerColumns:[{values:["微贷网"],className:"column1"}]}},created:function(){},methods:{submitApply:function(){var t=this,e=document.getElementsByTagName("input"),o={name:this.form.name,mobile:this.form.mobile,carNum:this.form.identity,pushPlatformType:"",carCreditId:localStorage.getItem("carCreditId"),city:localStorage.getItem("city")};return console.log(localStorage.getItem("city")),"微贷网"===this.form.platform&&(o.pushPlatformType=1),""===o.name||null===o.name?(i.i(a.Toast)("请填写正确的姓名"),void e[0].focus()):i.i(n.a)(this.form.identity)?i.i(n.b)(this.form.mobile)?void i.i(r.d)(o).then(function(e){0===e.code?t.$router.push("/offlineManage"):-1===e.code&&i.i(a.Toast)("资料提交错误或重复提交")}):(i.i(a.Toast)("请填写正确的手机号"),void e[2].focus()):(i.i(a.Toast)("请填写正确的身份证号"),void e[1].focus())},submitApplyBtn:function(){this.submitApply()},carTypeEvent:function(){this.showPlatFormPop=!0,this.showPlatFormPop=!0},handlePickerCancel:function(){this.showPlatFormPop=!1},handlePickerConfirm:function(t){this.showPlatFormPop=!1,this.form.platform=t[0]},nextBtnEvent:function(){var t=this;this.b=!0,setTimeout(function(){t.b=!1,console.log("b:false")},3e3)}},components:{mHeader:s.a}}},213:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(219),s=i.n(o),a=i(474),r=i.n(a),n=i(35),c=(i.n(n),i(55)),l={province:["安徽","澳门","北京","重庆","福建","广东","甘肃","广西","贵州","湖北","湖南","河北","河南","海南","黑龙江","吉林","江苏","江西","辽宁","内蒙古","宁夏","青海","四川","山东","上海","山西","陕西","天津","台湾","香港","新疆","西藏","云南","浙江"]},u={"北京":["北京"],"广东":["广州","深圳","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],"上海":["上海"],"天津":["天津"],"重庆":["重庆"],"辽宁":["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],"江苏":["南京","苏州","无锡","常州","镇江","南通","泰州","扬州","盐城","连云港","徐州","淮安","宿迁"],"湖北":["武汉","黄石","十堰","荆州","宜昌","襄樊","鄂州","荆门","孝感","黄冈","咸宁","随州","恩施土家族苗族自治州","仙桃","天门","潜江","神农架林区"],"四川":["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"],"陕西":["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],"河北":["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],"山西":["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],"河南":["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店"],"吉林":["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州"],"黑龙江":["哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭地区"],"内蒙古":["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","锡林郭勒盟","兴安盟","阿拉善盟"],"山东":["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],"安徽":["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"],"浙江":["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"],"福建":["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"],"湖南":["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州"],"广西":["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],"江西":["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"],"贵州":["贵阳","六盘水","遵义","安顺","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"],"云南":["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州","大理白族自治州","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州"],"西藏":["拉萨","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"],"海南":["海口","三亚","五指山","琼海","儋州","文昌","万宁","东方","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"],"甘肃":["兰州","嘉峪关","金昌","白银","天水","武威","酒泉","张掖","庆阳","平凉","定西","陇南","临夏回族自治州","甘南藏族自治州"],"宁夏":["银川","石嘴山","吴忠","固原","中卫"],"青海":["西宁","海东地区","海北藏族自治州","海南藏族自治州","黄南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"],"新疆":["乌鲁木齐","克拉玛依","吐鲁番地区","哈密地区","和田地区","阿克苏地区","喀什地区","克孜勒苏柯尔克孜自治州","巴音郭楞蒙古自治州","昌吉回族自治州","博尔塔拉蒙古自治州","石河子","阿拉尔","图木舒克","五家渠","伊犁哈萨克自治州"],"香港":["香港"],"澳门":["澳门"],"台湾":["台北市","高雄市","台北县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","宜兰县","花莲县","台东县","澎湖县","基隆市","新竹市","台中市","嘉义市","台南市"]},m=["2014","2015","2016","2017"],d=["01","02","03","04","05","06","07","08","09","10","11","12"];e.default={data:function(){return{showAdvantage:!0,sYears:m,timeSlots:[],currentDate:[m[0],"01"],currentYear:m[0],currentMonth:d[0],slotsDate:[{flex:1,values:["2017"],className:"slot1",textAlign:"left"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:d,defaultIndex:2,className:"slot3",textAlign:"right"}],timePickerColumns:[{values:["2017"],className:"column1",defaultIndex:0},{values:d,className:"column2",defaultIndex:2}],titleCity:"地区选择",cityPickerColumns:[{values:l.province,className:"column1",defaultIndex:2},{values:["北京"],className:"column2"}],list:[],seriesList:[],modelList:[],isEvaluate:!1,active:0,b:!1,minRegYear:"",maxRegYear:"",minDate:new Date,maxDate:new Date,form:{carType:"",modelId:"",time:"",city:"",mileage:""},province:"",city:"",showCarTypePop:!1,showSeriesListPop:!1,showModelListPop:!1,showTimePopup:!1,showCityPopup:!1,title:"选择车型",currentCityNames:"",currentCityName:"",currentCityId:"",highPrice:"",carCreditId:localStorage.getItem("carCreditId")?localStorage.getItem("carCreditId"):"",customerKey:parseInt(this.$route.query.customerKey),accountTel:parseInt(this.$route.query.accountTel)}},created:function(){console.log("===carEvaluatePage==="),console.log("customerKey:"+this.customerKey),console.log("accountTel:"+this.accountTel);var t=sessionStorage.getItem("hash2");if(console.log("hash1:"+t),null!==t&&""!==t||(console.log("visit:customerKey-"+this.customerKey+",accountTel-"+this.accountTel),this.visit(),sessionStorage.setItem("hash2",1)),this.$route.query.isSelectCarType,localStorage.getItem("customerKey"))if(this.$route.query.customerKey===localStorage.getItem("customerKey")){if(this.form.time=localStorage.getItem("time")?localStorage.getItem("time"):"",this.form.city=localStorage.getItem("provinceCity")?localStorage.getItem("provinceCity"):"",this.province=this.form.city.split(",")[0],this.city=this.form.city.split(",")[1],this.currentCityId=localStorage.getItem("currentCityId")?localStorage.getItem("currentCityId"):"",this.form.mileage=localStorage.getItem("mileage")?localStorage.getItem("mileage"):"",console.log("modelName:"+localStorage.getItem("modelName")),localStorage.getItem("modelName")){var e=localStorage.getItem("modelName"),i=localStorage.getItem("modelId"),o=localStorage.getItem("minRegYear"),s=localStorage.getItem("maxRegYear");console.log("minRegYear:"+o),this.chooseModel(e,i,o,s)}}else localStorage.setItem("customerKey",this.customerKey),console.log("setItem(customerKey):"+this.customerKey),localStorage.setItem("accountTel",this.accountTel),localStorage.setItem("type",this.$route.query.type),localStorage.setItem("shopId",this.$route.query.shopId),localStorage.setItem("isLogin",this.$route.query.isLogin),localStorage.setItem("from",this.$route.query.from);else localStorage.setItem("customerKey",this.customerKey),console.log("setItem(customerKey):"+this.customerKey),localStorage.setItem("accountTel",this.accountTel),localStorage.setItem("type",this.$route.query.type),localStorage.setItem("shopId",this.$route.query.shopId),localStorage.setItem("isLogin",this.$route.query.isLogin),localStorage.setItem("from",this.$route.query.from)},methods:{_initScroll:function(){this.baseScroll=new s.a(document.getElementById("base"),{click:!0})},back:function(){if(this.$route.query.isSelectCarType&&this.ssdataCache(),"app"===this.from){var t=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(t)?popToViewController():/android/.test(t)&&htmlToJava.popToViewController()}else window.location.href="http://fq.51puhui.cn/hk/zyd/dist/#/financing?type="+this.$route.query.type+"&shopId="+this.$route.query.shopId+"&isLogin="+this.$route.query.isLogin+"&customerKey="+this.$route.query.customerKey+"&accountTel="+this.$route.query.accountTel},dataCache:function(t){i.i(c.e)(t).then(function(t){0===t.code?console.log("cache成功"):console.log("cache失败")})},mileageBlur:function(t){localStorage.setItem("mileage",t)},visit:function(){var t=this,e={zedAccount:this.accountTel,customerKey:this.customerKey};i.i(c.f)(e).then(function(e){if(console.log(e),0===e.code){t.carCreditId=e.obj.carCreditId,localStorage.setItem("carCreditId",t.carCreditId);var i=e.obj.zone;t.form.time=e.obj.regDate,t.form.mileage=e.obj.mile,t.form.modelId=e.obj.modelId;var o={cityId:i};t.queryCity(o);var s={modelId:t.form.modelId};t.queryMode(s)}})},queryMode:function(t){var e=this;i.i(c.a)(t).then(function(t){if(console.log(t),0===t.code){var o=t.list;e.form.carType=o[0][0].modelName}else i.i(n.Toast)(t.error)})},timeChange:function(t,e){var i=t.getValues();this.currentDate=i[0]+"-"+i[1]},editApplyStatus:function(){var t={carPriceId:this.carCreditId};i.i(c.g)(t).then(function(t){console.log(t)})},applyBtnTest:function(){this.$router.push("/applyBM")},applyBtn:function(){var t=this,e={carCreditId:this.carCreditId};i.i(c.g)(e).then(function(e){console.log(e),0===e.code&&t.$router.push("/applyBM")})},queryCitylList:function(t){var e=this;i.i(c.h)(t).then(function(t){e.currentCityNames=t.list,console.log(e.currentCityNames),console.log("len:"+e.currentCityNames.length);for(var i=0;i<e.currentCityNames.length;i++)e.currentCityNames[i].cityName===e.currentCityName&&(e.currentCityId=e.currentCityNames[i].cityId,console.log("this.currentCityId:"+e.currentCityId),localStorage.setItem("currentCityId",e.currentCityId))})},queryCity:function(t){var e=this;i.i(c.h)(t).then(function(t){var i=t.list;e.form.city=i[0].provName+","+i[0].cityName,e.province=i[0].provName,e.city=i[0].cityName,console.log("this.form.city:"+e.form.city)})},handleTimePickerChange:function(t,e){t.setColumnValues(1,d)},handleTimePickerCancel:function(){this.showTimePopup=!1},handleTimePickerConfirm:function(t){console.log("time:"+t),localStorage.setItem("time",t),this.form.time=t},handleCityPickerChange:function(t,e){t.setColumnValues(1,u[e[0]])},handleCityPickerCancel:function(){this.showCityPopup=!1},handleCityPickerConfirm:function(t){this.showCityPopup=!1,this.form.city=t,localStorage.setItem("provinceCity",t),this.province=t[0],this.city=t[1],this.currentCityName=t[1],localStorage.setItem("city",this.currentCityName);var e={provName:this.province};this.queryCitylList(e)},closeSelectBrand:function(){this.showCarTypePop=!1},closeSelectSeries:function(){this.showSeriesListPop=!1},closeSelectModel:function(){this.showModelListPop=!1},chooseBrand:function(t){console.log(t),this.queryForSeriesList(t)},chooseSeries:function(t){console.log(t),this.queryModelList(t)},chooseModel:function(t,e,i,o){this.form.carType=t,this.form.modelId=e,this.minRegYear=i,this.maxRegYear=o;for(var s=[],a=this.minRegYear;a<=this.maxRegYear;a++)s.push(String(a));m=s,this.timePickerColumns[0].values=m,this.timePickerColumns[1].values=d,this.currentYear=m[0],this.currentMonth=d[0],this.showModelListPop=!1,this.showSeriesListPop=!1,this.showCarTypePop=!1},queryForBrankList:function(){var t=this;i.i(c.c)().then(function(e){t.list=e.list})},queryForSeriesList:function(t){var e=this,o={brankId:t};i.i(c.b)(o).then(function(t){e.showSeriesListPop=!0,e.seriesList=t.list})},queryModelList:function(t){var e=this,o={seriesId:t};i.i(c.a)(o).then(function(t){e.showModelListPop=!0,e.modelList=t.list})},queryCarPrice:function(){var t=this,e=document.getElementsByTagName("input"),o={carCreditId:this.carCreditId?this.carCreditId:1,modelId:this.form.modelId,regDate:this.form.time,mile:this.form.mileage,zone:this.currentCityId,customerKey:this.customerKey,zedAccount:this.accountTel,province:this.province,city:this.city};return""===o.modelId||null===o.modelId?void i.i(n.Toast)("请填选择车型"):""===o.regDate||null===o.regDate?void i.i(n.Toast)("请填选择上牌时间"):""===o.city||null===o.city?void i.i(n.Toast)("请填选择所在城市"):""===o.mile||null===o.mile?(i.i(n.Toast)("请填写行驶里程"),void e[3].focus()):o.mile>1e6?void i.i(n.Toast)("行驶里程不能大于100万公里"):o.mile<1?void i.i(n.Toast)("行驶里程不能小于1公里"):(n.Indicator.open("评估中"),i.i(c.i)(o).then(function(e){0===e.code?(t.highPrice=e.obj.highPrice,t.showAdvantage=!1,t.isEvaluate=!0,t.dataCache(o)):-1===e.code&&i.i(n.Toast)(e.error),n.Indicator.close()}),void n.Indicator.close())},ssdataCache:function(){var t={carCreditId:this.carCreditId?this.carCreditId:1,modelId:localStorage.getItem("modelId"),regDate:this.form.time,mile:this.form.mileage,zone:this.currentCityId,customerKey:this.customerKey,zedAccount:this.accountTel,province:this.province,city:this.form.city};this.dataCache(t)},beginEvaluateEvent:function(){this.queryCarPrice()},carTypeEvent:function(){this.$router.push("./selectBrand")},handlePickerCancel:function(){this.showCarTypePop=!1},handlePickerConfirm:function(t){this.showCarTypePop=!1,this.form.carType=t[0]},timeEvent:function(){this.form.carType?this.showTimePopup=!0:i.i(n.Toast)("请先选择车型")},timeHandlePickerConfirm:function(t){this.showTimePopup=!1,this.form.time=t[0]+"-"+t[1],localStorage.setItem("time",this.form.time)},cityEvent:function(){this.showCityPopup=!0}},components:{mHeader:r.a}}},214:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(174),s=i.n(o);e.default={name:"HelloWorld",data:function(){return{isEvaluate:!1,active:0,form:{name:"",identity:"",mobile:"",platform:""},showPlatFormPop:!1,title:"选择车型",pickerColumns:[{values:["微贷网"],className:"column1"}],customerKey:"",accountTel:"",type:"",shopId:"",isLogin:"",from:""}},created:function(){this.customerKey=localStorage.getItem("customerKey"),this.accountTel=localStorage.getItem("accountTel"),this.type=localStorage.getItem("type"),this.shopId=localStorage.getItem("shopId"),this.isLogin=localStorage.getItem("isLogin"),this.from=localStorage.getItem("from")},methods:{submitApply:function(){this.$router.push("/carEvaluate?customerKey="+this.customerKey+"&type="+this.type+"&shopId="+this.shopId+"&isLogin="+this.isLogin+"&accountTel="+this.accountTel+"&from="+this.from)},carTypeEvent:function(){this.showPlatFormPop=!0,this.showPlatFormPop=!0},handlePickerCancel:function(){this.showPlatFormPop=!1},handlePickerConfirm:function(t){this.showPlatFormPop=!1,this.form.platform=t[0]},nextBtnEvent:function(){var t=this;this.b=!0,setTimeout(function(){t.b=!1,console.log("b:false")},3e3)}},components:{mHeader:s.a}}},215:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(117),s=i.n(o),a=i(35),r=(i.n(a),i(55));e.default={data:function(){return{list:[]}},created:function(){this.queryForBrankList()},methods:{toSelectSeries:function(t){this.$router.push("./selectSeries?brandId="+t)},queryForBrankList:function(){var t=this;i.i(r.c)().then(function(e){console.log(e),0===e.code?t.list=e.list:i.i(a.Toast)(e.error)})}},components:{mHeader:s.a}}},216:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(117),s=i.n(o),a=i(35),r=(i.n(a),i(55));e.default={data:function(){return{carTypeList:[],seriesId:this.$route.query.seriesId}},created:function(){this.queryModelList(this.seriesId)},methods:{toCarEvaluatePage:function(t,e,i,o){console.log("minRegYear:"+i),localStorage.setItem("modelName",t),localStorage.setItem("modelId",e),localStorage.setItem("minRegYear",i),localStorage.setItem("maxRegYear",o);var s=localStorage.getItem("customerKey"),a=localStorage.getItem("accountTel"),r=localStorage.getItem("type"),n=localStorage.getItem("shopId"),c=localStorage.getItem("isLogin"),l=localStorage.getItem("from");localStorage.setItem("time",""),localStorage.setItem("provinceCity",""),localStorage.setItem("mileage",""),this.$router.push("./carEvaluate?customerKey="+s+"&accountTel="+a+"&type="+r+"&shopId="+n+"&isLogin="+c+"&from="+l+"&isSelectCarType=1")},queryModelList:function(t){var e=this,o={seriesId:t};i.i(r.a)(o).then(function(t){console.log(t),0===t.code?e.carTypeList=t.list:i.i(a.Toast)(t.error)})}},components:{mHeader:s.a}}},217:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(117),s=i.n(o),a=i(35),r=(i.n(a),i(55));e.default={data:function(){return{seriesList:[],brandId:this.$route.query.brandId,seriesGroupNames:"",isShowSearchBox:!1}},created:function(){this.queryForSeriesListByBrandId(this.brandId)},methods:{queryCarSeries:function(t){"全部"===t?this.queryForSeriesListByName("",this.brandId):this.queryForSeriesListByName(t,this.brandId)},toSelectCarType:function(t){this.$router.push("./selectCarType?seriesId="+t)},queryForSeriesListByName:function(t,e){var o=this,s={brankId:e,seriesGroupName:t};i.i(r.b)(s).then(function(t){0===t.code?o.seriesList=t.list:i.i(a.Toast)(t.error)})},queryForSeriesListByBrandId:function(t){var e=this,o={brankId:t};i.i(r.b)(o).then(function(t){var o=e;if(0===t.code){var s=t.obj.split(",");console.log(s),e.$nextTick(function(){o.seriesGroupNames=s,console.log(o.seriesGroupNames.length)}),e.seriesList=t.list,e.isShowSearchBox=!0}else i.i(a.Toast)(t.error)})}},components:{mHeader:s.a}}},454:function(t,e){},455:function(t,e){},456:function(t,e){},457:function(t,e){},458:function(t,e){},459:function(t,e){},460:function(t,e){},461:function(t,e){},462:function(t,e){},463:function(t,e){},464:function(t,e){},474:function(t,e,i){function o(t){i(462)}var s=i(24)(i(210),i(490),o,"data-v-aee6cc90",null);t.exports=s.exports},475:function(t,e,i){function o(t){i(463)}var s=i(24)(i(211),i(491),o,"data-v-c56841ee",null);t.exports=s.exports},476:function(t,e,i){function o(t){i(457)}var s=i(24)(i(212),i(485),o,"data-v-543a1dbf",null);t.exports=s.exports},477:function(t,e,i){function o(t){i(461)}var s=i(24)(i(213),i(489),o,"data-v-96f0fdda",null);t.exports=s.exports},478:function(t,e,i){function o(t){i(455)}var s=i(24)(i(214),i(483),o,"data-v-39f43cae",null);t.exports=s.exports},479:function(t,e,i){function o(t){i(464)}var s=i(24)(i(215),i(492),o,"data-v-ef04dd18",null);t.exports=s.exports},480:function(t,e,i){function o(t){i(458)}var s=i(24)(i(216),i(486),o,"data-v-64f99b4a",null);t.exports=s.exports},481:function(t,e,i){function o(t){i(454)}var s=i(24)(i(217),i(482),o,"data-v-1b70c95a",null);t.exports=s.exports},482:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"selectCarType",staticClass:"selectCarType"},[i("m-header",[t._v("选择车系")]),t._v(" "),i("div",{ref:"base",staticClass:"base"},[t.isShowSearchBox?i("div",{staticClass:"searchBox"},[t._l(t.seriesGroupNames,function(e){return[i("span",{on:{click:function(i){t.queryCarSeries(e)}}},[t._v(t._s(e))])]})],2):t._e(),t._v(" "),t._l(t.seriesList,function(e,o){return i("div",{ref:"items",refInFor:!0,staticClass:"items"},[i("div",{staticClass:"item",on:{click:function(i){t.toSelectCarType(e.seriesId)}}},[t._v(t._s(e.seriesName))])])})],2)],1)},staticRenderFns:[]}},483:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carEvaluate",staticStyle:{"background-color":"#fff"}},[i("m-header",[t._v("臻车贷")]),t._v(" "),i("div",{staticClass:"base"},[t._m(0),t._v(" "),i("div",{staticClass:"border-bg10"}),t._v(" "),i("section",{staticClass:"contentSuccessWrapper"},[i("div",{staticClass:"success"}),t._v(" "),i("div",{staticClass:"text"},[t._v("您的借款申请已提交，微贷网工作人员线下会联系您，请耐心等待并保持手机畅通！")]),t._v(" "),i("div",{staticClass:"btnWrapper"},[i("button",{ref:"next_step_btn",staticClass:"next_step_btn bg_color_green",on:{click:t.submitApply}},[t._v("完成")])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"steps_wrapper"},[i("div",{staticClass:"steps"},[i("div",{staticClass:"steps_icon bgImg3"}),t._v(" "),i("div",{staticClass:"steps_texts"},[i("div",{staticClass:"text active"},[t._v("车辆评估")]),t._v(" "),i("div",{staticClass:"text active"},[t._v("申请借款")]),t._v(" "),i("div",{staticClass:"text active"},[t._v("线下办理")])])])])}]}},484:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"back-img",on:{click:t.back}}),t._v(" "),i("div",{staticClass:"text"},[t._t("default")],2)])},staticRenderFns:[]}},485:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carEvaluate"},[i("m-header",[t._v("臻车贷")]),t._v(" "),t._m(0),t._v(" "),i("section",{staticClass:"contentWrapper"},[i("div",{staticClass:"myCellWrapper border-1px"},[i("div",{staticClass:"title"},[t._v("姓名")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.form.name,expression:"form.name"}],staticClass:"clear",on:{click:function(e){t.form.name=""}}},[i("van-icon",{attrs:{name:"clear"}})],1)]),t._v(" "),i("div",{staticClass:"myCellWrapper border-1px"},[i("div",{staticClass:"title"},[t._v("身份证号")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.identity,expression:"form.identity"}],attrs:{type:"text",placeholder:"请输入身份证号",maxlength:"18"},domProps:{value:t.form.identity},on:{input:function(e){e.target.composing||t.$set(t.form,"identity",e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.form.identity,expression:"form.identity"}],staticClass:"clear",on:{click:function(e){t.form.identity=""}}},[i("van-icon",{attrs:{name:"clear"}})],1)]),t._v(" "),i("div",{staticClass:"myCellWrapper border-1px"},[i("div",{staticClass:"title"},[t._v("联系方式")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],attrs:{type:"tel",placeholder:"请输入联系方式",maxlength:"11"},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.form.mobile,expression:"form.mobile"}],staticClass:"clear",on:{click:function(e){t.form.mobile=""}}},[i("van-icon",{attrs:{name:"clear"}})],1)]),t._v(" "),i("div",{staticClass:"myCellWrapper border-1px",on:{click:t.carTypeEvent}},[i("div",{staticClass:"title"},[t._v("平台选择")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.platform,expression:"form.platform"}],attrs:{type:"text",placeholder:"未选择",readonly:""},domProps:{value:t.form.platform},on:{input:function(e){e.target.composing||t.$set(t.form,"platform",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"clear"},[i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-popup",{staticClass:"van-popup-2",attrs:{position:"bottom"},model:{value:t.showPlatFormPop,callback:function(e){t.showPlatFormPop=e},expression:"showPlatFormPop"}},[i("van-picker",{attrs:{title:t.titlePlatForm,columns:t.pickerColumns,"show-toolbar":""},on:{cancel:t.handlePickerCancel,confirm:t.handlePickerConfirm},model:{value:t.form.platform,callback:function(e){t.$set(t.form,"platform",e)},expression:"form.platform"}})],1)],1),t._v(" "),i("section",{staticClass:"btnBox"},[i("div",{staticClass:"btnWrapper"},[i("button",{ref:"next_step_btn",staticClass:"next_step_btn bg_color_green",on:{click:t.submitApplyBtn}},[t._v("提交")])])]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"base"},[i("div",{staticClass:"steps_wrapper"},[i("div",{staticClass:"steps"},[i("div",{staticClass:"steps_icon bgImg2"}),t._v(" "),i("div",{staticClass:"steps_texts"},[i("div",{staticClass:"text active"},[t._v("车辆评估")]),t._v(" "),i("div",{staticClass:"text active"},[t._v("申请借款")]),t._v(" "),i("div",{staticClass:"text"},[t._v("线下办理")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"cooperationPlatWrapper"},[i("div",{staticClass:"title"},[t._v("合作平台")]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"box flex1"},[i("div",{staticClass:"img"})]),t._v(" "),i("div",{staticClass:"box flex2"},[i("div",{staticClass:"left"},[t._v("1.国资企业强势入股")]),t._v(" "),i("div",{staticClass:"left"},[t._v("2.行业内权威企业")]),t._v(" "),i("div",{staticClass:"left"},[t._v("3.全国数百家店，标的真实可靠")])])])])}]}},486:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"selectCarType",staticClass:"selectCarType"},[i("m-header",[t._v("选择车型")]),t._v(" "),i("div",{ref:"base",staticClass:"base"},t._l(t.carTypeList,function(e,o){return i("div",{ref:"items",refInFor:!0,staticClass:"items"},[i("div",{staticClass:"title"},[t._v(t._s(e[0].modelYear))]),t._v(" "),t._l(e,function(e,o){return[i("div",{staticClass:"item",on:{click:function(i){t.toCarEvaluatePage(e.modelName,e.modelId,e.modelYear,e.maxRegYear)}}},[i("div",{staticClass:"name mt10"},[t._v(t._s(e.modelName))]),t._v(" "),i("div",{staticClass:"line2"},[t._v("指导价："+t._s(e.modelPrice)+", 排量："+t._s(e.liter))])])]})],2)}))],1)},staticRenderFns:[]}},487:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"back-img",on:{click:t.back}}),t._v(" "),i("div",{staticClass:"text"},[t._t("default")],2)])},staticRenderFns:[]}},488:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},489:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carEvaluate",attrs:{id:"carEvaluate"}},[i("header",[i("div",{staticClass:"back-img",on:{click:t.back}}),t._v(" "),i("div",{staticClass:"text"},[t._v("\n      臻车贷\n    ")])]),t._v(" "),i("div",{staticClass:"base",attrs:{id:"base"}},[t._m(0),t._v(" "),i("section",{staticClass:"contentWrapper",attrs:{id:"contentWrapper"}},[i("div",{staticClass:"myCellWrapper border-1px",on:{click:t.carTypeEvent}},[i("div",{staticClass:"title"},[t._v("选择车型")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.carType,expression:"form.carType"}],attrs:{type:"text",placeholder:"未选择",readonly:""},domProps:{value:t.form.carType},on:{input:function(e){e.target.composing||t.$set(t.form,"carType",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"clear"},[i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("div",{staticClass:"myCellWrapper border-1px",on:{click:t.timeEvent}},[i("div",{staticClass:"title"},[t._v("上牌时间")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.time,expression:"form.time"}],attrs:{type:"text",placeholder:"未选择",readonly:""},domProps:{value:t.form.time},on:{input:function(e){e.target.composing||t.$set(t.form,"time",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"clear"},[i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-popup",{staticClass:"van-popup-2",attrs:{position:"bottom"},model:{value:t.showTimePopup,callback:function(e){t.showTimePopup=e},expression:"showTimePopup"}},[i("van-picker",{attrs:{title:"选择时间",columns:t.timePickerColumns,"show-toolbar":""},on:{change:t.handleTimePickerChange,cancel:t.handleTimePickerCancel,confirm:t.timeHandlePickerConfirm}})],1),t._v(" "),i("div",{staticClass:"myCellWrapper border-1px",on:{click:t.cityEvent}},[i("div",{staticClass:"title"},[t._v("所在城市")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],attrs:{type:"text",placeholder:"未选择",readonly:""},domProps:{value:t.form.city},on:{input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"clear"},[i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-popup",{staticClass:"van-popup-2",attrs:{position:"bottom"},model:{value:t.showCityPopup,callback:function(e){t.showCityPopup=e},expression:"showCityPopup"}},[i("van-picker",{attrs:{title:t.titleCity,columns:t.cityPickerColumns,"show-toolbar":""},on:{change:t.handleCityPickerChange,cancel:t.handleCityPickerCancel,confirm:t.handleCityPickerConfirm}})],1),t._v(" "),i("div",{staticClass:"myCellWrapper border-1px"},[i("div",{staticClass:"titleMore"},[t._v("行驶里程")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mileage,expression:"form.mileage"}],attrs:{type:"number",placeholder:"请输入行驶里程"},domProps:{value:t.form.mileage},on:{blur:function(e){t.mileageBlur(t.form.mileage)},input:function(e){e.target.composing||t.$set(t.form,"mileage",e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.form.mileage,expression:"form.mileage"}],staticClass:"clear",on:{click:function(e){t.form.mileage=""}}},[i("van-icon",{attrs:{name:"clear"}})],1),t._v(" "),i("div",{staticClass:"unit"},[t._v("公里")])])],1),t._v(" "),i("section",{staticClass:"btnBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEvaluate,expression:"!isEvaluate"}],staticClass:"beginEvaluateBtn",on:{click:t.beginEvaluateEvent}},[t._v("评估")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEvaluate,expression:"isEvaluate"}],staticClass:"btnWrapper"},[i("div",[t._v("车辆评估价：\n          "),i("span",{staticClass:"amount"},[t._v(t._s(t.highPrice)+"万")])]),t._v(" "),i("button",{ref:"next_step_btn",staticClass:"next_step_btn bg_color_green mt24",on:{click:t.applyBtn}},[t._v("借款")])])]),t._v(" "),i("section",{staticClass:"advantageWrapper"},[i("div",{staticClass:"content"},[i("div",{staticClass:"box"},[i("div",{staticClass:"img img1"}),t._v(" "),i("div",{staticClass:"mtb18 fs14"},[t._v("费率低")]),t._v(" "),t.showAdvantage?i("div",{staticClass:"fontSize"},[t._v("月费率9厘起")]):t._e()]),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"img img2"}),t._v(" "),i("div",{staticClass:"mtb18 fs14"},[t._v("放款快")]),t._v(" "),t.showAdvantage?i("div",{staticClass:"fontSize"},[t._v("最快当天可放款")]):t._e()]),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"img img3"}),t._v(" "),i("div",{staticClass:"mtb18 fs14"},[t._v("额度高")]),t._v(" "),t.showAdvantage?i("div",{staticClass:"fontSize"},[t._v("最高估值100%")]):t._e()])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"steps_wrapper"},[i("div",{staticClass:"steps"},[i("div",{staticClass:"steps_icon bgImg1"}),t._v(" "),i("div",{staticClass:"steps_texts"},[i("div",{staticClass:"text active"},[t._v("车辆评估")]),t._v(" "),i("div",{staticClass:"text"},[t._v("申请借款")]),t._v(" "),i("div",{staticClass:"text"},[t._v("线下办理")])])])])}]}},490:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"back-img",on:{click:t.back}}),t._v(" "),i("div",{staticClass:"text"},[t._t("default")],2)])},staticRenderFns:[]}},491:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"header"}),t._v(" "),i("transition",{attrs:{name:t.transitionName}},[i("router-view",{staticClass:"child-view"})],1)],1)},staticRenderFns:[]}},492:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"selectCarType",staticClass:"selectCarType"},[i("m-header",[t._v("选择品牌")]),t._v(" "),i("div",{ref:"base",staticClass:"base"},t._l(t.list,function(e,o){return i("div",{ref:"items",refInFor:!0,staticClass:"items"},[i("div",{staticClass:"title"},[t._v(t._s(e[0].initial))]),t._v(" "),t._l(e,function(e,o){return[i("div",{staticClass:"item",on:{click:function(i){t.toSelectSeries(e.brandId)}}},[t._v(t._s(e.brandName))])]})],2)}))],1)},staticRenderFns:[]}},55:function(t,e,i){"use strict";i.d(e,"f",function(){return s}),i.d(e,"c",function(){return a}),i.d(e,"b",function(){return r}),i.d(e,"a",function(){return n}),i.d(e,"h",function(){return c}),i.d(e,"i",function(){return l}),i.d(e,"g",function(){return u}),i.d(e,"d",function(){return m}),i.d(e,"e",function(){return d});var o=i(204),s=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/visit.json",t)},a=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/queryForBrankList.json",t)},r=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/querySeriesList.json",t)},n=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/queryModelList.json",t)},c=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/queryCitylList.json",t)},l=function(t){return o.a.fetchPostPrimary("/rz/m/filter/cheCredit/queryCarPrice.json",t)},u=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/editApplyStatus.json",t)},m=function(t){return o.a.fetchPost("/rz/m/filter/cheCredit/submitApply.json",t)},d=function(t){return o.a.fetchPostPrimary("/rz/m/filter/cheCredit/dataCache.json",t)}}},[206]);
//# sourceMappingURL=app.be473ed5cad793153ce1.js.map