<template>
<div class="update_container">
  <div class="update_wrap">
      <h4 class="update_title">가입 신청 취소</h4>
        <!-- PW1 -->
        <div>
          <h3 className="join_title"><label>아이디</label></h3>
          <span className="box int_pass">
                            <input type="text" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="가입신청시 아이디를 입력해 주세요." v-model="userid" ref="" @change="checkPW" @focus="checkFlag = false">
            <span class="error_next_box1" id="pw1Msg" style aria-live="assertive">필수 정보 입니다.</span>
                        </span>        
          <span className="error_next_box"></span>
        </div>
        <!-- PW2 -->
        <div>
          <h3 className="join_title"><label>비밀번호</label></h3>
          <span className="box int_pass">
                            <input type="password" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="가입신청시 비밀번호를 입력해 주세요." v-model="userpw" ref="" @change="checkPW" @focus="checkFlag = false">

            <span class="error_next_box1" id="pw1Msg" style aria-live="assertive">필수 정보 입니다.</span>
                        </span>        
          <span className="error_next_box"></span>
        </div>
  </div>
  <div class="pws_info_btn_wrap">
  <button type="button" class="pws_info_btn">돌아가기</button>
  <button type="button" class="pws_info_btn" @click="deleteUser">가입 신청 취소</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateBizMember',
  data(){
    return {

      userid: '',
      userpw: '',

      pwCheck : false,

    }
  },
  methods :{
    deleteUser(){
      axios({
        url: '/api/deleteuser',
        method: 'post',
        data: { 'userid': this.userid, 'userpw': this.userpw  }
      }).then(res => {
        if (res.data == 1) {

        } else {

        }
      })
    }
  },

}
</script>

<style scoped>
@import '../../assets/css/Member/UpdateBizMember.css';
</style>