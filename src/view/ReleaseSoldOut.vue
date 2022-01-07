<template>
<!-- 품절해제 페이지, 라우팅 path = /releasesoldout -->
<div class="container" >
  <div class="header_wrap">
    <span class="main_text">품절해제</span>
    <!--x버튼 클릭시 main으로 이동-->
    <router-link to="/main">
    <span class="xi-close"></span>
    </router-link>
  </div>
  <div class="sub_text_wrap">
  <p class="sub_text">-&nbsp; 품절상태인 메뉴/옵션목록만 표시됩니다. (숨김해제는 메뉴관리에서 가능)</p>
  <p class="sub_text">-&nbsp; 탭/페이지를 변경하셔도 체크박스는 유지됩니다.</p>
  </div>
     <div class="btn_wrap">
       <button type="text" class="menu_btn">전체</button>
       <button type="text" class="menu_btn">메뉴</button>
       <button type="text" class="menu_btn">옵션목록</button>
        <span>
          <button type="text" class="menu_btn">품절해제</button></span>
       </div>
      <div class="container">
        <table class="table">
          <thead class="category_head">
          <tr class="category_title">
            <th><input type="checkbox" id="all-check"> </th>
            <th scope="col" class="category_col">구분</th>
            <th scope="col" class="category_col">메뉴/옵션목록</th>
            <th scope="col" class="category_col">가격</th>
            <th scope="col" class="category_col">메뉴상태</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in $store.state.menuData" :key="i">
            <th scope="row"><input type="checkbox"></th>
            <td>{{ $store.state.menuData[i].categories1 }}</td>
            <td>{{ $store.state.menuData[i].name }}</td>
            <td>{{ $store.state.menuData[i].price }} </td>
            <td>{{ $store.state.menuData[i].isSoldOut +','+  $store.state.menuData[i].isHidden }}</td>
          </tr>
          </tbody>
        </table>
         <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        <i class="xi-angle-right"></i>
      </button>
    </div>
      </div>
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
.container {
  width: 100%;
  margin: 0 auto;
  padding:30px 0;
}
.header_wrap {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color:#997fb5;
}
.xi-close {
  color:#997fb5;
}
.main_text {
  text-align:left;
}
.sub_text_wrap {
  padding:15px 0 30px 0;
}
.sub_text {
  text-align: left;
  font-size:14px;
  color:#9b9b9c;
}
.btn_wrap {
  text-align: left;
}
.menu_btn {
  border:1px solid #997fb5;
  padding:5px 10px;
}
.menu_btn:first-child {
  background:#c2b4cd;
  border:1px solid #c2b4cd;
  color:#fff;
}
.menu_btn:nth-child(2) {
  background:#fff;
  color:#997fb5;
  margin-left:15px;
}
.menu_btn:nth-child(3) {
  background:#fff;
  color:#997fb5;
  margin-left:15px;
}
.menu_btn:last-child {
  float:right;
  background:#997fb5;
  color:#fff;
}
.category_head {
  border-bottom:2px solid #c2b4cd;
  position:relative;
}
.category_title {
  background:#c2b4cd;
  color:#fff;
}
.category_col {
  font-weight: 500;
}
.category_col:nth-child(2):after {
  display:none;
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
  color:#997fb5;
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