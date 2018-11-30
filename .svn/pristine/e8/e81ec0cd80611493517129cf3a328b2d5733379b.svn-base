<template>
    <div class="bg end">
        <div class="masks" v-show="isMask" @click="clearmask">
            点击右上角进行分享
        </div>
        <div class="finish">
            <div class="finish_text"></div>
            <div class="finish_result">
                <span class="titles myfont">用时：</span>
                <span class="msg myfont"> &nbsp;{{countTime}}</span>
            </div>
            
        </div>
        <div class="paihang">
            <personList  v-if="isShow"></personList> 
        </div>
        <div class="position">
            <button class='button1' @click="nextShare" >立刻分享</button>
        </div>
  </div>
</template>
<script>
import personList from './personList'
export default {
 data(){
     return {
        num1:[1,2,3,4,5],
        num:[],
        day:null,
        countTime: 0,
        runk:1,
        Answerday: 0,
        isShow: false,
        isMask: false,
     }
 },
 components: {
    personList,
 },
 methods:{


    showList(){
        this.$router.replace({ path: "personList"})
    },
    nextShare(){
      this.isMask = true;
    },
    clearmask() {
        this.isMask = false;
    },
    shs(s){
    //计算分钟
    //算法：将秒数除以60，然后下舍入，既得到分钟数
    var h;
    h  =   Math.floor(s/60);
    //计算秒
    //算法：取得秒%60的余数，既得到秒数
    s  =   s%60;
    //将变量转换为字符串
    h    +=    '';
    s    +=    '';
    //如果只有一位数，前面增加一个0
    h  =   (h.length==1)?'0'+h:h;
    s  =   (s.length==1)?'0'+s:s;
    return h+"' "+s+ '"';
}
 },
 mounted(){
    this.countTime =  this.shs(Number(this.$route.query.countTime))
    this.Answerday = new Date().getDate()
    let Url = this.baseUrl+"RlistSave";
    let Company = localStorage.getItem("strategy_company");
    let Username = localStorage.getItem("strategy_name");
    let Depart = localStorage.getItem("strategy_department");
    let imageurl = localStorage.getItem("strategy_photoUrl");
    let pData = {
        Company,
        Depart,
        Username,
        Costtime: this.$route.query.countTime,
        Answerday: this.Answerday, 
    }
    if(!imageurl) {
       pData.imageurl = 'https://img.guoanfamily.com/touxiang.jpg'
    }else{
        pData.imageurl = imageurl
    }
    console.log(111,pData);
    this.$http.post(Url,pData).then(res=>{
         console.log(111,res);
         if(res.status==200){
            this.isShow = true
            this.runk = res.body.Data.rank;
            console.log( this.runk)
         }

     })
     for(let i=0;i<this.day;i++){

        this.num.push(0);
     }
 }
}
</script>

<style scoped lang="less">

.bg{
    position: fixed;
    width: 100%;
    height: 100%;

}
.masks{
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    line-height: 400px;
    font-size: 1.5rem;
    color: #fff;
    z-index: 999;
    width: 100%;
}
.end{
    background: url("https://img.guoanfamily.com/quesAct/login02.jpg")  center no-repeat/cover;

}
.finish{
    position: absolute;
    left: 0;
    top: 5.5rem;
    height:5rem;
    width: 100%;
    padding: 0 8%;
    .finish_text{
        width: 100%;
        height: 3rem;
        background: url("../assets/finished.png") center no-repeat/ 100%;
        // margin-bottom:  1.2rem;
    }
    .finish_result{

        height: 1.8rem;
        span{
            color: #E3CC8A;
            float: left;
            line-height: 1.8rem;
            width: 50%;
        }
        .titles{

            text-align: right;
        }
        .msg{

            text-align: left;

        }
    }

}
.paihang{
    position: absolute;
    bottom: 13%;
    left: 0%;
    height: 12rem;
    width: 100%;
}
.position {
    margin-top: 1rem;
    width: 100%;
    height: 1.5rem;
    padding: 0 2.2rem;
    position: absolute;
    bottom: 1rem;
    left: 0;

}
.position button{
    color: #E3CC8A;
    width: 5.3rem;
    font-size: 0.7rem;
    height: 1.5rem;
    box-shadow: 1px 1px 1px #555;
    border:none;
    // border-bottom: 1px solid #333;
    // border-right: 1px solid #333;
    background: url("../assets/BbtnBg.jpg") center no-repeat/100% 100%;

}
.button1{
    margin-left: 27%;
    text-align: center
}

</style>

