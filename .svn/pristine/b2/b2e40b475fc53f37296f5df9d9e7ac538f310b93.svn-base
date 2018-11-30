<template>
  <div>
      <!-- 选择时间 -->
    <div>
        <div class="labelStyle" style="background:#ffffff;">
            <!-- <datetime-range style="margin-left:.4rem;font-size:.6rem" placeholder="请选择时间" title="" :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange"></datetime-range> -->
            <selector class="leftNamesCard" style="font-size:.7rem;" title=""  :options="timeList" v-model="answerTime" @on-change='onChange'></selector>
        </div>
    </div>
    <!-- 列表 -->
    <div class="companyList">
        <ul>
            <li :key="index" v-for="(item,index) in company" @click="companyListClick(item)">
                <div class="companyDom">
                    <span>{{item.company}}</span>
                    <span>{{item.answeredcount}}/{{item.totalcount}}</span>
                    <span>{{item.percentage}}</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answerTime: '',
      company: [],
      timeList: []
    };
  },
  methods: {
  // 列表数据加载方法
    // companyListonLoad() {
    //   let geturl = "http://ntest.guoanfamily.com/examiner/statistics";
    //   this.$http.get(geturl).then(
    //     response => {
    //       if (response.status == 200) {
    //         console.log("1  response.body:",response.body);
    //         for (let i = 0; i < response.body.length; i++) {
    //           response.body[i].percentage =
    //             (response.body[i].examinerNum /
    //               response.body[i].peopleNum *
    //               100
    //             ).toFixed(2) + "%";
    //         }
    //         this.company = response.body;
    //         console.log("2  response.body:",response.body);
    //       } else {
    //         this.showalert(response.statusText);
    //       }
    //     },
    //     response => {
    //       this.showalert(response.statusText);
    //     }
    //   );
  // },
    // 获取时间接口方法
    timeListonLoad() {
      let geturl = this.baseUrl + "GetAnswerday";
      this.$http.get(geturl).then(
        response => {
          if (response.status == 200) {
            for(let i = 0;i<response.body.length;i++){
                this.timeList.push(response.body[i].createtime);
            }
            // console.log(this.answerTime);
            this.timeList.push(this.answerTime);
            this.timeList =  Array.from(new Set(this.timeList));
          } else {
            this.showalert(response.statusText);
          }
        },
        response => {
          this.showalert(response.statusText);
        }
      );
    },
    // 时间筛选的点击值变化事件
    onChange(value){
        // console.log(value);
        let fiLterUrl =this.baseUrl + "GetAnsweruserCount?answerday=" + this.answerTime;
        this.$http.get(fiLterUrl).then( res => {return res.json()})
        .then(res => {
          if(res.Data && res.Data) {
            this.company = this.handleListArr(res.Data.Totalcount, res.Data.Answeredcount) //列表数据
          }
        })
    },
    //列表数据加载
    handleListArr(totals, Answere) {
      // debugger
      totals.forEach((item, i) => {
        if(Answere && Answere.length > 0) {
          Answere.forEach(Item => {
            if(Item.company == item.company) {
              totals[i].answeredcount = Item.answeredcount
            }
          })
        }
        
        totals[i].percentage = (item.answeredcount / item.totalcount * 100).toFixed(2) + "%"
      })
      console.log(totals, 8666)
      return totals
    },
    // onChange(value){
    //     // console.log(value);
    //     let fiLterUrl =this.baseUrl + "GetAnsweruserCount?answerday=" + this.answerTime;
    //     this.$http.get(fiLterUrl).then(
    //     response => {
    //       if (response.status == 200) {
    //         if(response.body.length> 0){
    //             for (let i = 0; i < response.body.length; i++) {
    //               console.log(res.body, 899)
    //             response.body[i].percentage =
    //                 (response.body[i].examinerNum /
    //                 response.body[i].peopleNum *
    //                 100
    //                 ).toFixed(2) + "%";
    //             }
    //             this.company = response.body;
    //             console.log("3  response.body:",response.body);
    //         }else{
    //             this.msgalert('当天没有人答题');
    //         }
    //       } else {
    //         this.showalert(response.statusText);
    //       }
    //     },
    //     response => {
    //       this.showalert(response.statusText);
    //     }
    //   );
    // },
    // 跳转到公司的详情
    companyListClick(item){
        localStorage.removeItem('companyStaff');
        if(item.examinerList!== null){
            localStorage.setItem('companyStaff',JSON.stringify(item.examinerList));
            this.$router.replace('companylistdetials');
        }else{
            this.msgalert('该公司暂无答题记录');
        }
    },
    // 弹窗方法
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
    confirm() {
      let me = this;
      me.$vux.confirm.show({
        title: "提示信息",
        content: "您今天已经答过题了，再来一次？",
        // 组件除show外的属性
        onCancel() {},
        onConfirm() {
          me.$router.push("explain");
        }
      });
    }
  },
  mounted() {
    let date = new Date();
    let year = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate();
    this.answerTime = new Date().getDate();
    this.timeListonLoad();
    // GetAnsweruserCount?answerday=2017-11-27
    this.$http.get(this.baseUrl + 'GetAnsweruserDetail?company=国安城市').then(res => {
      console.log(res.body)
    })
  },
};
</script>

<style scoped lang="less">
.labelStyle {
  width: 100%;
  height: 2rem;
  // background:red;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #e6e6e6;
}
.companyList {
  width: 100%;
  margin-top: 2rem;
  li {
    list-style: none;
    width: 100%;
    // margin-left: 2%;
    height: 2rem;
    border-bottom: 1px solid #e6e6e6;
    .companyDom {
      width: 100%;
      height: 100%;
      line-height: 2rem;
      span {
        display: block;
        float: left;
      }
      span:nth-child(1) {
        width: 55%;
        color: #333333;
        font-size: 0.7rem;
        padding-left: .5rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span:nth-child(2) {
        width: 20%;
        font-size: 0.7rem;
        line-height: 2rem;
        text-align: center;
      }
      span:nth-child(3) {
        width: 25%;
        line-height: 2rem;
        color: red;
        font-size: 0.7rem;
        text-align: center;
      }
    }
  }
}
</style>
<style lang ='less'>
.labelStyle {
  .vux-cell-box {
    .weui-label {
      background: yellow;
      width: 0%;
    }
    span {
      display: block;
      width: 100%;
      height: 100%;
      text-align: left;
      font-size: 0.7rem;
      line-height: 2rem;
      padding-left: 1rem;
      font-weight: 500;
    }
  }
}
</style>
