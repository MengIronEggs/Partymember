<template>
  <div id="app" class="app" style="height: 100%;">
    <div v-show="false">
      <img src="https://img.guoanfamily.com/quesAct/index02.jpg" alt>
      <img src="https://img.guoanfamily.com/quesAct/login02.jpg" alt>
      <img src="https://img.guoanfamily.com/quesAct/second.jpg" alt>
      <img src="https://img.guoanfamily.com/quesAct/Awsers02.jpg" alt>
    </div>
    <transition name="fade">
      <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import { ViewBox } from 'vux';
export default {
  components: {
    ViewBox
  },
  data() {
    return {
      direction: 'forward',
      tostack: [],
      hlenght:0
    }
  },
  mounted() {
    this.WxShare()
    // this.wxduanShare()
    this.$router.beforeEach((to, from, next) => {
      //初始化时放入当前地址,多数为'/'
      if(this.tostack.length==0){
        this.tostack.push(from.path)
      }
      if (this.tostack.length>1&&this.tostack[this.tostack.length-2]==to.path) {
        this.tostack.pop();
        this.direction = 'backward';
      }else{
        this.tostack.push(to.path);
        this.direction = 'forward';
      }
      next();


    });
  },
  methods:{
     // 微信端的分享
    // wxduanShare() {
    //   let self = this;
    //   this.ShearPost(
    //     "openweixin/jsapi/getJsapiSignature?local_url=" +
    //         encodeURIComponent(location.href.split("#")[0]),
    //     {}
    //   ).then(response => {
    //     this.$wechat.config({
    //         debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: response.appid, // 必填，公众号的唯一标识
    //         timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
    //         nonceStr: response.noncestr, // 必填，生成签名的随机串
    //         signature: response.signature, // 必填，签名，见附录1
    //         jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     });
    //     this.$wechat.ready(() => {
    //         // 分享给朋友
    //         self.$wechat.onMenuShareAppMessage({
    //             title: "中国共产党记录处分条例", //标题
    //             desc: "中国共产党记录处分条例考试", //描述
    //             link:  'https://mt.guoanfamily.com/questionswap/', //连接地址指打开分享时页面地址
    //             imgUrl: "https://img.guoanfamily.com/quesAct/index1.jpg", //图片
    //             trigger(res) {
    //                 // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    //             },
    //             success(res) {

    //             },
    //             cancel(res) {
    //               self.msgalert("已取消");
    //             },
    //             fail(res) {
    //                 self.msgalert("分享失败");
    //             }
    //         });
    //         // 分享到朋友圈
    //         self.$wechat.onMenuShareTimeline({
    //             title: "中国共产党记录处分条例", //标题
    //             desc: "中国共产党记录处分条例考试", //描述
    //             link:  'https://mt.guoanfamily.com/questionswap/', //连接地址指打开分享时页面地址
    //             imgUrl: "https://img.guoanfamily.com/quesAct/index1.jpg", //图片
    //             trigger(res) {
    //                 // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    //             },
    //             success(res) {

    //             },
    //             cancel(res) {
    //                 self.msgalert("已取消");
    //             },
    //             fail(res) {
    //                 self.msgalert("分享失败");
    //             }
    //           });
    //           self.$wechat.error(function(res) {});
    //       });
    //   });
    // },
    // 提示
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    },
  }

}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
* {
    box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  // -webkit-overflow-scrolling: touch;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.router-view {
  width: 100%; //top: 46px;
}
.app{
  -webkit-overflow-scrolling : touch;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%; //top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.menu-title {
  color: #888;
}
</style>
