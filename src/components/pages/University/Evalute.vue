<template>
  <div class="evalute">
     <div class="content">
        <div class="stu-info" v-for="v in uniInfo" :key="v.id">
          <div class="pic">
            <img :src="v.profilePic" alt="">
          </div>
          <div class="detail">
            <div class="part1">
              <ul>
                <li>{{v.userGraduationTime}}</li>
                <li class="mark">
                  <div>{{v.userDegree}}</div>
                  <div>{{v.majorName}}</div>
                </li>
              </ul>
              <ul class="">
                <li>院校评分：{{v.universityScore}}</li>
                <li>专业评分：{{v.majorScore}}</li>
              </ul>
            </div>
            <div class="part2">
              <h1>学校印象：</h1>
              <div>{{v.universityImpression}}</div>
            </div>
            <div class="part3">
              <h1>专业印象：</h1>
              <div>{{majorImpression}}</div>
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
   }
}
</style>
