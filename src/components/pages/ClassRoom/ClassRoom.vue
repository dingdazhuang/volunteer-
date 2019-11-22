<template>
  <div class="classRoom">
    <ul class="video-list">
      <router-link to="/" tag='li' v-for="(item, index) in items" :key="index">{{item}}</router-link>
    </ul>
    <div class="video-show">
      <div class="tit">
        <h1>志愿课堂</h1>
        <h5>了解大学的层次</h5>
      </div>
      <div class="teacher">
        <img src="../../../assets/images/imgs/teacher.png" alt="">
      </div>
      <div class="video-box">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      items: ['如何选择自己喜欢的专业和学校', '如何选择自己喜欢的专业和学校', '如何选择自己喜欢的专业和学校', '如何选择自己喜欢的专业和学校',
      '如何选择自己喜欢的专业和学校', '如何选择自己喜欢的专业和学']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.classRoom {
  color: #fff;
  display: flex;
  .video-list{
    width: 350px;
    border-left: 1px solid rgba(255, 255, 255, .1);
    border-right: 1px solid rgba(255, 255, 255, .1);
    li{
      color: #fff;
      font-size: 22px;
      line-height: 30px;
      opacity: .5;
      padding: 22px 32px;
      &.active {
        background: #4444ff;
        opacity: 1;
      }
    }
  }
  .video-show{
    flex: 1;
    position: relative;
    padding: 0 38px 0 32px;
    .tit{
      h1{
        font-size: 40px;
      }
      h5{
        font-size: 24px;
        padding-top: 27px;
      }
    }
    .teacher{
      position: absolute;
      right: -10px;
      top: 0;
    }
    .video-box{
      width: 654px;
      height: 368px;
      margin: 180px auto 100px;
      background: #000;
    }
  }
}
</style>
