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
        <div class="complete_left" v-for="(orderData, i) in $store.state.orderData" :key="i">
          <div class="order_small_list">
          <div class="order_small_flex1">
            <span>[{{ $store.state.menuData[i].categories1 }}5개]</span>
            <span class="complete_type">[{{ $store.state.menuData[i].wating }}]</span>
          </div>
          <div class="order_small_flex2">
            <span>{{ $store.state.menuData[i].name }}</span>
            <span class="complete_time">{{ $store.state.menuData[i].date }}</span>
          </div>

          </div>
          <div class="num_box">
            <span class="complete_num">{{ 123 }}</span>
          </div>
        </div>
         <div class="order_btn-cover">
      <button :disabled="orderpageNum === 0" @click="prevPage" class="order_page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="page-count">{{ orderpageNum + 1 }} / {{ pageCount }} </span>
      <button :disabled="orderpageNum >= pageCount - 1" @click="nextPage" class="order_page-btn">
        <i class="xi-angle-right"></i>
      </button>
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
            <div class="payment_right">{{ $store.state.paymentData[0].cardNum }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].approveNum }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].cardType }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].installMent }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].dealDate }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].cardNote }}</div>
          </div>
        </div>
      </div>
      <div class="complete_box3">
        <div class="com_title">요청사항</div>
        <p class="com_request">얼음많이주세요!{{}}</p>
        <div class="com_title">주문내역</div>
        <div class="order_menulist_wrap">
          <div class="order_menulist_left">
            {{ $store.state.menuData[3].name }}
              <div class="order_submenu_list">{{ $store.state.menuCostomData[0].basic1 }}</div>
              <div class="order_submenu_list">{{ $store.state.menuCostomData[0].syrup1 }}</div>
              <div class="order_submenu_list">{{ $store.state.menuCostomData[0].cream2 }}</div>
          </div>
          <div class="order_menulist_right">
            <div class="order_price_list">{{ $store.state.priceData[0].menuprice1 }}</div>
            <div class="order_price_list">{{ $store.state.priceData[0].option }}</div>
            <div class="order_price_list">{{ $store.state.priceData[0].costom3 }}</div>
            <div class="order_price_list">{{ $store.state.priceData[0].costom2 }}</div>
          </div>
          </div>
          <div class="wjfcnltjs">***********************************************************</div>
          <div class="total_price">
          <div class="com_order_total">총 결제금액</div>
          <div class="com_total_price">{{ $store.state.priceData[0].total }}</div>
          </div>
         <div class="menulist_btn-cover">
          <button type="text" class="order_receipt_btn">주문표 인쇄</button>
          <button :disabled="menulistpageNum === 0" @click="prevPage2" class="menulist_page-btn">
            <i class="xi-angle-up"></i>
          </button>
          <span class="menulist_page-count">{{ menulistpageNum + 1 }} / {{ pageCount }} </span>
          <button :disabled="menulistpageNum >= pageCount - 1" @click="nextPage1" class="menulist_page-btn">
            <i class="xi-angle-down"></i>
          </button>
    </div>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderpageNum : 0,
      menulistpageNum : 0,
    };
  },
  methods: {
    nextPage() {
      this.orderpageNum += 1;
    },
    prevPage() {
      this.orderpageNum -= 1;
    },
    //주문내역 영수증 버튼
    nextPage1() {
      this.menulistpageNum += 1;
    },
    prevPage2() {
      this.menulistpageNum -= 1;
    },
  },
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
  position:relative;
}
.pay_container > div:after {
  position:absolute;
  top:-15px;
  left:0;
  display: block;
  content: '';
  width:100%;
  height:1px;
  background:#ddd;
}
.complete_box1,
.complete_box2,
.complete_box3 {
  width: 33%;
  display: inline-block;
  border: 1px solid #997fb5;
  border-radius: 5px;
  margin: 0 30px;
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
.order_small_flex2>span:first-child {
  color:#997fb5;
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
  padding: 10px 30px;
  justify-content: space-between;
  border-top:1px solid #ddd;
}
.complete_left:nth-child(2){
  border-top:none;
}
.complete_left:hover {
  background:#dcd4e3
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
  color:#a7a7a7;
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
  color: #747474;
  font-weight: 500;
  line-height: 2;
}
.order_menulist_wrap {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 15px;
}
.order_menulist_left {
  float: left;
}
.order_menulist_right {
  float: left;
  text-align: end;
}
.order_submenu_list {
  padding:0 20px;
  text-align: left;
}
.wjfcnltjs {
  padding:0 15px
}
.total_price {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.com_order_total {
  font-size: 18px;
  padding: 15px 15px;
}
.com_total_price {
  padding:15px 15px
}

/* page_btn */
.order_btn-cover {
  text-align: center;
  padding:30px 0;
}
.order_page-btn {
  background: #997fb5;
  border: 1px solid #997fb5;
  color: #fff;
  margin: 0 15px;
}
.order_page-count {
  background: #997fb5;
  color: #fff;
  padding: 5px 15px;
}
.menulist_btn_wrap {
  margin:0 auto;
}
.order_receipt_btn {
  width:50.01%;
  height:50px;
  background:white;
  border:1px solid #997fb5;
  border-bottom:none;
  border-left:none;
  color: #997fb5;
}
.menulist_page-btn {
  width:25%;
  height:50px;
  background:white;
  border:1px solid #997fb5;
  border-bottom:none;
  border-right:none;
  color:#997fb5;
}
.menulist_page-btn:first-child {
  border-left:none
}
.menulist_page-count {
  display: none;
}
</style>