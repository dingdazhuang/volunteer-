<template>
  <div class="treate">
    <table>
      <thead>
        <th>
          <td>批次</td>
          <td>专业名称</td>
          <td>计划数</td>
          <td>最低分</td>
          <td>最低位次</td>
        </th>
      </thead>
      <tbody>
        <tr>
          <td>第一段</td>
          <td>计算机电子信息技术</td>
          <td>28</td>
          <td>658</td>
          <td>24680</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div class="">共找到<span>28条</span>录取数据</div>
      <div>
        <a href="">上一页</a>
        <a href="">下一页</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'treate',
  data () {
    return {
      data: JSON.parse(sessionStorage.getItem('univercityInfo')),
      universityId: sessionStorage.getItem('univercityId')
    }
  },
  methods: {
    getData () {
      const _this = this
      this.$axios.get('https://api.yunzhiyuan100.com/api/3.0/hs/history/major?univercityId=vvCH4&p=0&s=5').then(res => {
        console.log(1, res, _this)
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
