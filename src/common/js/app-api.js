;
(function(global, undefined) {

    // const zsfH5Url = ''

    const jiexin = {
        debug: 0,
        extdata: {},
        isIos: function() {
            const u = navigator.userAgent;
            const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            return isiOS;
        },
        isAndroid: function() {
            const u = navigator.userAgent;
            const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            return isAndroid;
        },
        openWindow: function(options) {
            //title url viewid extdata
            //打开新页面
            const self = this;
            let optionsStr;
            if (options.extdata) {
                options.extdata = JSON.stringify(options.extdata);
            }
            optionsStr = JSON.stringify(options);
            if (self.debug == 1) {
                location.href = options.url || options;
            } else if (self.isIos()) {
                pushViewController(optionsStr);
            } else if (self.isAndroid()) {
                htmlToJava.getURLAndTitle(optionsStr);
            }
        },
        openShare: function(options) {
            const self = this;
            let optionsStr;
            if (options.extdata) {
                options.extdata = JSON.stringify(options.extdata);
            }
            optionsStr = JSON.stringify(options);
            if (self.debug == 1) {
                location.href = options.url || options;
            } else if (self.isIos()) {
                pushViewController(optionsStr);
            } else if (self.isAndroid()) {
                htmlToJava.getURLAndTitle(optionsStr);
            }
        },
        updateBackView: function(viewid) {
            const self = this;
            //修改历史返回界面 viewid
            const optionsStr = JSON.stringify({ viewid: viewid });
            if (self.isIos()) {
                updataBackViewController(optionsStr);
            } else if (self.isAndroid()) {
                htmlToJava.setActivityCount(viewid);
            }
        },
        back: function(viewid) {
            //返回 可传viewid
            const self = this;
            if (self.isIos()) {
                if (viewid) {
                    updataBackViewController(JSON.stringify({ viewid: viewid }));
                } else {
                    popViewController();
                }
            } else if (self.isAndroid()) {
                if (viewid) {
                    htmlToJava.setActivityCount(viewid);
                } else {
                    htmlToJava.returnActivity();
                }
            }
        },
        addEvent: function(eventName, callback) {
            //添加自定义事件
            const self = this;
            window.addEventListener(eventName, function() {
                if (callback) {
                    callback(self.extdata);
                }
            });
        },
        fireEvent: function(eventName, viewid, extdata) {
            //触发自定义事件
            const self = this;
            if (extdata) {
                extdata = JSON.stringify(extdata);
            } else {
                extdata = "0";
            }
            const optionsStr = JSON.stringify({
                eventName: eventName,
                viewid: viewid,
                extdata: extdata
            });
            //触发原生方法传递参数
            if (self.isIos()) {
                fireEventController(optionsStr);
            } else if (self.isAndroid()) {
                htmlToJava.fireEvent(eventName, viewid, extdata);
            }
        },
        returnEvent: function(eventName, extdata) {
            //原生调用返回参数触发方法
            const self = this;
            if (eventName == 'getSession') {
                window.getSession(extdata);
                return;
            }
            const event = new Event(eventName);
            if (extdata.match("^\{(.+:.+,*){1,}\}$")) {
                extdata = JSON.parse(extdata);
            }
            self.extdata = extdata;
            window.dispatchEvent(event);

        },
        sessionFail: function() {
            const self = this;
            //登录过期 未登录
            if (self.isIos()) {
                presentLoginViewController();
            } else if (self.isAndroid()) {
                htmlToJava.HtmlToLogin();
            }
        },
        getSession: function() {
            const self = this;
            if (self.isIos()) {
                getSessionId();
            } else if (self.isAndroid()) {
                htmlToJava.HtmlGetSessionId();
            }
        },
        setFontSize: function() {
            // 移动端自适应
            const oHtml = document.documentElement;
            const screenWidth = oHtml.clientWidth;
            if (screenWidth <= 375) {
                oHtml.style.fontSize = 10 + 'px';
            } else if (screenWidth >= 750) {
                oHtml.style.fontSize = 20 + 'px';
            } else {
                oHtml.style.fontSize = screenWidth / 750 * 20 + 'px';
            }
        },
        getUrlParam: function(name) {
            // 获取url参数
            const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            const r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        ringup_popup: function(phoneNum) {
            // 模拟电话弹框
            const shade = $('<div class="shade"></div>');
            const ringup = $('<div class="ringup"></div>');
            const phone = $('<div class="phone"></div>');
            const phoneNumber = $('<span class="phoneNumber">' + phoneNum + '</span>');
            const manageBox = $('<div class="manageBox"></div>');
            const cancel = $('<a href="javascript:;" class="btn cancel">取消</a>');
            const call = $('<a href="tel:' + phoneNum + '" class="btn call">呼叫</a>');
            manageBox.append(cancel);
            manageBox.append(call);
            phone.append(phoneNumber);
            ringup.append(phone);
            ringup.append(manageBox);
            $('body').append(shade);
            $('body').append(ringup);
            cancel.on('click', function() {
                shade.remove();
                ringup.remove();
                $('body').off('touchmove');
            });
            $('body').on('touchmove', function(e) {
                e.preventDefault();
            });
        },
        didFinishLoad: function(sessionId, adcode) {
            let self = this;
            self.sessionId = sessionId;
            self.adcode = adcode;
        }
    };

    window.jiexin = jiexin;

    if (jiexin.debug == 1) {
        window.onload = function() {
            jiexin.returnEvent('ready', 0);
        }
    }
})(window);