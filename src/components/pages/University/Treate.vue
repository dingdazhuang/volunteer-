<template>
  <div class="treate">
    <div class="no-info">
      <!-- <Ecomponent> -->

      <!-- </Ecomponent> -->
    </div>
    <table>
      <thead>
        <tr>
          <td>批次</td>
          <td>专业名称</td>
          <td>计划数</td>
          <td>最低分</td>
          <td>最低位次</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in majorData" :key="v.majorId">
          <td>{{v.majorName.slice(1, 4)}}</td>
          <td>{{v.majorName.slice(5)}}</td>
          <td>{{v.jihuashu}}</td>
          <td>{{v.zuidifen}}</td>
          <td>{{v.zuidiweici}}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div class="">共找到<span>{{majorData.length || null}}条</span>录取数据</div>
      <div>
        <a href="">上一页</a>
        <a href="">下一页</a>
      </div>
    </div>
  </div>
</template>
<script>
// import Ecomponent from '@/components/common/Ecomponent/Ecomponent'
export default {
  name: 'treate',
  data () {
    return {
      data: JSON.parse(sessionStorage.getItem('univercityInfo')),
      universityId: sessionStorage.getItem('univercityId'),
      majorData: ''
    }
  },
  methods: {
    getData () {
      const _this = this
      console.log('6', this.data)
      console.log(this.univercityId)
      this.$axios.get('https://api.yunzhiyuan100.com/api/3.0/hs/history/major', { params: { universityId: _this.universityId, p: 0, s: 10 } }).then(res => {
        console.log(1, res, _this)
        _this.majorData = res.data.result.major.list
        console.log(_this.majorData)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.treate{
  width: 100%;
  table {
    width: 100%;
    background: #14305e;
    text-align: center;
    tbody{
      color: #fff;
      font-size: 22px;
      tr{
        td{
          line-height:60px;
        }
      }
    }
  }
  .pagination{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    span{
      color:#ffdd00;
    }
    a{
      color:#fff;
      opacity: .5;
      padding:7px 19px 6 18px;
      &.active{
        opacity: 1;
        background: #4444ff;
      }
    }
  }
}
</style>
