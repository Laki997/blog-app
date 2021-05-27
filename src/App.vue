<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <router-link to="/posts">Posts</router-link>

      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
