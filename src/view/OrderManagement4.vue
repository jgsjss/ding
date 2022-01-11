<template>
  <div class="list_wrap">
    <select id="order_select" class="list">
      <option value="최신순">최신순</option>
      <option value="과거순">과거순</option>
    </select>
  </div>
  <!-- 품절해제 페이지, 라우팅 path = /releasesoldout -->

  <div class="ordermenu_container">
    <table class="order_table">
      <thead class="category_head">
        <tr class="category_title">
          <th scope="col" class="category_col">주문일시</th>
          <th scope="col" class="category_col">대기번호</th>
          <th scope="col" class="category_col">구분</th>
          <th scope="col" class="category_col">내용</th>
          <th scope="col" class="category_col">금액</th>
          <th scope="col" class="category_col">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in $store.state.menuData" :key="i">
          <td>{{ $store.state.menuData[i].date }}</td>
          <td>{{ $store.state.menuData[i].number }}</td>
          <td>{{ $store.state.menuData[i].wating }}</td>
          <td>{{ $store.state.menuData[i].name }}</td>
          <td>{{ $store.state.menuData[i].price }}</td>
          <td>{{ $store.state.menuData[i].isSoldOut }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        <i class="xi-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      pageNum: 0,
    };
  },
  props: {
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
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
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
};
</script>

<style>
.ordermenu_container {
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
.order_table {
  width: 90%;
  margin: 0 auto;
}
.btn_wrap {
  text-align: left;
}
.menu_btn {
  border: 1px solid #997fb5;
  padding: 5px 10px;
}
.menu_btn:first-child {
  background: #c2b4cd;
  border: 1px solid #c2b4cd;
  color: #fff;
}
.menu_btn:nth-child(2) {
  background: #fff;
  color: #997fb5;
  margin-left: 15px;
}
.menu_btn:nth-child(3) {
  background: #fff;
  color: #997fb5;
  margin-left: 15px;
}
.menu_btn:last-child {
  float: right;
  background: #997fb5;
  color: #fff;
}
.category_head {
  border-bottom: 2px solid #c2b4cd;
  position: relative;
  height: 40px;
}
.category_title {
  background: #c2b4cd;
  color: #fff;
  text-align: center;
}
.category_col {
  font-weight: 500;
}
.category_col:first-child::after {
  display: block;
  content: '';
  position: absolute;
  top: 30%;
  left: 25%;
  width: 1px;
  height: 15px;
  background: #fff;
}
.category_col:nth-child(2):after {
  display: none;
}
.category_col:after {
  display: block;
  content: '';
  position: absolute;
  top: 30%;
  width: 1px;
  height: 15px;
  background: #fff;
}
tbody {
  color: #997fb5;
  text-align: center;
}
.page-btn {
  background: #997fb5;
  border: 1px solid #997fb5;
  color: #fff;
  margin: 0 15px;
}
.page-count {
  background: #997fb5;
  color: #fff;
  padding: 5px 15px;
}
</style>
