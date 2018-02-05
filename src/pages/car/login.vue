<template>
	<div class='login' id="login">
		<!--<header>
			<div class="backIcon" @click="back">
			</div>
			<div class="text">
				臻车贷
			</div>
		</header>-->
		<div class="content">
			<div class="top_image"></div>
			<div class="content_info">
				<div class="top">
				   <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" @click="inputPhone" v-model.trim="form.telphone" class="input_info" placeholder="请输入您的手机号码" />
				   <img src="../../common/images/login_icon_clear.png" v-if="visibleTel" @click="clearTel"/>
				</div>
				<div class="bottom">
				   <input type="password" maxlength="16" v-model.trim="form.password" @click="inputPwd" class="input_info" placeholder="请输入密码"/>
				   <img src="../../common/images/login_icon_clear.png" v-if="visible" @click="clearPwd" class="clear_info"/>
				</div>
			</div>
			<div class="button">
				<div class="apply" @click="login">登录</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Toast, MessageBox, Indicator } from 'mint-ui'
import { checkPhone } from '../../common/js/utils'
import {visit, phoneRegistered, loginZed} from '../../api/index'
export default {
  data() {
	return {
			visibleTel: false,
			visible: false,
			form: {
			  telphone: '',
			  password: '',  
			},
			password: '',
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
			// 手机号
			inputPhone() { 
				this.visibleTel = true;
			},
			// 清空手机号
			clearTel() {
				this.form.telphone = '';
				this.visibleTel = false;
			},
			// 密码
			inputPwd() {
				this.visible = true;
			},
			// 清空密码
			clearPwd() {
				this.form.password = '';
				this.visible = false;
			},
			// 登录
			login() {
				if(this.form.password) {
					this.form.password = this.form.password.replace(/\s+/g, "");
				}
				if(!this.form.telphone) {
					Toast('请输入手机号');
					return;
				} else if(!checkPhone(this.form.telphone)) {
					Toast('请输入正确的手机号');
					return;
				} else if(!this.form.password) {
					Toast('请输入密码'); 
					return;
				} else {
					// 密码md5加密
					    var crypto = require('crypto');
			            var md5 = crypto.createHash("md5");
			            md5.update(this.form.password);
			            this.password = md5.digest('hex');
			            console.log(this.password);
					Indicator.open({
					  text: '登录中...',
					  spinnerType: 'fading-circle'
					});
					setTimeout(() => {
						  Indicator.close();
						}, 2000);
						// 请求注册接口
					setTimeout(() => {
						let params = {
				        phone: this.form.telphone
				      }
					phoneRegistered(params).then(res => {
				        console.log(res)
				        if(res.code === -1 && res.isExist === 0) {
                        MessageBox({
								    title: '',
									message: '该手机号尚未注册',
								    showCancelButton: true,
									cancelButtonText: '去注册',
									closeOnClickModal: false,
									confirmButtonHighlight: false
								}).then(action => {
									    if (action === 'cancel') {
									         this.$router.push('/register');
									        }
									});
				            } else if(res.error === '账户已存在,可直接登录') { 
				            	// 登录臻e盾
								let paramLogin = {
									        phone: this.form.telphone,
									        password : this.password,
									        loginType: 3
									      } 
							    loginZed(paramLogin).then(res => {
							    	console.log(res)
							    	if(res.code === -1) {
							    		MessageBox({
												title: '',
											    message: res.error,
												showCancelButton: false,
												closeOnClickModal: false
											})
							    	} else if(res.code === 0) {
//							    		console.log(res)
							    		console.log(res.account.accountId)
							    		console.log(res.account.phone)
							    		localStorage.setItem('customerKey', res.account.accountId);
							    		localStorage.setItem('accountTel', res.account.phone);
							    		this.$router.push(`/carEvaluate?customerKey=${res.account.accountId}&accountTel=${res.account.phone}`);
							    	}
							    })
				             }
				      })
				   }, 3000);	
				}
			},
		}
	}
</script>

<style scoped lang='scss'>
	@import './login.scss'
</style>