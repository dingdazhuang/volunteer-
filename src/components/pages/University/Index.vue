<template>
  <div class="university">
    <div class="info">
      <div class="detail">
        <div class="tit">
          <h1>{{colleageDate.name}}</h1>
          <ul class="labels">
            <li v-for="(v, key) in tags" :key="key">{{v}}</li>
          </ul>
        </div>
        <ul class="species">
          <li v-if="colleageDate.xyhRank" class="rank">综合排名： <span>{{colleageDate.xyhRank}}</span></li>
          <li>{{colleageDate.diploma}}</li>
          <li>{{colleageDate.operate}}</li>
          <li>{{colleageDate.city}}</li>
        </ul>
      </div>
      <div class="icon">
        <img :src="colleageDate.logo" alt />
      </div>
    </div>
    <ul class="chose-tabs">
      <li @click="changeTab('overview')" :class="{ 'activity':index == 'overview'}">
        <router-link to="/university">院校概述</router-link>
      </li>
      <li @click="changeTab('major')" :class="{ 'activity':index == 'major'}">
        <router-link to="/university/major">优势专业</router-link>
      </li>
      <li @click="changeTab('treate')" :class="{ 'activity':index == 'treate'}">
        <router-link to="/university/treate">录取数据</router-link>
      </li>
      <li @click="changeTab('evaluate')" :class="{ 'activity':index == 'evaluate'}">
        <router-link to="/university/evaluate">大学评价</router-link>
      </li>
      <li @click="changeTab('envior')" :class="{ 'activity':index == 'envior'}">
        <router-link to="/university/envior">校园环境</router-link>
      </li>
    </ul>
    <div class="content-wrap">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'University',
  data () {
    return {
      index: 'overview',
      name: sessionStorage.getItem('uniName'),
      colleageDate: []
    }
  },
  methods: {
    changeTab (index) {
      console.log(index)
      this.index = index
    },
    initData () {
      const _this = this
      this.$axios.get('https://api.yunzhiyuan100.com/api/3.0/hs/university/detail', {params: {name: _this.name}}).then(res => {
        _this.colleageDate = res.data.result.university
        console.log(_this.colleageDate)
        _this.storeUnivercityId(_this.colleageDate.id)
        sessionStorage.setItem('univercityInfo', JSON.stringify(_this.colleageDate))
      })
    },
    storeUnivercityId (v) {
      sessionStorage.setItem('univercityId', v)
    }
  },
  computed: {
    tags () {
      return this.colleageDate.tags.split(',').filter(v => v !== '').slice(0, 3)
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.university {
  width: 100%;
  color: #fff;
  .info {
    display: flex;
    justify-content: space-between;
    .detail {
      .tit {
        display: flex;
        h1 {
          margin-right: 31px;
        }
        .labels {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          li {
            background: #ff4488;
            padding: 6px 9px;
            color: #fff;
            font-size: 21px;
            margin-right: 24px;
          }
        }
      }
      .species {
        margin-top: 25px;
        display: flex;
        .rank{
          span{
          color:#ffdd00;
          }
        }
        li:first-child {
          font-size: 24px;
          margin-right: 65px;
        }
        li {
          font-size: 24px;
          margin-right: 63px;
        }
      }
    }
    .icon{
      width: 90px;
      height: 90px;
      img {
        width: 100%;
      }
    }
  }
  .chose-tabs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #10254f;
    margin: 21px 0 16px;
    li {
      box-sizing: border-box;
      border-bottom: 4px solid transparent;
      &.activity {
        border-bottom: 4px solid #4444ff;
      }
      a {
        display:block;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        color: #fff;
        padding: 21px 0 17px;
      }

      cursor: pointer;
      font-size: 22px;
      &.activity {
        a {
          opacity: 1;
        }
      }
    }
  }
  .content-wrap {
    height: 406px;
    display: flex;
  }
}
</style>
