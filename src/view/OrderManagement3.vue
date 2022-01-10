<template>
   <div class="pay_container">
     <div>
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
            <!-- <span>{{ $store.state.menuData[i].name }}</span> -->
            <div>
            <span>메뉴</span>
            <span class="complete_type">{{}}매장</span>
            </div>
            <span class="complete_time">{{}}13:00</span>
            <span class="complete_num">{{123}}</span>
        </div>
            
    </div>
    <div class="complete_box2">
      <div class="com_title">결제내역</div>
      <!-- <p> {{ $store.state.paymentdata[i] }}</p> -->
      <div class="pay_wrap">
        <div class="pay_wrap1">
          <div class="payment_left">카드번호</div>
          <div class="payment_left">승인번호</div>
          <div class="payment_left">카드종류</div>
          <div class="payment_left">할부개월</div>
          <div class="payment_left">거래일시</div>
          <div class="payment_left">비고</div>
      </div>
        <div class="pay_wrap2">
          <div class="payment_right">{{}}</div>
          <div class="payment_right">d{{}}</div>
          <div class="payment_right">2{{}}</div>
          <div class="payment_right">53{{}}</div>
          <div class="payment_right">5{{}}</div>
          <div class="payment_right">522{{}}</div>
      </div>
    </div>
    </div>
    <div class="complete_box3">
      <div class="com_title">요청사항</div>
      <p>얼음많이주세요!{{}}</p>
      <div class="com_title">주문내역</div>
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
.pay_container {
  width: 100%;
  margin:0 auto;
}
.pay_container > div {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
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
.com_title {
  font-size:20px;
  font-weight: 500;
  text-align: center;
}
.complete_box3 {
  text-align: center;
}
.pay_wrap{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  padding:30px 0;
}
.pay_wrap1 {
  float: left;
}
.pay_wrap2 {
  float: left;
}
.payment_left {
  margin: 10px;
  text-align: left;
  color:#b29ec7;
}
.payment_right {
  text-align: end;
  margin: 10px;
  color:#997fb5;
  font-weight:500;
}
</style>