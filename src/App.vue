<template>
  <div id="app">
    <h2>你好,中国!</h2>
    <router-link to="/news">点我跳转到子组件</router-link>
    <!-- 路由匹配的子组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
