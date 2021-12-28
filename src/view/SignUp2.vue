<template>

  <div class="container_fluid">
    <h1 class="member_text">
      회원가입
    </h1>
    <!-- wrapper -->
    <div id="wrapper">
      <p class="border_text2">
        STEP2. 로그인/사업자정보 입력
      </p>
      <!-- content-->
      <div id="content">

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
        <div>
          <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
          <span class="box int_pass">
                            <input type="text" id="pswd1" class="int" maxlength="20" placeholder="8~16자의 영문/숫자를 조합">
                            <span id="alertTxt">사용불가</span>
            <!-- <img src="" id="pswd1_img1" class="pswdImg"> -->
                        </span>
          <span class="error_next_box"></span>
        </div>

        <!-- PW2 -->
        <div>
          <h3 class="join_title"><label for="pswd2">비밀번호 재확인</label></h3>
          <span class="box int_pass_check">
                            <input type="text" id="pswd2" class="int" maxlength="20">
            <!-- <img src="./img/m_icon_check_disable.png" id="pswd2_img1" class="pswdImg"> -->
                        </span>
          <span class="error_next_box"></span>
        </div>

        <!-- business number -->
        <div>
          <h3 class="join_title"><label for="input_file">사업자 등록번호</label></h3>
          <span class="box int_name">
                        <label class="input-file-button" for="input-file">파일첨부
                        </label>
                        <input type="file" id="input-file" style="display:none"/>
                      </span>
          <span class="error_next_box"></span>
        </div>
        <!--name-->
        <div>
          <h3 class="join_title"><label for="name">대표자 이름</label></h3>
          <span class="box int_name">
                            <input type="text" id="name" class="int" maxlength="20">
                        </span>
          <span class="error_next_box"></span>
        </div>
        <!--number-->
        <div>
          <h3 class="join_title"><label for="number">대표자 번호</label></h3>
          <div id="num_wrap">
            <!-- BIRTH_MM -->
            <div id="num_first">
                                <span class="box">
                                    <select id="number" class="sel">
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
                                <span class="box">
                                    <input type="text" id="second" class="int" maxlength="4" v-model="secondNum">
                                </span>
            </div>

            <!-- BIRTH_DD -->
            <div id="num_dd">
                                <span class="box">
                                    <input type="text" id="dd" class="int" maxlength="4" v-model="thirdNum">
                                </span>
            </div>
          </div>
          <span class="error_next_box"></span>
        </div>
        <!--shop name-->
        <div>
          <h3 class="join_title"><label for="name">매장 이름</label></h3>
          <span class="box int_name">
                            <input type="text" id="name" class="int" maxlength="20">
                        </span>
          <span class="error_next_box"></span>
        </div>
        <!-- shop number -->
        <div>
          <h3 class="join_title"><label for="phoneNo">매장 대표번호</label></h3>
          <span class="box int_mobile">
                            <input type="tel" id="mobile" class="int" maxlength="16" placeholder="전화번호 입력">
                        </span>
          <span class="error_next_box"></span>
        </div>
        <!--shop address-->
        <div>
          <h3 class="join_title"><label for="name">매장 주소</label></h3>
          <span class="box int_mobile">
                        <input type="text" id="address" ref="address" class="int"  maxlength="20" placeholder="매장 주소">
                        <button type="submit" class="addr_btn" @click="execDaumPostcode()" value="우편번호 찾기">주소검색</button>
                        </span>
          <span class="box int_mobile">
                        <input type="text" id="detailAddress" class="int" maxlength="20" placeholder="매장 상세주소">
                        </span>
          <span class="box int_mobile">
                        <input type="text" class="int" v-model="postcode" placeholder="우편번호">
                        </span>
          <span class="box int_mobile">
                        <input type="text" class="int" id="extraAddress" ref="extraAddress" placeholder="참고항목">
                        </span>
        </div>




        <!-- JOIN BTN-->
        <div class="btn_area">
          <button type="button" id="btnJoin">
            <span><router-link to="/signup3">다음</router-link></span>
          </button>
        </div>



      </div>
      <!-- content-->

    </div>
  </div>



</template>
<script>
export default {
  data () {
    return {
      mobileNo: '',
      number: '',
      //휴대폰번호 중간 4자리
      secondNum: '',
      //휴대폰번호 끝 4자리
      thirdNum: '',
      //주소 api
      postcode: "",
      address: "",
      extraAddress: "",
    }
  },
  watch: {
    //중간자리 숫자만 입력가능
    secondNum(a){
      if(isNaN(a) == true){
        alert('숫자만 입력 가능합니다.');
        this.secondNum = '';
      }
    },
    //끝자리 숫자만 입력가능
    thirdNum(a){
      if(isNaN(a) == true){
        alert('숫자만 입력 가능합니다.');
        this.thirdNum = '';
      }
    }
  },
  methods: {
    execDaumPostcode() {
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
          this.value = this.address;
          console.log(data.address)
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
//     mounted() {
//   this.$nextTick(function () {
//     // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
//     $refs('address').value = data.addr;
//   })
// }

};
</script>


<style>
.input-file-button {
  padding: 3px 30px;
  background-color:#997fb5;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  float:right;
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
  padding:10px 0;
  font-size:18px;
  color:#997fb5;
  font-weight: 700;
}
.border_text2::after {
  display: block;
  content: '';
  background:#997fb5;
  width:60%;
  height:5px;
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
  font-family: Dotum,'돋움',Helvetica,sans-serif;
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
  /*@naver.com*/
  position: absolute;
  top: 16px;
  right: 13px;
  font-size: 15px;
  color: #8e8e8e;
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
  font-family: Dotum,'돋움',Helvetica,sans-serif;
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
  display: none;
}

#alertTxt {
  position: absolute;
  top: 19px;
  right: 38px;
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
  font-family: Dotum,'돋움',Helvetica,sans-serif;
}
#address {
  position:relative;
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
