<template>

<div>
  <h1>메인 대시보드</h1>

</div>
  <!-- 주문관리 컴포넌트 -->
  <OrderManage  />

  <!-- 메뉴현황 컴포넌트 -->
  <Menu />

  <!-- 로그인 정보 컴포넌트 -->
  <MyInfo />




</template>
<script>
import Menu from '@/components/Menu.vue'
import MyInfo from '@/components/MyInfo'
import OrderManage from '@/components/OrderManage.vue'

export default {

  components:{
    Menu,
    MyInfo,
    OrderManage
  }
}

</script>
<style>

</style>
