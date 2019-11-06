<template>
  <div class="recommend">
    <div class="left-search">
      <h1>高考选科(7选3)及分数</h1>
      <div class="check-box">
        <input type="checkbox">
      </div>
    </div>
    <div class="right-content">

    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      checkboxes: [{ checked: false,  }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.recommend {
  color:#fff;
}
</style>
