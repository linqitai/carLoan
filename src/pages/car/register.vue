<template>
	<div class='register' id="register">
		<div class="content">
			<div class="top_image"></div>
			<div class="content_info">
				<div class="top">
				   <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" @click="inputPhone" v-model.trim="form.telphone" class="input_info" placeholder="请输入您的手机号码" />
				   <img src="../../common/images/login_icon_clear.png" v-if="visibleTel" @click="clearTel"/>
				</div>
				<div class="message_code">
					<input type="number" oninput="if(value.length>4)value=value.slice(0,4)" v-model.trim="message_code" @click="inputCode" class="input_code" placeholder="请输入短信验证码"/>
					<img src="../../common/images/login_icon_clear.png" v-if="visibleCode" @click="clearMessage"/>
					<div class="get_code" @click="getCode" v-if="code_first">获取验证码</div>
					<div class="get_code" v-if="click_first">{{count}}秒后重发</div>
					<div class="get_code" @click="getCode" v-if="code_second">重新获取</div>
				</div>
				<!--<div class="password input_info">
					<input type="password" placeholder="请设置登录密码"/>
				</div>-->
				<div class="bottom" v-if="passwordInfo">
				   <input type="password" maxlength="16" v-model.trim="form.password" @click="inputPwd" class="input_info" placeholder="请设置登录密码"/>
				   <img src="../../common/images/login_icon_clear.png" v-if="visible" @click="clearPwd" class="clear_info"/>
				   <img src="../../common/images/login_icon_eye_p.png" v-if="visiblePwd" @click="visibleInfo" class="visible"/>
				</div>
				<div class="bottom" v-if="textInfo">
				   <input type="text" maxlength="16" v-model.trim="form.passwordInfo" @click="inputPwd" class="input_info" placeholder="请设置登录密码"/>
				   <img src="../../common/images/login_icon_clear.png" v-if="visible" @click="clearChange" class="clear_info"/>
				   <img src="../../common/images/login_icon_eye_n.png" v-if="visibleN"  @click="visibleChange" class="visible"/>
				</div>
				<div class="tooltip">
					*密码长度为6-16个字符、不包含空格、不能是9位以下纯数字、区分大小写
				</div>
			</div>
			<div class="button">
				<div class="apply" @click="register">注册</div>
			</div>
			<div class="info">已有臻e盾账号？<a @click="goTo">登录</a></div>
		</div>
	</div>
</template>

<script>
import { Toast, MessageBox, Indicator } from 'mint-ui'
import { checkPhone } from '../../common/js/utils'
import {visit, phoneRegistered, queryCode, loginZed} from '../../api/index'
import http from '../../api/public'
const zed = '/zed';
const TIME_COUNT = 60;
export default {
  data() {
	return {
		    visibleTel: false, 
		    visibleCode: false,
		    visible: false,
			visiblePwd: true,
			visibleN: false,
			passwordInfo: true,
			textInfo: false,
			code_first: true, // 验证码
			click_first: false, // 验证码
			code_second: false, // 验证码
			form: {
			  telphone: '',
			  password: '',  
			  passwordInfo: '',
			  passwordText: ''
			},
			passwordText: '',
			message_code: '',
			count: '',
			timer: null,
			codeInfo: '', // 验证码
			}
		},
		methods: {
			// 手机号
			inputPhone() { 
				this.visibleTel = true;
			},
			// 清空手机号
			clearTel() {
				this.form.telphone = '';
				this.visibleTel = false;
			},
			// 验证码
			inputCode() {
				this.visibleCode = true;
			},
			// 清空验证码
			clearMessage() {
				this.message_code = '';
				this.visibleCode = false;
			},
			// 密码
			inputPwd() {
				this.visible = true;
			},
			// 清空密码
			clearPwd() {
				this.form.password = '';
				this.form.passwordText = '';
				this.visible = false;
			},
			// 点击切换显示密码
			visibleInfo() {
				this.passwordInfo = false;
				this.textInfo = true;
				this.visibleN = true;
				this.form.passwordInfo = this.form.password;
				this.form.passwordText = this.form.passwordInfo;
				this.form.password = '';
			},
			// 点击切换隐藏密码
			visibleChange() {
				this.passwordInfo = true;
				this.textInfo = false;
				this.form.password = this.form.passwordInfo;
				this.form.passwordText = this.form.password;
				this.form.passwordInfo = '';
			},
			// 清空密码显示时的密码
			clearChange() {
				this.form.passwordInfo = '';
				this.form.passwordText = '';
				this.visible = false;
			},
			// 获取验证码
			getCode() {
				if(this.message_code) {
					this.message_code = ''
				}
				if(this.form.telphone && !checkPhone(this.form.telphone)) {
					console.log(this.form.telphone)
					Toast('请输入正确的手机号');
				} else if(this.form.telphone && checkPhone(this.form.telphone)) {
					let params = {
				        phone: this.form.telphone
				      }
				      phoneRegistered(params).then(res => {
				         console.log(res)
				         if(res.error === '账户已存在,可直接登录') {
                           MessageBox({
										title: '',
									    message: '该手机号已注册',
										showCancelButton: true,
										cancelButtonText: '去登录',
										closeOnClickModal: false,
										confirmButtonHighlight: false
									}).then(action => {
									        if (action === 'cancel') {
									            this.$router.push('/login');
									            }
									});
				         } else if(res.error === '新建账号异常') {
				         	if (!this.timer) {
				                this.count = TIME_COUNT;
				                this.code_first = false;
				                this.code_second = false;
				                this.click_first = true;
				                this.timer = setInterval(() => {
				                  if (this.count > 0 && this.count <= TIME_COUNT) {
				                    this.count--;
				                  } else {
				                  	this.click_first = false;
				                    this.code_second = true;
				                    clearInterval(this.timer);
				                    this.timer = null;
				                  }
				                }, 1000)
				              }
                           queryCode(params).then(res => {
								console.log(res.url)
								// 生成token 4位随机数+11位手机号码倒排+8位日期+6位随机数  Aes加密
								// 4位随机数 
								let numberStart = '';
								for (var i = 0 ;i < 4;i++) { 
								       numberStart += Math.floor(Math.random() * 10); 
								    } 
								// 6位随机数
								let numberEnd = '';
								for (var j = 0 ;j < 6;j++) { 
								       numberEnd += Math.floor(Math.random() * 10); 
								    } 
								// 8位日期
								let time = new Date();
								let year = time.getFullYear();
							    let month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
							    let day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
							    let dateNum = year + month + day;
							    // 11位手机号码倒排
							    let telphone = this.form.telphone.split('').reverse().join('');
							    // 生成token、
							    console.log(numberStart , telphone , dateNum , numberEnd)
							    let token = numberStart + telphone + dateNum + numberEnd;
							    console.log(token)
							    // aes加密
							    var CryptoJS = require("crypto-js");
								var plaintText = token;
								var key = CryptoJS.enc.Utf8.parse("jiexinab28823888");
								var options={
								    mode: CryptoJS.mode.ECB,
								    padding: CryptoJS.pad.Pkcs7
								};
								var encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
								var encryptedBase64Str = encryptedData.toString();
								console.log('encryptedBase64Str', encryptedBase64Str);
				         		let paramsCode = {
							        phone: this.form.telphone,
							        type: 0,
							        accountType: 3,
							        token: encryptedBase64Str
							      }	
							      // 动态获取验证码 
                               http.fetchPostPrimary(zed + res.url, paramsCode).then(res => {
                               	  console.log(res)
                               })
				         	})		
				         }
				      })
				}
			},
			// 点击注册
			register() {
				// 密码不可见
				if(this.form.password) {
					this.form.passwordText = this.form.password.replace(/\s+/g, "");
					console.log(this.form.passwordText)
				} 
				// 密码可见
				if(this.form.passwordInfo) {
					this.form.passwordText = this.form.passwordInfo.replace(/\s+/g, "");
					console.log(this.form.passwordText)
				} 
				if(!this.form.telphone) {
					Toast('请输入手机号');
					return;
				} else if(!checkPhone(this.form.telphone)) {
					console.log(this.form.telphone)
					Toast('请输入正确的手机号');
					return;
				} else if(!this.message_code) {
					Toast('请输入验证码'); 
					return;
				} else if(!(/(^\d{1,4}$)/.test(this.message_code))) {
					console.log(this.message_code)
					Toast('请输入正确的验证码');
					return;
				} else if(!this.form.passwordText) {
					Toast('请输入密码'); 
					console.log(this.form.passwordText)
					return;
				} else if((/(^\d{1,8}$)/.test(this.form.passwordText))) {
					console.log(this.form.passwordText)
					Toast('请输入正确的密码');
					return;
				} else if(!(/(^.{6,16}$)/.test(this.form.passwordText))) {
					console.log(this.form.passwordText)
					Toast('请输入正确的密码');
					return;
				} else {
					// 密码md5加密
					    var crypto = require('crypto');
			            var md5 = crypto.createHash("md5");
			            md5.update(this.form.passwordText);
			            this.passwordText = md5.digest('hex');
			            console.log(this.passwordText);
					Indicator.open({
					  text: '注册中...',
					  spinnerType: 'fading-circle'
					});
					let paramsRegisiter = {
							        phone: this.form.telphone,
							        code: this.message_code,
							        password : this.passwordText,
							        nickName : ''
							      }	
					setTimeout(() => {
						  Indicator.close();
						}, 2000);
						// 请求注册接口
					setTimeout(() => {
					  phoneRegistered(paramsRegisiter).then(res => {
						console.log(res)
						if(res.code === -1) {
							MessageBox({
										title: '',
									    message: res.error,
										showCancelButton: false,
										closeOnClickModal: false
									})
						} else if(res.code === 0) {
							console.log(res)
							Toast({
								  message: '注册成功 ',
								  iconClass: 'icon icon-success'
								});
							setTimeout(() => {
							  // 自动登录臻e盾
								let paramLogin = {
									        phone: this.form.telphone,
									        password : this.passwordText,
									        loginType: 3
									      } 
							    loginZed(paramLogin).then(res => {
							    	console.log(res)
							    	if(res.code === -1) {
							    		Toast(res.error)
							    	} else if(res.code === 0) {
							    		localStorage.setItem('customerKey', res.account.accountId);
							    		localStorage.setItem('accountTel', res.account.phone);
							    		this.$router.push('/carEvaluate');
							    	}
							     })
							}, 2000);
						     }
					     });
				   }, 3000);	
				}
			},
			// 点击登录
			goTo() {
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import './register.scss'
</style>