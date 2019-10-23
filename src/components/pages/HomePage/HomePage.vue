<template>
  <div class="homePage">
    <div class="leftTabs">
      <main-tabs></main-tabs>
    </div>
    <div class="rightContent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MainTabs from '@/components/common/MainTabs/MainTabs'
export default {
  name: '',
  components: {
    MainTabs
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.homePage{
  width: 100%;
  display: flex;
  .leftTabs{
    width: 203px;
  }
  .rightContent{
    flex: 1
  }
}
</style>
