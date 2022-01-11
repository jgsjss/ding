<template>
  <div class="container_fluid">
    <!-- wrapper -->
    <div id="wrapper">
      <p class="border_text3">
        STEP3. 관리자정보 입력
      </p>
      <!-- content-->
      <div id="content">
        <form
            id="app"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
        >
          <p class="inner_box_text">
            (브랜드)와 소통할 관리자 정보를 적어주세요.<br>
            해당 정보로 정보 전달 및 소통이 이루어지니 정확하게 입력해주세요!
          </p>
          <!--name-->
          <div>
            <h3 class="join_title"><label>관리자 이름</label></h3>
            <span class="box int_name">
                            <input type="text" id="name3" class="int" maxlength="20" placeholder="관리자 이름">
                        </span>
          </div>

          <!--number-->
          <div>
            <h3 class="join_title"><label>관리자 번호</label></h3>
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
                                    <input type="text" id="second" class="int" maxlength="4">
                                </span>
              </div>

              <!-- BIRTH_DD -->
              <div id="num_dd">
                                    <span class="box">
                                        <input type="text" id="dd" class="int" maxlength="4">
                                    </span>
              </div>
              <span class="error_next_box"></span>
            </div>
            <!-- email_address -->
            <div id="email">
              <h3 class="join_title"><label for="email">관리자 메일주소</label></h3>
              <div id="email_wrap">

                <!-- sub_mail -->
                <div id="sub_email">
              <span class="box">
                <input type="text" id="sub_email" class="int" maxlength="20" placeholder="이메일을 입력해주세요">
              </span>
                </div>
                <span class="middle_mail">@</span>
                <span class="box">
                  <select id="email" class="sel">
                    <option>선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="직접입력">직접입력</option>
                  </select>
                </span>
              </div>
            </div>
            <!-- business number -->
            <div>
              <h3 class="join_title"><label for="input_file">사업자 등록증</label></h3>
              <span class="box int_name">
                        <label class="input-file-button" for="input-file">파일첨부
                        </label>
                        <img :src="images" alt="image">
                       <input ref="image" id="input"
                              type="file" name="image" accept="image/jpg image/png image/jpeg" class="hidden">
                <!-- <span>사업자 등록증 : {{}}</span> -->
                      </span>
              <span class="error_next_box"></span>
              <button type="button" id="btnJoin" @click="uploadImage">
                <span>사진보내기</span>
              </button>
            </div>


            <div class="btn_area">
              <router-link to="/signup4">
                <button type="button" id="btnJoin" @click="uploadImage">
                  <span>가입하기</span>
                </button>
              </router-link>
            </div>


          </div>
          <!-- content-->
        </form>
      </div>
    </div>
  </div>


</template>
<script>
import router from '../router'
import axios from 'axios'

export default {
  data () {
    return {
      input: {
        mobileNo: '',
        //주소 api
        postcode: '',
        address: '',
        extraAddress: ''
      },
      bizNum: 99999999999999999999,
      images: '',

    }
  },
  // watch:
  //     {
  //       //중간자리 숫자만 입력가능
  //       secondNum(a)
  //       {
  //         if (isNaN(a) == true) {
  //           alert('숫자만 입력 가능합니다.');
  //           this.secondNum = '';
  //         }
  //       }
  //       ,
  //       //끝자리 숫자만 입력가능
  //       thirdNum(a)
  //       {
  //         if (isNaN(a) == true) {
  //           alert('숫자만 입력 가능합니다.');
  //           this.thirdNum = '';
  //         }
  //       }
  //     },

  methods: {
    //이미지 업로드
    uploadImage: function () {
      const biz = this.bizNum
      let form = new FormData()
      let image = this.$refs['image'].files[0]

      form.append('image', image)
      // form.append('biznum',this.bizNum)

      axios.post('/api/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'biznum': biz
        }
      }).then(({ data }) => {
        this.images = data
        console.log(data)
      })
          .catch(err => console.log(err))
    },
    sendRouteParam () {
      router.push({
        name: 'routeParam1',
        params: { val: this.input }
        // params: { val: "값 넘어옴" }
      })
    },
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
          console.log(data.extraAddress)
          console.log(data.zonecode)
          this.postcode = data.zonecode
          this.address = data.address
          this.extraAddress = data.extraAddress
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          // $refs.address = data.address;
          // console(data.address)
          //  this.$refs('postcode').value = data.zonecode;
          // this.$refs('address').value = data.addr;
          this.value = this.address
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
      }).open()
    }
    ,
  }
  ,
//     mounted() {
//   this.$nextTick(function () {
//     // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
//     $refs('address').value = data.addr;
//   })
// }
}
</script>


<style>
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

.border_text3 {
  padding: 10px 0;
  font-size: 18px;
  color: #997fb5;
  font-weight: 700;
}

.border_text3::after {
  display: block;
  content: '';
  background: #997fb5;
  width: 100%;
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

.inner_box_text {
  width: 90%;
  font-size: 14px;
  text-align: left;
  color: #997fb5;
  font-weight: 500;
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

#email_wrap {
  display: table;
  width: 100%;
}

#email {
  display: table-cell;
  width: 147px;
}

#sub_email {
  display: table-cell;
  width: 260px;
  vertical-align: middle;
}

.middle_mail {
  display: table-cell;
  padding: 0 10px;
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

.input-file-button {
  display: none;
}

#input-file {
  width: 100%;
}
</style>
