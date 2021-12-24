<template>



  <div class="container">
    <div class="component">
      <!-- 주문관리 컴포넌트 -->
      <OrderManage  />
    </div>
    <div class="component">
      <!-- 메뉴현황 컴포넌트 -->
      <Menu />
    </div>
    <div class="component">
      <!-- 로그인 정보 컴포넌트 -->
      <MyInfo />
    </div>
  </div>

</template>
<script>
import Menu from '@/components/Menu.vue'
import MyInfo from '@/components/MyInfo'
import OrderManage from '@/components/OrderManage.vue'

export default {

  components:{
    Menu,
    MyInfo,
    OrderManage,
  }
}

</script>
<style>
.container {
  max-width:768px;
}
.component {
  float:left;
  width:27%;
  margin:0 15px;
  background:#f5f3f7;
  color:#997fb5;
  border-radius: 5px;
  padding:15px;
}
</style>
