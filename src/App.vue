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
  display: flex;
  width: 1200px;
  min-height:720px;
  margin:0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
