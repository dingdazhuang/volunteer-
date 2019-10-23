<template>
  <div class="main-tabs">
     <ul class="main-tab-list">
        <router-link tag="li" to="/" :class="{ 'active': index == 'classroom' }" @click.native="changeTab('classroom')">志愿课堂</router-link>
        <router-link tag="li" to="/recommend" :class="{ 'active': index == 'recommend' }" @click.native="changeTab('recommend')">志愿推荐</router-link>
        <router-link tag="li" to="/colleage" :class="{ 'active': index == 'colleage' }" @click.native="changeTab('colleage')">找大学</router-link>
        <router-link tag="li" to="/profession" :class="{ 'active': index == 'profession' }" @click.native="changeTab('profession')">查专业</router-link>
     </ul>
  </div>
</template>
<script>
export default {
  name: 'MainTabs',
  data () {
    return {
      index: 'classroom'
    }
  },
  methods: {
    changeTab (index) {
      this.index = index
      console.log(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-tabs {
  .main-tab-list {
    width:128px;
    margin:0 auto;
    li {
      font-size: 24px;
      color:#fff;
      opacity: .5;
      text-align: center;
      padding: 21px 0;
      cursor: pointer;
    &.active{
      opacity: 1;
      background: #4444ff;
    }
    }
  }
}
</style>
