<template>
  <div class="envior">
     <div class="without" v-if="!uniPic || uniPic.length === 0">
       <div class="widthout-content">
        <img src="../../../assets/images/schoolEvior/withoutEvior.png" alt="">
        <div class="tit">暂无学校图片</div>
       </div>
     </div>
     <div class="uniPic">
       <img :src="v.pics" alt="" v-for="(v, index) in uniPic" :key="index">
     </div>
  </div>
</template>
<script>
export default {
  name: 'envior',
  data () {
    return {
      uniPic: ''
    }
  },
  methods: {
    initData () {
      this.uniPic = JSON.parse(sessionStorage.getItem('univercityInfo')).univPics
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.envior{
    .without{
    display:flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
