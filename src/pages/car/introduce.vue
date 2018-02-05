<template>
	<div class='introduce' id="introduce">
		<!--<header>
			<div class="backIcon" @click="back">
			</div>
			<div class="text">
				臻车贷
			</div>
		</header>-->
		<div class="content">
			<div class="top_image"></div>
			<div class="text">
				<div class="text_top">
					臻车贷，是臻e盾与多家优秀车贷平台合作推出的一款汽车抵押融资服务产品。我们聚焦普惠金融，新型线上+线下结合的运营模式，快捷、方便、安全、高效。
				</div>
				<div class="text_bottom">
					我们为您提供精准、专业、真实的二手车免费评估系统，同时向您推荐值得信赖的车贷合作平台。轻松盘活固定资产，快速实现资产升值，为每一个投资者创造价值，为每一个融资者提供资金帮助。
				</div>
			</div>
			<div class='advantageWrapper'>
				<div class='box'>
					<div class='img img1'></div>
					<div class='mtb18 fs14'>费率低</div>
					<div class="fontSize">月费率9厘起</div>
				</div>
				<div class='box'>
					<div class='img img2'></div>
					<div class='mtb18 fs14'>放款快</div>
					<div class="fontSize">最快当天可放款</div>
				</div>
				<div class='box'>
					<div class='img img3'></div>
					<div class='mtb18 fs14'>额度高</div>
					<div class="fontSize">最高估值100%</div>
				</div>
			</div>
			<div class="button">
				<div class="apply" @click="apply">立即申请</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
import {searchShop} from '../../api/index'
export default {
  data() {
	return {
				
			}
		},
		methods: {
			back() {
				if(this.from === 'app') {
					// h5返回安卓或是返回IOS
					let ua = navigator.userAgent.toLowerCase()
					if(/iphone|ipad|ipod/.test(ua)) {
						popToViewController()
					} else if(/android/.test(ua)) {
						htmlToJava.popToViewController()
					}
				} else {
					window.location.href = `http://fq.51puhui.cn/hk/zyd/dist/#/financing?type=${this.$route.query.type}&shopId=${this.$route.query.shopId}&isLogin=${this.$route.query.isLogin}&customerKey=${this.$route.query.customerKey}&accountTel=${this.$route.query.accountTel}`
				}
			},
		    apply() {
             let params = {
		        
		        }
		      searchShop(params).then(res => {
		            if(res.code !== 300) {
		            	let customerKey = localStorage.getItem('customerKey')
		            	let accountTel = localStorage.getItem('accountTel')
		            	this.$router.push(`/carEvaluate?customerKey=${customerKey}&accountTel=${accountTel}`);
		            } else {
		            	let instance = Toast('请先注册臻e盾');
						setTimeout(() => {
						  instance.close();
						}, 800);
						this.$router.push('/register');
		            }
		        })
		    }
		}
	}
</script>

<style scoped lang='scss'>
	@import './introduce.scss'
</style>