<template>
  <p>준비중2</p>
  <div class="list_wrap">
    <router-link to="/ordermanagement/preparinglistone"><i class="xi-list-square list"></i></router-link>
    <router-link to="/ordermanagement/preparinglisttwo"><i class="xi-apps list"></i></router-link>
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
      <span>[메뉴{{orderData.categories}}1개]</span>
      <span>{{ $store.state.menuData[i].name }}</span>
      <span>{{}}요청사항</span>
      <span>{{}}바닐라 라떼는 샷 연하게 해주세요 :)</span>
    </div>
    <div class="order_right">
      <router-link to="/OrderManage" class="order_right_inner"><span>주문표 인쇄</span></router-link>
      <router-link to="/OrderManage" class="order_right_inner"><span>메뉴완료</span></router-link>
    </div>
  </div>
      <div class="order-btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="order-page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="order-page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="order-page-btn"
      >
        <i class="xi-angle-right"></i>
      </button>
    </div>


</template>

<script>
export default {
  components : {
  },
   data() {
    return {
      pageNum: 0,
    };
  },
  methods: {
      nextPage() {
        this.pageNum += 1;
      },
      prevPage() {
        this.pageNum -= 1;
      },
    },
}
</script>

<style>
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
  padding:20px 0 30px 0;
  position:relative;
}
.order_wrapper:after {
  position:absolute;
  bottom:0;
  left:0;
  display: block;
  content: '';
  width:100%;
  height:1px;
  background:#ddd;
}
.order_left {
  display:flex;
  flex-direction: column;
  align-items: flex-start;
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
/* bottom new page btn */
.order-btn-cover {
  text-align: center;
  padding:30px 0;
}
.order-page-btn {
  background: #997fb5;
  border: 1px solid #997fb5;
  color: #fff;
  margin: 0 15px;
}
.order-page-count {
  background: #997fb5;
  color: #fff;
  padding: 5px 15px;
}
</style>
