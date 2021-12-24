<template>
  <div class="container">
    <div class="main_call">
      <div class="main_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell-o"></i>
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
.main_call {
  width:100%;
  padding-bottom: 15px;
}
.main_right {
  text-align: right;
  padding:0 100px;
}
.main-btn {
  margin:0 auto;
  padding:5px;
  width:150px;
  border-radius: 15px;
  border:1px solid #997fb5;
  background:#fff;
  color:#997fb5;
}
.xi-bell-o {
  color:#997fb5;
  font-size:20px;
}

</style>
