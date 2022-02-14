<template>
<div class="update_container">
  <div class="update_wrap">
      <h4 class="update_title">비밀번호 수정</h4>
        <!-- PW1 -->
        <div>
          <h3 className="join_title"><label>현재 비밀번호</label></h3>
          <span className="box int_pass">
                            <input type="password" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="현재 비밀번호를 입력해 주세요." v-model="userPw1" ref="" @change="checkPW" @focus="checkFlag = false">
            <!-- <span>유효하지 않은 비밀번호 입니다.</span> -->
            <!-- <img src="" id="pswd1_img1" class="pswdImg"> -->
            <span class="error_next_box1" id="pw1Msg" style aria-live="assertive">필수 정보 입니다.</span>  
                        </span>        
          <span className="error_next_box"></span>
        </div>
        <!-- PW2 -->
        <div>
          <h3 className="join_title"><label>비밀번호</label></h3>
          <span className="box int_pass">
                            <input type="password" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="8~16자의 영문/숫자를 조합" v-model="userPw1" ref="" @change="checkPW" @focus="checkFlag = false">
            <!-- <span>유효하지 않은 비밀번호 입니다.</span> -->
            <!-- <img src="" id="pswd1_img1" class="pswdImg"> -->
            <span class="error_next_box1" id="pw1Msg" style aria-live="assertive">필수 정보 입니다.</span>  
                        </span>        
          <span className="error_next_box"></span>
        </div>
        <!-- PW3 -->
        <div>
          <h3 className="join_title"><label>비밀번호 재확인</label></h3>
          <span className="box int_pass_check">
                            <input type="password" id="pswd2-2" className="int"
                                   maxlength="16" v-model="userPw2" @change="checkPW" @focus="checkFlag = false">
            <span className="step_url" v-show="this.userPw1==this.userPw2 && this.userPw1 != ''">비밀번호가 동일</span>
            <span className="step_url" v-show="this.userPw1!=this.userPw2">비밀번호가 동일하지 않습니다.</span>
            <!-- <img src="./img/m_icon_check_disable.png" id="pswd2_img1" class="pswdImg"> -->
                        <span class="error_next_box1" id="pw2Msg" style aria-live="assertive">필수 정보 입니다.</span> 
                        </span>
                        
          <span className="error_next_box"></span>
        </div>  
  </div>
</div>
</template>

<script>
export default {
  name: 'UpdateBizMember',
  data(){
    return {

    }
  },
  methods :{

  },

}
</script>

<style scoped>
@import '../../assets/css/Member/UpdateBizMember.css';
</style>