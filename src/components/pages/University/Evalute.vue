<template>
  <div class="evalute">
     <div class="content">
        <div class="stu-info" v-for="v in uniInfo" :key="v.id">
          <div class="pic">
            <img :src="v.profilePic" alt="">
          </div>
          <div class="detail">
            <div class="part1">
              <ul class="time-list">
                <li class="userGraduationTime">{{v.userGraduationTime}}</li>
                <li class="mark">
                  <div>{{v.userDegree}}</div>
                  <div>{{v.majorName}}</div>
                </li>
              </ul>
              <ul class="score-list">
                <li>院校评分：<span class="score">{{v.universityScore}}</span></li>
                <li>专业评分：<span class="score">{{v.majorScore}}</span></li>
              </ul>
            </div>
            <div class="part2 part-info">
              <h1>学校印象：</h1>
              <div>{{v.universityImpression}}</div>
            </div>
            <div class="part3 part-info">
              <h1>专业印象：</h1>
              <div>{{v.majorImpression}}</div>
            </div>
          </div>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'evalute',
  data () {
    return {
      universityId: sessionStorage.getItem('univercityId'),
      uniInfo: ''
    }
  },
  methods: {
    initData () {
      const _this = this
      console.log(1, sessionStorage.getItem('univercityId'))
      this.$axios.get('https://api.yunzhiyuan100.com/api/3.0/hs/university/evaluate', { params: { universityId: _this.universityId, p: 0, s: 10 } }).then(res => {
      // this.$axios.get('https://api.yunzhiyuan100.com/api/3.0/hs/university/evaluate?universityId=vvCH4&p=0&s=10').then(res => {
        console.log(res.data.result.evaluates)
        _this.uniInfo = res.data.result.evaluates
        console.log(_this.uniInfo)
      })
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.evalute{
   .stu-info{
     display: flex;
     padding:10px 0;
     .detail{
       flex: 1;
     }
     .pic {
       width: 64px;
       height: 64px;
       overflow: hidden;
       border-radius: 50%;
       margin-right: 16px;
       img{
         width: 100%;
         height: 100%;
         object-fit: cover;
       }
     }
     .userGraduationTime{
       font-size: 22px;
     }
     .time-list{
       display:flex;
       justify-content: flex-start;
       li:first-child{
         margin-right: 29px;
       }
       li.mark{
         display: flex;
         justify-content: flex-start;
         div {
           background: #ff4444;
           color: #fff;
           font-size: 16px;
           margin-right: 12px;
           padding: 4px 8px 2px 8px;
           border-radius: 3px;
         }
       }
     }
     .score-list{
       display: flex;
       justify-content: flex-start;
       padding-top: 10px;
       li {
         font-size: 16px;
         margin-right: 60px;
         &:last-child{
           margin-right: 0;
         }
         .score {
           color:#ffdd00;
         }
       }
     }
     .part-info{
       line-height: 45px;
       h1{
         font-size: 20px;
       }
       div{
         font-size: 18px;
       }
     }
   }
}
</style>
