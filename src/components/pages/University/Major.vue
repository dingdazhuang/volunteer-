<template>
  <div class="major">
    <div class="no-major" v-if="!MajorHotVOS && MajorHotVOS.length === 0">
      <Ecomponent>
        <div class="content">
          <img src="../../../assets/images/imgs/nodata.png" alt="">
          <div class="tit">该学校无优势专业</div>
        </div>
      </Ecomponent>
    </div>
    <ul v-if="MajorHotVOS && MajorHotVOS.length > 0" class="major-list">
      <li v-for="(v, index) in MajorHotVOS" :key="index">
        <span :class="[ index === 0 ? 'major-1' : '', index === 1 ? 'major-2' : '', index > 1 ? 'major-3' : '' ]">Top {{index + 1}}</span>{{v.majorName}}</li>
    </ul>
  </div>
</template>
<script>
import Ecomponent from '@/components/common/Ecomponent/Ecomponent'
export default {
  name: 'Major',
  components: {
    Ecomponent
  },
  data () {
    return {
      data: JSON.parse(sessionStorage.getItem('univercityInfo'))
    }
  },
  computed: {
    MajorHotVOS () {
      return this.data.hsMajorHotVOS
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.major {
  width: 100%;
  position: relative;
  background-color: #122657;
  .no-major{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  
  }
  .major-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li{
      width: 44%;
      font-size: 22px;
      padding: 22px 3%;
      span{
        font-size: 20px;
        display: inline-block;
        text-align: center;
        width: 72px;
        height:24px;
        line-height: 24px;
        margin-right: 16px;
        &.major-1 {
          background: url('../../../assets/images/advageMajor/major-1.png') no-repeat center;
        }
        &.major-2 {
          background: url('../../../assets/images/advageMajor/major-2.png') no-repeat center;
        }
        &.major-3 {
          background: url('../../../assets/images/advageMajor/major-3.png') no-repeat center;
        }
      }
    }
  }
}
</style>
