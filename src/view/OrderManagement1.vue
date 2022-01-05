<template>
  <div class="list_wrap">
    <i class="xi-list-square list"></i>
    <i class="xi-apps list"></i>
    <select id="order_select" class="list">
      <option value="최신순">최신순</option>
      <option value="과거순">과거순</option>
    </select>
  </div>
  <div class="order_wrapper" v-for="(orderData, i) in $store.state.orderData" :key="i">
    <div class="order_left">
      <span class="order_num">{{123}}</span>
      <div>
        <span class="order_type">{{}}매장</span>
        <span class="order_time">{{}}13:00</span>
      </div>
    </div>
    <div class="order_middle" >
      <span>{{orderData.menu}}</span>
      <span>{{}}진짜 진한 바닐라 리얼딥 1 / 진짜 진한 돌체 리얼딥 1</span>
      <span>{{}}요청사항</span>
      <span>{{}}바닐라 라떼는 샷 연하게 해주세요 :)</span>
    </div>
    <div class="order_right">
      <router-link to="/OrderManage" class="order_right_inner"><span>주문표 인쇄</span></router-link>
      <router-link to="/OrderManage" class="order_right_inner"><span>준비중</span></router-link>
    </div>
  </div>


</template>
<script>


export default {
  components : {

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
  position:relative;
}
/* .component_name::before {
  position:absolute;
  bottom:0;
  left:0;
  display: block;
  content: '';
  width: 50px;
  height:5px;
  background:#997fb5;
} */
.list_wrap {
    width: 100%;
    text-align: right;
    margin: 0 auto;
    padding: 0 30px;
    position:relative;
}
.list_wrap:after {
  position: absolute;
  bottom: -10px;
  right: 3px;
  display: block;
  content: '';
  background: #ddd;
  width: 1200px;
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
.new_btn {
  background:#fff;
  border:1px solid #997fb5;
  color:#997fb5;
  padding:5px 10px;
  border-radius: 20px;
}
.order_wrapper {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  padding:30px 0;
  position:relative;
}
.order_wrapper:after {
  position:absolute;
  bottom:0;
  left:-25px;
  display: block;
  content: '';
  width:100%;
  height:1px;
  background:#ddd;
}
.order_left {
  display:flex;
  flex-direction: column;
  align-items: center;
  width:20%;
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
  color:#997fb5;
}
.order_middle {
  display: flex;
  flex-direction: column;
  width: 30%;
  font-size:14px;
}
.order_middle > span:nth-child(2) {
  color:#997fb5;
}
.order_middle > span:last-child {
  color:#997fb5;
  font-weight: 500;
}
.order_right > .order_right_inner {
  border: 1px solid #997fb5;
  color: #997fb5;
  padding: 40px;
  margin: 0 15px;
}
.order_right > .order_right_inner:nth-child(2) {
  border:1px solid #997fb5;
  background:#997fb5;
  color:#fff;
}
</style>

