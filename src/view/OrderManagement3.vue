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
          <div class="order_small_list">
          <div class="order_small_flex1">
            <span>{{}}[메뉴5개]</span>
            <span class="complete_type">{{}}[매장]</span>
          </div>            
          <div class="order_small_flex2">
            <span>{{}}아이스 아메리카노</span>
            <span class="complete_time">{{}}2022.01.11 12:55</span>
          </div>
           
          </div>
          <div class="num_box">
            <span class="complete_num">{{ 123 }}</span>
          </div>           
        </div>
          
      </div>
      <!--데이터 설정했으나 데이터 화면에안뜸-->
      <div class="complete_box2">
        <div class="com_title">결제내역</div>
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
            <div class="payment_right">{{ $store.state.paymentData.cardNum }}</div>
            <div class="payment_right">{{ $store.state.paymentData.approveNum }}</div>
            <div class="payment_right">{{ $store.state.paymentData.cardType }}</div>
            <div class="payment_right">{{ $store.state.paymentData.installMent }}</div>
            <div class="payment_right">{{ $store.state.paymentData.dealDate }}</div>
            <div class="payment_right">{{ $store.state.paymentData.cardNote }}</div>
          </div>
        </div>
      </div>
      <div class="complete_box3">
        <div class="com_title">요청사항</div>
        <p class="com_request">얼음많이주세요!{{}}</p>
        <div class="com_title">주문내역</div>
        <div class="order_menulist_wrap">
          <div class="order_menulist_left">
            {{}}바닐라라떼 x1
              <div class="order_submenu_list">{{}}- 기본(iced)</div>
              <div class="order_submenu_list">{{}}- 시럽 : 바닐라 추가</div>
              <div class="order_submenu_list">{{}}- 휘핑 : 에스프레소 휘핑</div>
          </div>
          <div class="order_menulist_right">
            <div class="order_price_list">{{}}9,500원</div>           
            <div class="order_price_list">{{}}8,500원</div>           
            <div class="order_price_list">{{}}500원</div>         
            <div class="order_price_list">{{}}800원</div>         
          </div>
          </div>
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
  border-radius: 5px;
  margin: 0 15px;
}
.complete_box1 {
  border:none;
}
.order_small_flex1 {
  display:flex;
}
.order_small_flex2 {
  display:flex;
  flex-direction: column;
  padding:15px 0;
}
.form_box {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
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
  justify-content: space-between;
}
.complete_num {
  border: 1px solid #997fb5;
  font-size: 20px;
  color: #997fb5;
  border-radius: 50%;
  line-height: 2.9;
  text-align: center;
  margin: 15px 0;
  padding: 20px;
}
.complete_type {
  padding: 0 15px;
}
.complete_time {
  padding-top:10px;
}

.com_title {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 15px 15px;
}
.com_request {
  text-align: left;
  margin: 0 15px;
  padding: 15px 0;
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
  color: #333;
  line-height: 2;
}
.payment_right {
  text-align: end;
  color: #333;
  font-weight: 500;
  line-height: 2;
}
.order_menulist_wrap {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 15px;  
}
.order_menulist_left {
  float: left;
}
.order_menulist_right {
  float: left;
  text-align: end;
}
</style>

