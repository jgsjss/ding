<template>
  <Navbar />
  <p>주문관리 아들</p>
  <div class="ordermanage_container">
    <div class="main_wrap">
    <h2 class="main_text">주문관리</h2>
      <div class="main_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>
      </div>
      <div class="component_bar">
        <router-link to="/ordermanagement/neworderlistone"><span class="component_name first">신규주문{{}}</span></router-link>
        <router-link to="/ordermanagement/preparinglistone"><span class="component_name">준비중{{}}</span></router-link>
        <router-link to="/ordermanagement/completedorder"><span class="component_name">완료주문{{}}</span></router-link>
       <router-link to="/ordermanagement/orderlist"><span class="component_name">주문내역</span></router-link>
      </div>

        <!-- <div class="list_wrap">
          <router-link to="/OrderManagement/1"><i class="xi-list-square list"></i></router-link>
          <router-link to="/OrderManagement/1_2"><i class="xi-apps list"></i></router-link>
            <select id="order_select" class="list">
              <option value="최신순">최신순</option>
              <option value="과거순">과거순</option>
            </select>
        </div> -->


  </div>
  <router-view> </router-view>



</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components : {
    Navbar,
  },
}
</script>
<style>
.ordermanage_container {
  width:100%;
  margin:0 auto;
}
.main_wrap {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:30px 30px
}
.main_text {
  color:#997fb5;
  font-size:36px;
}
.component_bar {
  padding:30px 0;
  margin:0 auto;
  position:relative;
  width: 82%;
}
.component_name {
  margin:0 30px;
  color:#997fb5;
  position:relative;
}
/* .first::after {
  position:absolute;
  bottom:-10px;
  left:0;
  display: block;
  content: '';
  width:100%;
  height:5px;
  background:#997fb5;
  z-index:1
} */
.list_wrap {
    margin: 0 auto;
    padding: 10px 30px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.list_wrap:before {
  display: block;
  content: '';
  position: absolute;
  top: 43px;
  right: 0;
  width: 100%;
  height: 1px;
  background: #ddd;
}
.list_wrap:after {
  position: absolute;
  top: 5px;
  left: 0;
  display: block;
  content: '';
  background: #ddd;
  width: 100%;
  height: 1px;
}
/* .list_wrap::before {
  display: block;
  content: '';
  position:absolute;
  bottom:10px;
  left:9%;
  width:100%;
  height:1px;
  background:#ddd;
} */
.list {
  font-size:24px;
  padding:0 10px;
  color:#997fb5;
}
#order_select {
  width:70px;
  border:1px solid #997fb5;
  background:none;
  text-align: center;
  font-size:14px;
  border-radius: 15px;
}
</style>
