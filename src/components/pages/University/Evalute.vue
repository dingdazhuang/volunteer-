<template>
  <div class="evalute">
    <div class="avatar">
      <img src="" alt="">
    </div>
    <div class="content">
      <div class="info">
        <div class="flex">
          <div class="tit">2012年毕业</div>
          <div class="mark">
            <ul class="flex">
              <li>博士后</li>
              <li>计算机科学与技术</li>
            </ul>
          </div>
        </div>
        <div class="flex">
          <div>院校评分：<span>90分</span></div>
          <div>专业评分：<span>80分</span></div>
        </div>
      </div>
      <dl>
        <dt>学校印象：</dt>
        <dd>学校师资力量：强；教学水平：强</dd>
        <dd>学习氛围：早上8点到图书馆，图书馆有电源的座位已经没有了，9点几乎没什么座位</dd>
      </dl>
      <dl>
        <dt>专业印象：</dt>
        <dd>主修课：传媒产业与创意策划、传播研究方法、新闻摄影等</dd>
        <dd>专业全国排名：前十（不吹，具体排名可自己再查一下）</dd>
        <dd>授课水平：老师上课是极好的，怎么学就看个人了</dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: 'evalute',
  data () {
    return {
    }
  },
  methods: {
    initData () {
      this.$axios.get('https://api.yunzhiyuan100.com/api/3.0/hs/university/evaluate', { params: { university: 'vvCH4', s: 10, p: 0 } }).then(res => {
        console.log(res)
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
  .content{
    .flex {
      display: flex;
    }
    dt{
      font-size: 20px;
      line-height: 45px;
    }
    dd{
      font-size:18px;
      line-height: 45px;
    }
  }
}
</style>
