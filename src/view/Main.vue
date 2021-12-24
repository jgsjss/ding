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
  width:100%;
  height:100%;
}
.component {
  float:left;

  margin:0 15px;
  background:#f5f3f7;
  color:#997fb5;
  border-radius: 5px;
  padding:15px;
}

/* mediaquery */
@media ( max-width : 768px) {
  .container {
    width:100%;
  }
  .component {
    float:left;
    width:27%;
    margin:0 10px;
    background:#f5f3f7;
    color:#997fb5;
    border-radius: 5px;
    padding:0;
  }
}

@media ( min-width : 992px) {
  .container {
    width:100%;
  }
}
@media ( min-width : 1200px) {
  .container {
    width:100%;
  }
  .component {
    float:left;
    width:26%;
    margin:0 15px;
    background:#f5f3f7;
    color:#997fb5;
    border-radius: 5px;
    padding:15px;
  }
}

</style>
