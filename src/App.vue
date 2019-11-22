<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import'./assets/base.css';
#app {
  width: 1200px;
  margin:0 auto;
  position: relative;
}
</style>
