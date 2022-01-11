<template>

  <div className="container_fluid">
    <h1 className="member_text">
      회원가입
    </h1>
    <!-- wrapper -->
    <div id="wrapper">
      <p className="border_text2">
        STEP2. 로그인/사업자정보 입력
      </p>
      <!-- content-->
      <div id="content">

        <!-- ID -->
        <div>
          <h3 className="join_title">
            <label htmlFor="id">아이디</label>
          </h3>
          <span className="box int_id">
                            <input type="text" id="id2" className="int" maxLength="20" v-model="inputs.userId">
                            <!-- <span className="step_url">유효하지 않은 아이디 입니다.</span> -->
                        </span>
          <span className="error_next_box"></span>
        </div>

        <!-- PW1 -->
        <div>
          <h3 className="join_title"><label>비밀번호</label></h3>
          <span className="box int_pass">
                            <input  type="text" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="8~16자의 영문/숫자를 조합" v-model="inputs.userPw">
                            <!-- <span>유효하지 않은 비밀번호 입니다.</span> -->
            <!-- <img src="" id="pswd1_img1" class="pswdImg"> -->
                        </span>
          <span className="error_next_box"></span>
        </div>

        <!-- PW2 -->
        <div>
          <h3 className="join_title"><label>비밀번호 재확인</label></h3>
          <span className="box int_pass_check">
                            <input type="text" id="pswd2-2" className="int"
                                   maxlength="16">
                            <!-- <span >비밀번호가 동일하지 않습니다.</span> -->
            <!-- <img src="./img/m_icon_check_disable.png" id="pswd2_img1" class="pswdImg"> -->
                        </span>
          <span className="error_next_box"></span>
        </div>


        <!--name-->
        <div>
          <h3 className="join_title"><label>대표자 이름</label></h3>
          <span className="box int_name">
                            <input type="text" id="name2" className="int" maxLength="20"
                                   placeholder="이름을 입력해주세요.">
                        </span>
          <!-- <span className="error_next_box">이름을 입력하세요</span> -->
        </div>
        <!--number-->
        <div>
          <h3 className="join_title"><label>대표자 번호</label></h3>
          <div id="num_wrap">
            <!-- BIRTH_MM -->
            <div id="num_first">
                                <span className="box">
                                    <select id="number" className="sel" v-model="inputs.firstNum">
                                        <option>선택</option>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="019">019</option>
                                    </select>
                                </span>
            </div>
            <!-- BIRTH_YY -->
            <div id="num_second">
                                <span className="box">
                                    <input type="text" id="second2" className="int" maxLength="4" v-model="inputs.secondNum">
                                </span>
            </div>

            <!-- BIRTH_DD -->
            <div id="num_dd">
                                <span className="box">
                                    <input type="text" id="dd2" className="int" maxLength="4" v-model="inputs.thirdNum">
                                </span>
            </div>
          </div>
          <span className="error_next_box"></span>
        </div>
        <!--shop name-->
        <div>
          <h3 className="join_title"><label>매장 이름</label></h3>
          <span className="box int_name">
                            <input type="text" id="name2" className="int" maxLength="20">
                        </span>
          <span className="error_next_box"></span>
        </div>
        <!-- shop number -->
        <div>
          <h3 className="join_title"><label>매장 대표번호</label></h3>
          <span className="box int_mobile">
                            <input type="tel" id="mobile2" className="int" maxLength="11"
                                   placeholder="'-'을 제외한 연락처 번호를 입력해주세요." v-model="inputs.mobileNo">
                        </span>
          <span className="error_next_box"></span>
        </div>
        <!--shop address-->
        <div>
          <h3 className="join_title"><label>매장 주소</label></h3>
          <span className="box int_mobile">
                        <input type="text" id="address2" ref="address" className="int" maxLength="20"
                               placeholder="매장 주소">
                        <button type="submit" className="addr_btn" @click="execDaumPostcode()"
                                value="우편번호 찾기">주소검색</button>
                        </span>
          <span className="box int_mobile">
                        <input type="text" id="detailAddress2" className="int" maxLength="20" placeholder="매장 상세주소">
                        </span>
          <span className="box int_mobile">
                        <input type="text" className="int" v-model="inputs.postcode" placeholder="우편번호">
                        </span>
          <span className="box int_mobile">
                        <input type="text" className="int" id="extraAddress2" ref="extraAddress" placeholder="참고항목">
                        </span>
        </div>


        <!-- JOIN BTN-->
        <div className="btn_area"><span><router-link to="/signup3">
          <button type="button" id="btnJoin">
            다음
          </button>
          </router-link></span>
        </div>


      </div>
      <!-- content-->

    </div>
  </div>


</template>
<script>
import vm from 'vm';
export default {

  data () {
    return {
   inputs: {
     //회원 아이디
      userId: '',
     //회원 비밀번호
      userPw: '',
     //매장대표번호
      mobileNo: '',
     //휴대폰번호 맨앞자리
      firstNum: '',
      //휴대폰번호 중간 4자리
      secondNum: '',
      //휴대폰번호 끝 4자리
      thirdNum: '',
      //휴대폰번호 11자리
      middleNum: '',
      //주소 api
      postcode: "",
      address: "",
      extraAddress: "",
      signup: {
        id: null,
        password: null
       }
      },
      selected: this.$route.params.agree,
    }
  },
  created () {
    console.log(this.selected)
  },
  computed: {
    idValid () {
      return /^[A-Za-z0-9]+$/.test(this.signup.id)
    },
    // passwordValid () {
    //   return /^[A-Za-z0-9]+$/.test(this.signup.password)
    // },
  },
  watch: {
    //중간자리 숫자만 입력가능
    secondNum (a) {
      if (isNaN(a) == true) {
        alert('숫자만 입력 가능합니다.');
        this.secondNum = '';
      }
    },
    //끝자리 숫자만 입력가능
    thirdNum (a) {
      if (isNaN(a) == true) {
        alert('숫자만 입력 가능합니다.');
        this.thirdNum = '';
      }
    },
    middleNum (a) {
      if (isNaN(a) == true) {
        alert('숫자만 입력 가능합니다.');
        this.middleNum = '';
      }
    },

  },
  methods: {

    //비밀번호 재확인 (test용으로 넣은거라 주석처리함)
    // passwordCheckValid () {
    //   if (this.signup.password === this.passwordCheck) {
    //     this.passwordCheckFlag = true
    //   } else {
    //     this.passwordCheckFlag = false
    //   }
    // },
    //비밀번호 확인
    // passwordValid () {
    //   if ((/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(this.signup.password))) {
    //     console.log(data.passwordValid)
    //     this.passwordValidFlag = true
    //   } else {
    //     this.passwordValidFlag = false
    //   }
    // },
    //daum map api
    execDaumPostcode () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                  this.extraAddress !== ""
                      ? `, ${data.buildingName}`
                      : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          console.log(data.extraAddress)
          console.log(data.zonecode)
          this.postcode = data.zonecode;
          this.address = data.address;
          this.extraAddress = data.extraAddress;
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          // $refs.address = data.address;
          // console(data.address)
          //  this.$refs('postcode').value = data.zonecode;
          // this.$refs('address').value = data.addr;
          // this.value = this.address;
          // console.log(data.address)

          // 커서를 상세주소 필드로 이동한다.
          //  this.$refs("detailAddress").focus();

          // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress
          }
        },
      }).open();
    },
  },
    mounted() {

  },


};
</script>


<style>
a {
  text-decoration: none;
}

.input-file-button {
  padding: 3px 30px;
  background-color: #997fb5;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  float: right;
}

input:focus {
  outline: none;
}


h3 {
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
}

.border_text2 {
  padding: 10px 0;
  font-size: 18px;
  color: #997fb5;
  font-weight: 700;
}

.border_text2::after {
  display: block;
  content: '';
  background: #997fb5;
  width: 60%;
  height: 5px;
}

.box {
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
}

.int {
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
}

input {
  font-family: Dotum, '돋움', Helvetica, sans-serif;
}

.box.int_id {
  padding-right: 110px;
}

.box.int_pass {
  padding-right: 40px;
}

.box.int_pass_check {
  padding-right: 40px;
}

.step_url {
  position: absolute;
  top: 16px;
  right: 13px;
  font-size: 14px;
  color: red;
}

.pswdImg {
  width: 18px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 16px;
  margin-top: -10px;
  cursor: pointer;
}

#bir_wrap {
  display: table;
  width: 100%;
}

#bir_yy {
  display: table-cell;
  width: 147px;

}

#bir_mm {
  display: table-cell;
  width: 147px;
  vertical-align: middle;
}

#bir_dd {
  display: table-cell;
  width: 147px;
}

#bir_mm, #bir_dd {
  padding-left: 10px;
}

select {
  width: 100%;
  height: 29px;
  font-size: 15px;
  background: #fff url(https://static.nid.naver.com/images/join/pc/sel_arr_2x.gif) 100% 50% no-repeat;
  background-size: 20px 8px;
  -webkit-appearance: none;
  display: inline-block;
  text-align: start;
  border: none;
  cursor: default;
  font-family: Dotum, '돋움', Helvetica, sans-serif;
}

/* number */

#num_wrap {
  display: table;
  width: 100%;
}

#num_second {
  display: table-cell;
  width: 147px;

}

#num_first {
  display: table-cell;
  width: 147px;
  vertical-align: middle;
}

#num_dd {
  display: table-cell;
  width: 147px;
}

#num_second, #num_dd {
  padding-left: 10px;
}


/* 에러메세지 */

.error_next_box {
  margin-top: 9px;
  font-size: 12px;
  color: red;
}

#alertTxt {
  position: absolute;
  top: 19px;
  right: 10px;
  font-size: 12px;
  color: red;
  display: none;

}

/* 버튼 */
.btn_area {
  margin: 30px 0 91px;
}

#btnJoin {
  width: 100%;
  padding: 21px 0 17px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #997fb5;
  font-size: 20px;
  font-weight: 400;
  font-family: Dotum, '돋움', Helvetica, sans-serif;
}

#address {
  position: relative;
}

.addr_btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #997fb5;
  border: 1px solid #997fb5;
  color: #fff;
  width: 100px;
  height: 30px;
}

</style>
