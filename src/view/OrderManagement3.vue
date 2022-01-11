<template>
  <div class="pay_container">
    <div>
      <div class="complete_box1">
        <div class="form_box">
          <span>
            <input type="checkbox" />
            <span class="one_checkbox">매장</span>
            <input type="checkbox" />
            <span>포장</span>
          </span>
          <span class="order_select">
            <select id="order_select" class="list">
              <option value="최신순">최신순</option>
              <option value="과거순">과거순</option>
            </select>
          </span>
        </div>
        <div class="complete_left">
          <!-- <span>{{ $store.state.menuData[i].name }}</span> -->
          <div>
            <span>{{}}</span>
            <span class="complete_type">{{}}매장</span>
          </div>
          <span class="complete_time">{{}}13:00</span>
          <span class="complete_num">{{ 123 }}</span>
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
        <p class="com_request">얼음많이주세요!{{}}</p>
        <div class="com_title">주문내역</div>
        <ul>
          <li class="order_menulist">
            {{}}바닐라라떼 x1
            <ul>
              <li class="order_submenu_list"></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.pay_container {
  width: 100%;
  margin: 0 auto;
}
.pay_container > div {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.complete_box1,
.complete_box2,
.complete_box3 {
  width: 33%;
  display: inline-block;
  border: 1px solid #997fb5;
  margin: 0 15px;
}
.complete_box1 {
}
.form_box {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  color: #997fb5;
}
.one_checkbox {
  margin-right: 15px;
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
  padding: 0 15px;
}
.com_title {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 0 15px;
}
.com_request {
  text-align: left;
  margin: 0 15px;
  padding: 15px 0;
}
.complete_box3 {
  text-align: center;
}
.pay_wrap {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 15px;
}
.pay_wrap1 {
  float: left;
}
.pay_wrap2 {
  float: left;
}
.payment_left {
  text-align: left;
  color: #b29ec7;
  line-height: 2;
}
.payment_right {
  text-align: end;
  color: #997fb5;
  font-weight: 500;
  line-height: 2;
}
</style>
