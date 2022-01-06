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
      <router-link to="@view/Login" class="myinfo_logout"><button type="button" class="logout-btn">로그아웃</button></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props : {
       //운영관리 데이터 프롭스 ---
    shopData : Object,
    //영업중인 가게 수
    openShopNum : Number,
    }
  }
</script>
<style>
  .container {
  width:100%;
  margin:0 auto;
}
  .info_img {
  width:70px;
  height:70px;
  border:1px solid #997fb5;
  border-radius: 100%;
  line-height:4;
  margin:0 auto;
}
  .info_text {
  padding:30px 0;
}
  .wrap{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .wrap1{
  float: left;
}
  .wrap1 .info_left{
  margin: 10px;
  text-align: left;
  color:#b29ec7;
}

  .wrap2{
  float: left;
  position: relative;
  right: 0px;}

  .wrap2 .info_right{
    text-align: end;
  margin: 10px;
  color:#997fb5;
  font-weight:500;
}
  .info_order_text {
  position:relative;
  padding:20px 0;
}
  .info_order_text:after {
  position:absolute;
  display: block;
  content: '';
  width:100%;
  height:1px;
  background:#997fb5;
  top:10%;
  left:0;
}
  .logout-btn {
  width:100%;
  border:1px solid #997fb5;
  background:transparent;
  color:#997fb5;
  height:50px;
  margin:15px 0;
}

  /* media query */
  @media ( min-width : 768px) {

}
  @media ( min-width : 992px) {

}
  @media ( min-width : 1200px) {

}
</style>
