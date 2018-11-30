import Vue from "vue"
export default class {
    constructor() {

    }
    install(Vue) {
        this.installPrototype(Vue); //ajax
    }
    installPrototype(Vue) {
        Vue.prototype.ShearPost = (url, data = {}) => {
            return fetch("https://www.guoanfamily.com/" + url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(function(response) {
                return response.json();
            }).then(res => {
                Vue.$vux.loading.hide()
                if (res.Code === 200) {
                    return res
                }
                return res;
            }).catch((err) => {
                Vue.$vux.loading.hide()
                Vue.$vux.toast.text(
                    '请求错误：' + err.response.status + ',' + err.response.statusText, 'middle')
                console.error(err);
            })

        };
        Vue.prototype.WxShare = () =>{

            // alert('ddkekwkek')
            fetch('https://act.guoanfamily.com/openweixin/jsapi/getJsapiSignature?local_url=' + encodeURIComponent(location.href.split('#')[0]),
              {}).then(response => {
           return response.json();

            }).then((json) => {
              wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: json.appid, // 必填，公众号的唯一标识
                timestamp: parseInt(json.timestamp), // 必填，生成签名的时间戳
                nonceStr: json.noncestr, // 必填，生成签名的随机串
                signature: json.signature, // 必填，签名，见附录1
                jsApiList: [
                  'onMenuShareAppMessage',
                  'onMenuShareTimeline'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              })
              wx.ready(function () {
                // alert(title + desc + link + Imgurl)
                // 2. 分享接口
                // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareAppMessage({
                  title: '在线学习竞赛',
                  desc: '中国共产党记录处分条例', // 描述
                  link: 'https://mt.guoanfamily.com/questionswap/',
                  imgUrl: 'https://img.guoanfamily.com/quesAct/index02.jpg',
                  trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                  },
                  success: function (res) {
                  },
                  cancel: function (res) {
                  },
                  fail: function (res) {
                  }
                })
                // 分享到朋友圈
                wx.onMenuShareTimeline({
                    title: '在线学习竞赛',
                    desc: '中国共产党记录处分条例', // 描述
                    link: 'https://mt.guoanfamily.com/questionswap/',
                    imgUrl: 'https://img.guoanfamily.com/quesAct/index02.jpg',
                  trigger: function (res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                  },
                  success: function (res) {
                  },
                  cancel: function (res) {
                  },
                  fail: function (res) {
                  }
                })
                wx.error(function (res) {
                })
              })
            }).catch((error) => {
            //   alert(error + '123')
            })
          }

        Vue.prototype.baseUrl = "https://mt.guoanfamily.com/questions/";
        // Vue.prototype.baseUrl = "http://172.16.44.233:9095/";
    }
}