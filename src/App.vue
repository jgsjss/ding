<template>

  <h1>main 페이지</h1>
  <nav>
    <h1>네브바 메뉴입니다.</h1>
  </nav>
  <OrdeerManagement/>


  <Menu/>

</template>
<script>
import OrdeerManagement from './components/OrderManagement.vue'
import Menu from './components/Menu.vue'

export default {
  components: {
    OrdeerManagement: OrdeerManagement,
    Menu: Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
