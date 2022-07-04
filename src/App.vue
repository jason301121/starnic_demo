<template>
  <div id="app">
    <commonHeader></commonHeader>
    <router-view/>
    <pagination></pagination>
  </div>
</template>

<script>
import commonHeader from './components/header.vue';
import pagination from './components/pagination.vue';

export default {
  components:{
    commonHeader,
    pagination
  }
}
</script>
<style lang="scss" scope>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
