<template>
  <div class="recommend">
    <div class="left-search">
      <h1>高考选科(7选3)及分数</h1>
      <div class="check-box">
        <div class="check" v-for="(checkbox, index) in checkboxes" :key="index">
          <input type="checkbox" :checked="checkbox.checked"> <label for="">{{checkbox.text}}</label>
        </div>
      </div>
      <div class="input-box">
        <div class="search-box">
          <input type="text" v-model="score"><button @click="search">查询</button>
        </div>
        <ul class="num-list">
          <li v-for="num in 10" :key="num"> {{10 - num}}</li>
        </ul>
      </div>
    </div>
    <div class="right-content">
      <div class="top">
        <div class="tit">
          <h1>填报建议</h1>
          <ul class="label">
            <li>拼运气</li>
          </ul>
        </div>
        <div class="total">
          共为你推荐<span>250个</span>个专业
        </div>
      </div>
      <div class="main">
        <ul class="result-list">
          <li>
            <router-link>
              <div class="pic">
                <img src="" alt="">
              </div>
              <div class="info1">
                <div class="uniName">浙江大学</div>
                <div class="major">计算机与科学</div>
              </div>
              <div class="info2">
                <div class="address">浙江杭州</div>
                <div class="low-score">2018录取最低分数：<span>628</span></div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      checkboxes: [{ checked: false, text: '物理' }, { checked: false, text: '化学' }, { checked: false, text: '生物' }, { checked: false, text: '政治' },
      { checked: false, text: '历史' }, { checked: false, text: '地理' }, { checked: true, text: '技术' }],
      score: null,
      checkedList: []

    }
  },
  methods: {
    search () {
      if (!this.score) {
        alert('请输入分数')
        return;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.recommend {
  color:#fff;
  display: flex;
  .left-search {
    width: 350px;
    padding: 0 32px;
    border-left: 1px solid rgba(255, 255, 255, .1);
    border-right: 1px solid rgba(255, 255, 255, .1);
    h1{
      font-size: 24px;
    }
    .check-box{
      display: flex;
      flex-wrap: wrap;
      input[type=checkbox]{
        width:26px;
        height: 26px;
        border-radius: 4px;
        border: 1px solid #fff;
        background: transparent;
      }
    }
  }
}
</style>
