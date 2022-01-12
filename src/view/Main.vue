<template>
<Navbar />
  <div class="main_container">
    <div class="main_call">
      <div class="main_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>

    </div>
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
      <MyInfo  />
    </div>

  </div>


</template>
<script>
import Menu from '@/components/Menu.vue'
import MyInfo from '@/components/MyInfo'
import OrderManage from '@/components/OrderManage.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  props: {
    //주문관리 데이터 프롭스 ---
    orderData : Object,
    //완료주문 개수
    completedNum : Number,
     //신규주문 개수
    newOrderNum : Number,
    //취소주문 개수
    cancelOrder : Number,
    //메뉴관리 데이터 프롭스 ---
    menuData : Object,
     //품절메뉴 개수
    soldOutNum : Number,
    //숨김메뉴 개수
    hiddenNum : Number,
    //운영관리 데이터 프롭스 ---
    shopData : Object,
    //영업중인 가게 수
    openShopNum : Number,
  },
  components:{
    Menu,
    MyInfo,
    OrderManage,
    Navbar,
  }
}
</script>
<style>
@import '../assets/css/Main.css';
</style>