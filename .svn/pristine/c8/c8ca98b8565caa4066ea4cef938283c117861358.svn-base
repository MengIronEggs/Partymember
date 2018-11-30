<template>
    <div class="bg QuestionList">
        <span class="times">{{times}} 秒</span>
        <span class="num">{{this.getNum}}/{{questionNum}}</span>
        <div class="blank">
          <p style="font-size:.6rem;line-height:.6rem;color:red;" v-show="Multiple">(该题目为多选题)</p>
        </div>
        <div class="content" v-if="isshow">
          <transition name="slide-fade">
            <div class="questions" v-if="questionContent">
                <p style="height:0.2rem"></p>
                <group :title="title1">
                    <radio :options="answerList"  v-model="answer" v-show="Radios" @on-change="change"></radio>
                    <checklist :label-position="labelPosition" v-show="Multiple" required :options="answerList" v-model="checklist001" @on-change="Chackchange"></checklist>
                </group>
            </div>
          </transition>
        </div>
        <div v-show="Multiple" style="width:100%;height:2.75rem;text-align:center;padding-top:.25rem;">
            <button class="onButton" @click="sunClick()"></button>
            <!-- <p style="font-size:.6rem;line-height:.6rem;color:#fff;" v-show="Multiple">该题目为多选题</p> -->
        </div>
    </div>
</template>
<script>
import { XButton, Radio, Group, Checklist } from "vux";
import { clearInterval, setTimeout, setInterval } from 'timers';
export default {
  components: {
    XButton,
    Radio,
    Group,
    Checklist
  },
  data() {
    return {
      Qlength:0,
      getNum:0,
      Radios: false,
      isshow: true,
      Multiple: false,
      checklist001: [],
      MultipleArr: [],
      labelPosition: "left",
      questionContent: false,
      times: 0,
      // 页码
      questionNum: 1,
      // 标题集合
      titles: [],
      // 选项集合
      answers: [],
      title1: "", //"1、在全国消费升级的情况下，什么样的产业升级最心动？",
      answerList: [], //["A、一站式服务", "B、深耕行业", "C、坚持传统模式"],
      correctanswer: [],
      answer: "",
      myanswer: "",
      currentPage: 1,
      name: "",
      tel: "",
      company: "",
      openid: "",
      setTimeouts:"",
      startime: 0,
      totalTime: 0, //总时间
      errorAnswer: [], // 错题选项
      errorTitles: [], // 错题问题
      errorcorrect: [], // 错题答案
      //   buttonText: "下一题"
    };
  },
  methods: {
    qolt() {
      let geturl = this.baseUrl+"GetQuestionsWhere";
      this.$http.get(geturl).then(
        response => {
          if (response.status == 200) {
            if (response.body.Data.length > 0) {
              this.Qlength = response.body.Data.length
              for (let i = 0; i < response.body.Data.length; i++) {
                //  问题集合
                this.titles.push(response.body.Data[i].content);
                //  选项集合
                let arr = [];
                if (response.body.Data[i].a) {
                   arr.push({
                    key: "A",
                    value: "A、" + response.body.Data[i].a
                  });
                }

                if (response.body.Data[i].a) {
                  arr.push({
                    key: "B",
                    value: "B、" + response.body.Data[i].b
                  });
                }

                 if (response.body.Data[i].c) {
                    arr.push({
                      key: "C",
                      value: "C、" + response.body.Data[i].c
                    });
                 }

                if (response.body.Data[i].d) {
                  arr.push({
                    key: "D",
                    value: "D、" + response.body.Data[i].d
                  });
                }
                if (response.body.Data[i].e) {
                  arr.push({
                    key: "E",
                    value: "E、" + response.body.Data[i].e
                  });
                }
                this.answers.push(arr);
                // 答案集合
                this.correctanswer.push(response.body.Data[i].answer);


              }
              console.log('答案集合',this.correctanswer, this.answers)
              this.title1 = this.currentPage+"、"+ this.titles[0];
              this.answerList = this.answers[0];
              if (this.correctanswer[0].length > 1) {
                this.Multiple = true;
                this.Radios = false;
              } else {
                this.Multiple = false;
                this.Radios = true;
              }
              //  this.setTime()
            } else {
              this.msgalert("您已经答过题了");
              history.go(-1);
            }
          } else {
            this.showalert(response.statusText);
          }
        },
        response => {
          this.showalert(response.statusText);
        }
      );
    },
    change(val, label) {
      this.questionContent = false;
      this.myanswer = val;
      //  console.log(this.myanswer,this.answer, 777)
      // 判断答案是否匹配
      if (this.myanswer !== this.correctanswer[this.questionNum - 1]) {
        this.msgalert("很抱歉，回答错误");
        this.answers.push(this.answers[this.questionNum - 1])
        this.titles.push(this.titles[this.questionNum - 1])
        this.correctanswer.push(this.correctanswer[this.questionNum - 1])
        this.Qlength++
        // console.log(this.answers[this.questionNum - 1], this.titles[this.questionNum - 1], this.correctanswer[this.questionNum - 1],23232)
      }else{
        this.getNum+=1
      }
      if (this.questionNum < this.Qlength) {
        if (this.correctanswer[this.questionNum].length > 1) {

          this.Multiple = true;
          this.Radios = false;
          
        } else {
          this.Multiple = false;
          this.Radios = true;
        }
      }
      this.checklist001 = [];

      //清空答案
    this.myanswer = "";
    // 判断是否答题成功
    if(this.getNum >= 10) { 
      this.countTime()
      this.$router.replace({ path: "end", query: {countTime: this.countTime} } );
      return false
    }
   
     //设置题目和答案
      if (this.currentPage == this.Qlength) {
        var num = this.errorAnswer.length
        this.showalert(`您本轮答题共做错了${num}道，请点击确定继续答题`)
        // this.repeatQuestion() // 重复错题
      } else if (this.currentPage <this.Qlength) {
        this.questionNum++;
        this.currentPage += 1;
        this.title1 = this.currentPage+"、"+ this.titles[this.currentPage - 1];
        this.answerList = this.answers[this.currentPage - 1];
        let timer = setTimeout(() => {
          this.questionContent = true;
          this.answer = "";
          window.clearTimeout(timer)
        }, 1000);
      }

    },
    Chackchange(val, label) {
      this.MultipleArr = val;
    },
    sunClick() {
      let answers = this.MultipleArr;
      let a = true;
      let correctanswer = this.correctanswer[this.questionNum-1].split("");
      correctanswer = correctanswer.sort();
      answers = answers.sort();
      console.log(correctanswer.length!=answers.length)
      // 判断长度
      if(correctanswer.length!=answers.length){
        a = false;
      };
      let flage = true;
      if(a){
        answers.forEach((ele ,i)=> {
          if(ele!=correctanswer[i]){
            flage =  false
          }
        });
        a = flage
      }

      if (!a) {
        this.msgalert("很抱歉，回答错误");
        this.answers.push(this.answers[this.questionNum - 1])
        this.titles.push(this.titles[this.questionNum - 1])
        this.correctanswer.push(this.correctanswer[this.questionNum - 1])
        this.Qlength++
        console.log(this.answers[this.questionNum - 1], 23232)
      }else{
        this.getNum+=1;
      }
      this.questionContent = false;
      if (this.questionNum < this.Qlength) {
        if (this.correctanswer[this.questionNum].length > 1) {
          this.Multiple = true;
          this.Radios = false;
        } else {
          this.Multiple = false;
          this.Radios = true;
        }
      }
      this.checklist001 = [];


      //清空答案
      this.myanswer = '';
      // 判断是否答题成功
      if(this.getNum >= 10) {
        this.countTime()
        this.$router.replace({ path: "end", query: {countTime: this.countTime} } );
        return false
      }
      //设置题目和答案
      if (this.currentPage == this.Qlength) {
        var num = this.errorAnswer.length
        this.showalert(`您本轮答题共做错了${num}道，请点击确定继续答题`)
        this.repeatQuestion()
      } else if (this.currentPage < this.Qlength) {
        this.questionNum++;
        this.currentPage += 1;
        this.title1 = this.currentPage+"、"+ this.titles[this.currentPage - 1];
        this.answerList = this.answers[this.currentPage - 1];
        let timer2 = setTimeout(() => {
          this.questionContent = true;
          this.answer = "";
          window.clearTimeout(timer2)
        }, 1000);
      }

    },
    // // 循环错题
    // repeatQuestion() {
    //   this.isshow = false;
    //   console.log(this.errorAnswer, this.errorTitles,5655)
    //   this.answers = []
    //   this.Qlength = this.errorAnswer.length
    //   this.questionNum = 1
    //   this.currentPage = 1
    //   this.answers = this.errorAnswer
    //   this.titles = this.errorTitles
    //   this.correctanswer = this.errorcorrect

    //   //清空答案
    //   this.myanswer = '';
    //   this.answer = '';
    //   let timer3 = setTimeout(() => {
    //     this.clearRepeat()
    //     // console.log(this.answers, this.titles,5655)
    //     this.isshow = true;
    //     this.questionContent = true;
    //     window.clearTimeout(timer3)
    //   }, 1000);
    // },
    //清除错题重复
    clearRepeat() {
      this.errorAnswer = []
      this.errorTitles = []
      this.errorcorrect = []
    },
    // 总时间
    countTime() {
      var endtime = new Date().getTime();
      this.countTime = parseInt((endtime - this.startime) / 1000) - 1

      console.log(endtime, this.countTime)
    },
    // 保存信息

  // // 计时器
    setTime() {
      let me = this;
      window.clearInterval(this.setTimeouts);
      this.setTimeouts = setInterval(function() {
        me.times++;
        if(this.getNum >= 15) {
          window.clearInterval(this.setTimeouts);
        }
      }, 1000);
    },

  // 提示窗口
    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    },
  },
  mounted() {
    //调用后台接口，获取会议信息、权限及是否已经签到
    // this.msgalert('您已经打过题了');
    // history(-1);
    document.body.scrollTop = '0'; 
    this.company = this.$route.query.company;
    this.tel = this.$route.query.tel;
    this.name = this.$route.query.name;
    // alert(this.company.toString() + this.tel + this.name);
    // this.setTime();
    // // this.questionOnLoad();
    this.qolt()
    this.startime = new Date().getTime(); // 获取开始时间
    console.log(this.startime,'22')
    setTimeout(() => {
      this.questionContent = true;
    }, 500);
    this.setTime()
  },
 
};
</script>

<style scoped lang='less'>
.questions {
  width: 92%;
  margin: 0 auto;
  // background: red;
  border-radius: 10px;
  transition: 0.9s;
}
// .question {
//   left: 10%;
// }
// .rightquestion {
//   right: -80%;
// }
.weui-btn_warn {
  background-color: #ec0011;
  font-weight: 500;
}
.times {
  display: block;
  position: fixed;
  left: 1rem;
  top: 0.9rem;
  font-size: 18px;
  color: #333333;
}
.num {
  display: block;
  position: fixed;
  right: 1rem;
  top: 0.9rem;
  font-size: 18px;
  color: #333333;
}
.bg {
  // position: relative;
  height: 100%;
  width: 100%;
  // padding-top:6rem;
  // overflow: auto;
  /* height: 100%; */
  height: 100%;
  // background: url("https://img.guoanfamily.com/image/ks/bj1.png") no-repeat top;
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;
}
.QuestionList{
   background: url("https://img.guoanfamily.com/quesAct/Awsers02.jpg") top center no-repeat /cover;
}
.blank{
  height: 6.6rem;
  width: 100%;
  position: relative;
  p{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
  }
}
.content{
  flex: 1;
  overflow: auto;
}
.onButton {
  width: 6rem;
  height: 50px;
  background: url("../assets/queren.png") no-repeat center;
  background-size: cover;
  border-radius: 10px;
  border: none;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<style lang="less">
  .questions>div{
    height: auto;
  }
  .weui-cells__title {
  font-size: 16px !important;
}
.weui-cells {
  font-size: 16px !important;
  border-radius: 10px;
}
</style>
