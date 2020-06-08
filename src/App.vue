<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhongyu
 * @Date: 2020-06-08 12:07:20
 * @LastEditors: zhongyu
 * @LastEditTime: 2020-06-08 13:49:45
--> 
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
