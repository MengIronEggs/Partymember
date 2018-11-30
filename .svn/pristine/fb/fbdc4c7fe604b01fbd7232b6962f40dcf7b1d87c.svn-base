<template>
  <div class="bg" @click="next">
    <div class="erWeiMA">
      <img src="../assets/erweima.png" alt="">
    </div>
  </div>
</template>

<script>
import "../common/wxjump";
export default {
  data(){
      return{

      }
  },
  mounted() {
    // 云之家登录
  if (navigator.userAgent.indexOf("Qing") === 0) {
    try{
       XuntongJSBridge.call("getPersonInfo", {}, result => {
        this.name = result.data.name;
        this.openid = result.data.openId;
        localStorage.setItem("strategy_name", this.name);
        localStorage.setItem("strategy_tel", this.tel);
        localStorage.setItem("strategy_openId",this.openid);
        localStorage.setItem("strategy_photoUrl",result.data.photoUrl);
      });
    }catch(err){

    }
  }else{
    // 正式环境才去运行
    if(window.location.href.indexOf("localhost")==-1){

      window.$wxjump.getUserInfo();

    }
  }



  },
  methods:{
    next(){
      this.$router.replace({name:"Start"});
    }
  }
}
</script>

<style lang='less' scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("https://img.guoanfamily.com/quesAct/index02.jpg") no-repeat center/cover;
  .erWeiMA{
    position: absolute;
    width: 5.4*0.5rem;
    height: 7.15*0.5rem;

    bottom: 3.5rem;
    left: .7rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
