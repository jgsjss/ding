<template>
  <div class="container">
    <p class="info_img">img</p>
    <p class="info_text">딩동커피 </p>
    <div class="wrap">
      <div class="wrap1">
        <div class="info_left">매장코드</div>
        <div class="info_left">매장명</div>
        <div class="info_left">매장번호</div>
        <div class="info_left">관리자</div>
      </div>

      <div class="wrap2">
        <div class="info_right">dd{{}}</div>
        <div class="info_right">dd{{}}</div>
        <div class="info_right">dd{{}}</div>
        <div class="info_right">dd{{}}</div>
      </div>
    </div>
    <div class="info_order">
      <p class="info_order_text">딩동오더 관련 문의</p>
      <div class="wrap">
        <div class="wrap1">
          <div class="info_left">전화번호</div>
          <div class="info_left">이메일</div>
        </div>
        <div class="wrap2">
          <div class="info_right">010-1234-5678{{}}</div>
          <div class="info_right">naver@naver.com{{}}</div>
        </div>
      </div>
      <router-link to="@view/member/Login" class="myinfo_logout"><button type="button" class="logout-btn">로그아웃</button></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        shopCode : '',
        shopName : '',
        shopPhNum : '',
        manager : '',
      }
    },
    props : {
       //운영관리 데이터 프롭스 ---
    shopData : Object,
    //영업중인 가게 수
    openShopNum : Number,
    }
  }
</script>
<style>
@import '../assets/css/components/MyInfo.css';
</style>
