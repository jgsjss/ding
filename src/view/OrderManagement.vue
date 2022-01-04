<template>
  <Navbar />
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
        <router-link to="/OrderManagement1"><span class="component_name">신규주문{{}}</span></router-link>
        <router-link to="/OrderManagement2"><span class="component_name">준비중{{}}</span></router-link>
        <router-link to="/OrderManagement3"><span class="component_name">완료주문{{}}</span></router-link>
        <router-link to="/OrderManagement4"><span class="component_name">주문내역</span></router-link>
      </div>
      <div class="list_wrap">
        <i class="xi-list-square list"></i>
        <i class="xi-apps list"></i>
        <button type="text" class="new_btn">최신순</button>
      </div>
      <div class="order_left">
        <span class="order_num">{{123}}</span>
        <div>
        <span class="order_type">{{}}매장</span>
        <span class="order_time">{{}}13:00</span>
        </div>
        <div class="order_middle">
          <span>{{}}[메뉴10개] 진짜 진한 바닐라 리얼딥 외 9개{{}}</span>
          <span></span>
        </div>
      </div>
  </div>



</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components : {
    Navbar,
  }
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
}
.main_text {
  color:#997fb5;
}
.component_bar {
  padding:30px 0;
  width:1200px;
  margin:0 auto;
  position:relative;
}
.component_bar:after {
  display: block;
  content: '';
  position:absolute;
  bottom:10px;
  left:9%;
  width:100%;
  height:1px;
  background:#ddd;
}
.component_name {
  margin:0 30px;
  color:#997fb5;
}

.list_wrap {
    width: 100%;
    text-align: right;
    margin: 0 auto;
    padding: 0 30px;
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
.new_btn {
  background:#fff;
  border:1px solid #997fb5;
  color:#997fb5;
  padding:5px 10px;
  border-radius: 20px;
}

.order_left {
  display:flex;    
  flex-direction: column;
  align-items: center;
  width:15%;
  padding:0 30px;
}
.order_left > div {
  display:flex;
  flex-direction: row;  
}
.order_num {
    border: 1px solid #997fb5;
    font-size: 30px;
    color: #997fb5;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    line-height: 2.9;
    text-align: center;
    margin:15px 0;
}
.order_type {
    border: 1px solid #997fb5;
    background: #997fb5;
    border-radius: 15px;
    color: #fff;
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 1.8;
    flex-direction: row;
}
.order_time {
  padding: 0 10px;
  line-height: 1.8;
}
</style>
