<template>
   <div class="container">
    <div class="complete_box1">
      <div class="form_box">
        <input type="checkbox">
          <span>매장</span>
        <input type="checkbox">
          <span>포장</span>

        <select id="order_select" class="list">
          <option value="최신순">최신순</option>
          <option value="과거순">과거순</option>
        </select>
      </div>  
        <div class="complete_left">
          <span class="complete_num">{{123}}</span>

            <span class="complete_type">{{}}매장</span>
            <span class="complete_time">{{}}13:00</span>

        </div>
            
    </div>
    <div class="complete_box2">
      <h4>결제내역</h4>
      <!-- <p> {{ $store.state.paymentdata[i] }}</p> -->
    </div>
    <div class="complete_box3">
      <h4>요청사항</h4>
      <p>{{}}</p>
      <p>주문내역</p>
      <ul>
        <li class="order_menulist">
          {{}}바닐라라떼 x1
          <ul>
            <li class="order_submenu_list">

            </li>
          </ul>
        </li>
      </ul>
    </div>
   </div>

</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components : {
    Navbar,
  }
}
</script>

<style>
.container {
  width: 100%;
}
.complete_box1, .complete_box2, .complete_box3 {
  width:33%;
  display: inline-block;
}
.complete_box1 {
  
}
.form_box {
  text-align: left;
  padding:0 30px;
}
.complete_left {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
}
.complete_num {
  border: 1px solid #997fb5;
  font-size: 16px;
  color: #997fb5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 2.9;
  text-align: center;
  margin: 15px 0;
}
.complete_type {
  padding:0 15px;
}
</style>