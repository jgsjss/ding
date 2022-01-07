<template>
  <div class="list_wrap">
    <router-link to="/OrderManagement/1"><i class="xi-list-square list"></i></router-link>
    <router-link to="/OrderManagement/1_2"><i class="xi-apps list"></i></router-link>
      <select id="order_select" class="list">
        <option value="최신순">최신순</option>
        <option value="과거순">과거순</option>
      </select>
  </div>
  <div>
  <div class="order2-2_wrapper" v-for="(orderData, i) in $store.state.orderData" :key="i">
    <ul>
      <li class="order2-2_list">
        <div class="order2-2_left">
          <span class="order2-2_num">{{123}}</span>
            <span class="order2-2_type">{{}}매장</span>
            <span class="order2-2_time">{{}}13:00</span>
        </div>    
          <div class="order2-2_middle">
            <span>[{{orderData.categories}}1개]</span>
            <span>[{{orderData.menu}}]</span>
            <!-- <span>{{}}진짜 진한 바닐라 리얼딥 1 / 진짜 진한 돌체 리얼딥 1</span> -->
            <span>{{}}요청사항</span>
            <span>{{}}바닐라 라떼는 샷 연하게 해주세요 :)</span>
          </div>   
            <div class="order2-2_right">
              <router-link to="/OrderManage" class="order2-2_right_inner1"><button type="text" class="order2-2_btn1"><span>주문표 인쇄</span></button></router-link>
              <router-link to="/OrderManage" class="order2-2_right_inner2"><button type="text" class="order2-2_btn2"><span>준비 완료</span></button></router-link>
            </div>                   
      </li>
    </ul>
  </div>
  </div>

      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
    </div>    
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            pageNum: 0
        }
    },
    props:{
    // //주문관리 데이터 프롭스 ---
    // orderData : Object,
    // //완료주문 개수
    // completedNum : Number,
    //  //신규주문 개수
    // newOrderNum : Number,
    // //취소주문 개수
    // cancelOrder : Number,
    //
    //
    // //메뉴관리 데이터 프롭스 ---
    // menuData : Object,
    //  //품절메뉴 개수
    // soldOutNum : Number,
    // //숨김메뉴 개수
    // hiddenNum : Number,
    //
    //
    // //운영관리 데이터 프롭스 ---
    // shopData : Object,
    // //영업중인 가게 수
    // openShopNum : Number,
    },
    methods: {
         nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
        }
    },
    // ajax로 서버에서 받아온 list정보를 페이징 처리하는 부분. 현재 받아올 서버 및 데이터가 없어서 주석처리함.
    // computed: {
    //     pageCount () {
    //   let listLeng = this.listArray.length,
    //       listSize = this.pageSize,
    //       page = Math.floor(listLeng / listSize);
    //   if (listLeng % listSize > 0) page += 1;
    //   /*
    //   아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
    //   이런식으로 if 문 없이 고칠 수도 있다!
    //   */
    //   return page;
    // },
    // paginatedData () {
    //   const start = this.pageNum * this.pageSize,
    //         end = start + this.pageSize;
    //   return this.listArray.slice(start, end);
    // }
    // }
}
</script>

<style>
.order2-2_wrapper {
  display: block;
}
.order2-2_wrapper > ul {
  list-style: none;
}
.order2-2_list {
  float: left;
  width: 250px;
  padding: 15px 20px;
  border: 1px solid #997fb5;
  border-radius: 15px;
  margin: 15px 15px;
}
.order2-2_left {
  float: left;
  width: 312px;
  display: flex;
  align-items: center;
}
.order2-2_num {
  color:#997fb5;
  font-size:24px;
}
.order2-2_type {
  margin:0 10px;
  padding:3px 10px;
  border:1px solid #997fb5;
  background:#997fb5;
  color:white;
  font-size:14px;
  border-radius:15px;
}
.order2-2_time {
  font-size:14px;
  color:#997fb5
}
.order2-2_middle {
  display: inline-grid;
}
.order2-2_middle > span:first-child {
  font-size:14px;
  padding:5px 0 0 0 ;
}
.order2-2_middle > span:nth-child(2) {
  font-size:14px;
  color:#997fb5;
  font-weight: 500;
  padding:5px 0;
}
.order2-2_middle > span:last-child {
  font-size:14px;
  color:#997fb5;
  font-weight: 500;
  padding-bottom:20px;
}
.order2-2_right {
  padding: 15px 0;
  margin: 0 auto;
  text-align: center;
}
.order2-2_btn1 {
  border:1px solid #997fb5;
  background:white;
  color:#997fb5;
  width:90px;
  height: 70px;
}
.order2-2_right_inner2 {
  margin:0 15px;
}
.order2-2_btn2 {
    border: 1px solid #997fb5;
    background: #997fb5;
    width: 77px;
    height: 70px;
    color: #fff;
    word-break: keep-all;
}
.btn-cover {
  float: left;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0;
}
.page-btn {
  background:#997fb5;
  border:1px solid #997fb5;
  color:#fff;
  margin:0 15px;
}
.page-count {
  background:#997fb5;
  color:#fff;
  padding:5px 15px
}
</style>
