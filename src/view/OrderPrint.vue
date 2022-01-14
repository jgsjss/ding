<template>
  <div class="pay_container">
      <div class="print_header_wrap">
      <h4 class="print_text">
          상세주문내역
      </h4>
        
            <span class="xi-close" @click="$router.go(-1)"></span>  
        
        </div>
    <div>

      <!--//결제내역//-->
      <div class="orderprint_box1">
        <div class="print_title">결제내역</div>
          <div class="print_wrap">
            <div class="print_wrap1">
              <div class="print_order_left">카드번호</div>
              <div class="print_order_left">승인번호</div>
              <div class="print_order_left">카드종류</div>
              <div class="print_order_left">할부개월</div>
              <div class="print_order_left">거래일시</div>
              <div class="print_order_left">비고</div>
            </div>
          <div class="print_wrap2">
            <div class="print_order_right">{{ $store.state.paymentData[0].cardNum }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].approveNum }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].cardType }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].installMent }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].dealDate }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].cardNote }}</div>
            <!--주문취소 버튼-->
            <div class="cancel_wrap d-grid gap-2">
                <button type="button" class="cancel_btn btn-lg">주문취소</button>
            </div>
          </div>
        </div>
      </div>
      <div class="orderprint_box2">
        <div class="print_title">요청사항</div>
        <p class="print_request">얼음많이주세요!{{}}</p>
        <div class="print_title">주문내역</div>
        <div class="print_menulist_wrap">
          <div class="print_menulist_left">
            {{ $store.state.menuData[3].name }}
              <div class="print_submenu_list">{{ $store.state.menuCostomData[0].basic1 }}</div>
              <div class="print_submenu_list">{{ $store.state.menuCostomData[0].syrup1 }}</div>
              <div class="print_submenu_list">{{ $store.state.menuCostomData[0].cream2 }}</div>
          </div>
          <div class="print_menulist_right">
            <div class="print_price_list">{{ $store.state.priceData[0].menuprice1 }}</div>
            <div class="print_price_list">{{ $store.state.priceData[0].option }}</div>
            <div class="print_price_list">{{ $store.state.priceData[0].costom3 }}</div>
            <div class="print_price_list">{{ $store.state.priceData[0].costom2 }}</div>
          </div>
          </div>
          <hr />
          <div class="print_total_price">
          <div class="print_order_total">총 결제금액</div>
          <div class="print_total_price">{{ $store.state.priceData[0].total }}</div>
          </div>
        <!--///영수증 인쇄 옆 버튼-->
         <div class="print_btn-cover">
          <router-link to="/OrderPrint"><button type="text" class="print_receipt_btn" onclick="window.print()"
          >주문표 인쇄</button></router-link>
          <button :disabled="menulistpageNum === 0" @click="prevPage2" class="print_page-btn">
            <i class="xi-angle-up"></i>
          </button>
          <span class="print_page-count">{{ menulistpageNum + 1 }} / {{ pageCount }} </span>
          <button :disabled="menulistpageNum >= pageCount - 1" @click="nextPage1" class="print_page-btn">
            <i class="xi-angle-down"></i>
          </button>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Printjs from "print-js"; 

export default {
   method: {
     print() {
       Printjs({
         printable: "orderprint_box2", //Id to print content 
         type: "HTML"
      });
    }
   }
 };
</script>

<style>
@import '../assets/css/Ordermanagement/OrderPrint.css';
</style>