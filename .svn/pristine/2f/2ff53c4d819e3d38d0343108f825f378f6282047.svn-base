<template>
  <!-- 列表 -->
    <div class="companyList">
        <ul>
            <li :key="index" v-for="(item,index) in companyStaf">
                <div class="companyDom">
                    <span>{{item.company}}</span>
                    <span>
                        <span style="padding-top:5px;">{{item.name}}</span>
                        <span><a :href="'tel:' + item.phone">{{item.phone}}</a></span>
                    </span>
                    <span>{{item.createtime}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            companyStaf:[],
        }
    },
    created(){
        // console.log('134');
        let companStafArr =  JSON.parse(localStorage.getItem('companyStaff'));
        
        if(companStafArr!==null && companStafArr!=='null' && companStafArr!=='' && companStafArr!==undefined){
            this.companyStaf =  companStafArr;
        }
        // 
    },
    destroyed(){
        // console.log('12345')
        localStorage.removeItem('companyStaff');
    }
}
</script>

<style scoped lang = 'less'>
    .companyList {
  width: 100%;
  /* margin-top: 3rem; */
  li {
    clear: both;
    list-style: none;
    width: 100%;
    // margin-left: 2%;
    height: 2.5rem;
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
        width: 37%;
        color: #333333;
        font-size: 0.6rem;
        padding-left: .5rem;
        font-weight: 500;
        height: 2.5rem;
        line-height: 2.5rem;
      }
      span:nth-child(2) {
        width: 28%;
        font-size: 0.7rem;
        /* line-height: 2rem; */
        text-align: center;
        height: 2.5rem;
        span{
            display: block;
            float: left;
            width:100%;
            height: 1.2rem;
            line-height: 1.5rem;
            text-align: left;
            font-size: .6rem;
            padding:0;
        }
        span:nth-child(2){
            a{
                display: block;
                width:100%;
                height: 100%;
                color:#333333;
            }
        }
      }
      span:nth-child(3) {
        width: 32%;
        line-height: 2.5rem;
        color: red;
        font-size: 0.6rem;
        text-align: left;
      }
    }
  }
}
</style>
