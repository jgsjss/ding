<template>
  <div class="container_fluid">
    <h1 class="member_text">
      DINGDONG ORDER
    </h1>
    <!-- wrapper -->
    <div class="login_wrap">
      <form
        id="app"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
      >
      <!-- ID -->
      <div>
        <h3 class="join_title">
          <label for="id">아이디</label>
        </h3>
        <span class="box int_id">
                            <input type="text" id="id" class="int" maxlength="20">
                            <span class="step_url"></span>
                        </span>
        <span class="error_next_box"></span>
      </div>

      <!-- PW1 -->
      <div class="pswd_box">
        <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
        <span class="box int_pass">
                            <input type="text" id="pswd1" class="int" maxlength="20">
                            <span id="alertTxt">사용불가</span>
          <!-- <img src="../public/m_icon_pass.png" id="pswd1_img1" class="pswdImg"> -->
                        </span>
        <span class="error_next_box"></span>
      </div>
      <!--로그인 상태 유지-->
      <label class="login_check_wrap">로그인 상태 유지
        <input type="checkbox" v-model="checked">
        <span class="checkmark"></span>
      </label>

      <!-- JOIN BTN-->
      <div class="btn_area">
        <button type="button" id="btnJoin">
          <span>로그인</span>
        </button>
      </div>
      <p class="login_text"><a href="#!" class="member"><router-link to="/signupOne">회원가입&nbsp;</router-link></a>후 딩동오더를 이용해 보세요!</p>
      </form>
    </div>
    <p class="login_bottom">
      아이디/비밀번호 분실 시 (브랜드)로 직접 연락해주세요!
    </p>
    <!-- content-->




  </div>
</template>
<script>
import $ from 'jquery';
export default {
}
</script>
<style>
@import '../assets/css/Member/Login.css';
</style>