<template>
<div class="container_fluid">
  <h4 class="shop_name">(가게이름) 가입 심사중 입니다 :)</h4>
  <div class="sub_text">
    <p>심사는 최대 7일까지 걸릴 수 있습니다(완료시 문자/이메일 알림)</p>
    <p>문의사항이 있으시면 (브랜드 대표번호)로 연락주세요!</p>
  </div>
  <div class="btn_box"><a href="#!">비밀번호/사업자정보 수정</a></div>
  <div class="btn_box"><a href="#!">관리자정보 수정</a></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container_fluid {
  margin:0 auto;
  padding:100px 0;
}
.shop_name {
  text-align: center;
  color:#997fb5;
  font-size:20px;
}
.sub_text {
  padding: 20px 0 5px 0;
  margin:0 auto;
  line-height:0.5;
}
.sub_text > p {
  color:#997fb5;
  font-size:14px;
}
.btn_box {
  border:1px solid #997fb5;
  border-radius:15px;
  padding:30px 15px;
  text-align: left;
  margin:15px 0;
}
.btn_box > a {
  text-decoration: none;
  color:#997fb5;
  font-size:14px;
}
.btn_box:after {
    content: "\e93f";
    text-align: right;
    width: 10px;
    height: 10px;
    float: right;
    padding: 0 20px;
    font-family: 'xeicon';
    color:#997fb5;
}
</style>