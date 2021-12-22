<template>
  <nav>
    <h1>네브바 메뉴입니다.</h1>
  </nav>
  <OrdeerManagement />



  <Menu />

</template>
<script>
import OrdeerManagement from '../components/OrderManagement.vue'
import Menu from '../components/Menu.vue'
export default {
  components: {
    OrdeerManagement: OrdeerManagement,
    Menu: Menu
  }
}
</script>
