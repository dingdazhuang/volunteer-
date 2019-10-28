<template>
  <div class="overview">
    <div class="info">
      <div class="official">
        学校官网：<a class="green" :href="data.url">{{data.url}}</a>
      </div>
      <div>
        招办电话：<span class="green">{{data.phone}}</span>
      </div>
      <div class="detail">
        {{data.summary ? data.summary : '无学校介绍'}}
        Overview
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Overview',
  data () {
    return {
      data: JSON.parse(sessionStorage.getItem('univercityInfo'))
    }
  },
  methods: {
    getDate () {
    }
  },
  computed: mapState(['text']),
  mounted () {
    this.getDate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.overview {
    width: 100%;
    font-size: 22px;
    line-height: 50px;
    position: relative;
    background: #132C5B;
    .info {
      width: 1134px;
      height: 303px;
      margin: 31px auto;
      overflow: hidden;
      background: #132C5B;
      .green{
        color: #00dd88;
      }
    }

}
</style>
