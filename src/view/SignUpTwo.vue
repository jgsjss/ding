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
                            <input type="text" id="id2" className="int" maxLength="20" v-model="userId"
                                   @change="isUser(userId)">
             <span className="step_url" v-show="userCheck1">유효하지 않은 아이디 입니다.</span>
             <span className="step_url" v-show="userCheck2">사용가능한 아이디 입니다.</span>
                        </span>
          <span className="error_next_box"></span>
        </div>
        <!-- PW1 -->
        <div>
          <h3 className="join_title"><label>비밀번호</label></h3>
          <span className="box int_pass">
                            <input type="password" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="8~16자의 영문/숫자를 조합" v-model="userPw">
            <!-- <span>유효하지 않은 비밀번호 입니다.</span> -->
            <!-- <img src="" id="pswd1_img1" class="pswdImg"> -->
                        </span>
          <span className="error_next_box"></span>
        </div>
        <!-- PW2 -->
        <div>
          <h3 className="join_title"><label>비밀번호 재확인</label></h3>
          <span className="box int_pass_check">
                            <input type="password" id="pswd2-2" className="int"
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
                                   v-model="userName" placeholder="이름을 입력해주세요.">
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
                                    <select id="number" className="sel" v-model.trim="firstNum" ref="firstNum">
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
                                    <input type="text" id="second2" className="int" maxLength="4"
                                           v-model.trim="secondNum" ref="secondNum">
                                </span>
            </div>
            <!-- BIRTH_DD -->
            <div id="num_dd">
                                <span className="box">
                                    <input @change="phoneNumConcat()" type="text" id="dd2" className="int" maxLength="4"
                                           v-model.trim="thirdNum" ref="thirdNum">
                                </span>
            </div>
          </div>
          <span className="error_next_box"></span>
        </div>
        <!--shop name-->
        <div>
          <h3 className="join_title"><label>매장 이름</label></h3>
          <span className="box int_name">
                            <input type="text" id="name3" className="int" maxLength="20" v-model.trim="shopName">
                        </span>
          <span className="error_next_box"></span>
        </div>
        <!-- shop number -->
        <div>
          <h3 className="join_title"><label>매장 대표번호</label></h3>
          <span className="box int_mobile">
                            <input type="tel" id="mobile2" className="int" maxLength="11"
                                   placeholder="'-'을 제외한 연락처 번호를 입력해주세요." v-model.trim="shopPhNum">
                        </span>
          <span className="error_next_box"></span>
        </div>
        <!--shop address-->
        <div>
          <h3 className="join_title"><label>매장 주소</label></h3>
          <span className="box int_mobile">
                        <input type="text" id="address2" ref="address" className="int" maxLength="20"
                               v-model.trim="address"
                               placeholder="매장 주소">
                        <button type="submit" className="addr_btn" @click="execDaumPostcode()"
                                value="우편번호 찾기">주소검색</button>
                        </span>
          <span className="box int_mobile">
                        <input type="text" id="detailAddress2" className="int" maxLength="20"
                               v-model.trim="extraAddress" placeholder="매장 상세주소">
                        </span>
          <span className="box int_mobile">
                        <input type="text" className="int" v-model.trim="postcode" placeholder="우편번호">
                        </span>
          <span className="box int_mobile">
                        <input type="text" className="int" id="extraAddress2" ref="extraAddress" v-model.trim="etc"
                               placeholder="참고항목">
                        </span>
        </div>
        <!-- JOIN BTN-->
        <div className="btn_area"><span><router-link to="/signupthree" @click="sendParam">
          <button type="button" id="btnJoin">
            다음
          </button>
          </router-link></span>
        </div>
        <button @click="test()">테스트</button>
        <button @click="insertDTO()">테스트DTO</button>
      </div>
      <!-- content-->
    </div>
  </div>

</template>
<script>
import router from '../router'
//인스턴스화 시켜서 ORM Mapping 필요함.
import uservo from '../DTO/userVO'
import store from '../store/index.js'
import axios from 'axios'

export default {
  props: {
    signupAgree: {
      type: [Array, String],
      default: function () {
        return ['']
      }
    }
  },
  data () {
    return {
      //회원 아이디
      userId: '',
      //회원 비밀번호
      userPw: '',
      //사업자대표 이름
      userName: '',
      //사업자 휴대폰 번호
      userPhNum: '',
      //매장이름
      shopName: '',
      //매장대표번호
      shopPhNum: '',
      //주소 우편번호
      postcode: '',
      //매장 주소
      address: '',
      //매장 상세주소
      extraAddress: '',
      //참고항목
      etc: '',
      //휴대폰번호 맨앞자리
      firstNum: '',
      //휴대폰번호 중간 4자리
      secondNum: '',
      //휴대폰번호 끝 4자리
      thirdNum: '',
      userCheck1:false,
      userCheck2:false
    }
  },
  methods: {
    isUser () {
      // let data = JSON.stringify({ 'userid': this.userId })
      // let userdata = { 'userid': this.userId }
      console.log(typeof this.userId)
      console.log(this.userId)
      axios({
        url: '/api/isuser',
        method: 'post',
        data: { 'userid': this.userId }
      }).then(res => {
        if (res.data == 1) {
          console.log('아이디 존재')
          this.userCheck1 = false
          this.userCheck2 = true
        } else {
          console.log('아이디 없음')
          this.userCheck1 = true
          this.userCheck2 = false
        }
      })
    },
    insertDTO () {
      let user = new uservo()
      user.userName = this.userName
      user.userPw = this.userPw
      console.log(user)
    },
    test () {
      console.log(store.state.signupStore.selected)
      // console.log(this.selected)
      // console.log()
    },
    //휴대폰번호 입력받고 합치기
    phoneNumConcat () {
      let phoneNum = ''
      this.userPhNum = phoneNum.concat(this.firstNum, this.secondNum, this.thirdNum)
      console.log(this.userPhNum)
    },
    sendParam () {
      store.state.signupStore.userId = this.userId,
          store.state.signupStore.userName = this.userName,
          store.state.signupStore.userPw = this.userPw,
          store.state.signupStore.phNum = this.userPhNum,
          store.state.signupStore.shopName = this.shopName,
          store.state.signupStore.shopPhNum = this.shopPhNum,
          store.state.signupStore.bizAddr1 = this.address,
          store.state.signupStore.bizAddr2 = this.extraAddress,
          store.state.signupStore.bizZip = this.postcode,
          store.state.signupStore.etc = this.etc
    },
    //daum map api
    execDaumPostcode () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== '') {
            this.extraAddress = ''
          }
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress
          }
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.extraAddress +=
                  this.extraAddress !== ''
                      ? `, ${data.buildingName}`
                      : data.buildingName
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== '') {
              this.extraAddress = `(${this.extraAddress})`
            }
          } else {
            this.extraAddress = ''
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode
        },
      }).open()
    },
  }
  ,
  created () {

  }
  ,
  mounted () {
    console.log('마운티드 signupStore에서 바로 불러온 값 : ', store.state.signupStore.selected)
  }
  ,
  computed: {
    idValid () {
      return /^[A-Za-z0-9]+$/.test(this.id)
    }
    ,
    // passwordValid () {
    //   return /^[A-Za-z0-9]+$/.test(this.signup.password)
    // },
  }
  ,
  watch: {
    secondNum (a) {
      if (isNaN(a) == true || a == '') {
        alert('숫자만 입력 가능합니다.')
        this.secondNum = ''
        this.$refs.secondNum.focus()
      }
    }
    ,
    thirdNum (a) {
      if (isNaN(a) == true || a == '') {
        alert('숫자만 입력 가능합니다.')
        this.thirdNum = ''
        this.$refs.thirdNum.focus()
      }
    }
  }
  ,
}
</script>

<style>
@import '../assets/css/Member/SignUpTwo.css';
</style>
