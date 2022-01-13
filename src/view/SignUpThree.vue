<template>
  <div class="container_fluid">
    <!-- wrapper -->
    <div id="wrapper">
      <p class="border_text3">STEP3. 관리자정보 입력</p>
      <!-- content-->
      <div id="content">
        <form
          id="app"
          @submit="checkForm"
          action="https://vuejs.org/"
          method="post"
        >
          <p class="inner_box_text">
            (브랜드)와 소통할 관리자 정보를 적어주세요.<br />
            해당 정보로 정보 전달 및 소통이 이루어지니 정확하게 입력해주세요!
          </p>
          <!--name-->
          <div>
            <h3 class="join_title"><label>관리자 이름</label></h3>
            <span class="box int_name">
              <input
                type="text"
                id="name3"
                v-model="inputs.manageName"
                class="int"
                maxlength="20"
                placeholder="관리자 이름"
              />
            </span>
          </div>

          <!--number-->
          <div>
            <h3 class="join_title"><label>관리자 번호</label></h3>
            <div id="num_wrap">
              <!-- BIRTH_MM -->
              <div id="num_first">
                <span class="box">
                  <select id="number" class="sel" v-model="inputs.firstNum">
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
                  <input type="text" id="second" class="int" maxlength="4" v-model="inputs.secondNum" />
                </span>
              </div>

              <!-- BIRTH_DD -->
              <div id="num_dd">
                <span class="box">
                  <input type="text" id="dd" class="int" maxlength="4" v-model="inputs.thirdNum" />
                </span>
              </div>
              <span class="error_next_box"></span>
            </div>
            <!-- email_address -->
            <div id="email">
              <h3 class="join_title">
                <label for="email">관리자 메일주소</label>
              </h3>
              <div id="email_wrap">
                <!-- sub_mail -->
                <div id="sub_email">
                  <span class="box">
                    <input
                      type="text"
                      id="sub_email"
                      class="int"
                      maxlength="20"
                      placeholder="이메일을 입력해주세요"
                    />
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
            <h3 class="join_title"><label>사업자 번호</label></h3>
            <div id="shopnum_wrap">
              <!-- shop_num one -->
              <div id="shop_one">
                <span class="box">
                  <input
                    type="text"
                    id="shop_one"
                    class="int"
                    maxlength="3"
                    title="사업자처음3자리"
                    v-model="inputs.bizNum1"
                  />
                </span>
              </div>

              <!-- shop_num two-->
              <div id="shop_two">
                <span class="box">
                  <input
                    type="text"
                    id="shop_two"
                    class="int"
                    maxlength="2"
                    title="사업자중간2자리"
                    v-model="inputs.bizNum2"
                  />
                </span>
              </div>

              <!-- shop_num three-->
              <div id="shop_three">
                <span class="box">
                  <input
                    type="text"
                    id="shop_three"
                    class="int"
                    maxlength="5"
                    title="사업자마지막5자리"
                    v-model="inputs.bizNum3"
                  />
                </span>
              </div>
            </div>
            <!-- business number -->
            <div>
              <h3 class="join_title">
                <label for="input_file">사업자 등록증</label>
              </h3>
              <span class="box int_name">
                <label class="input-file-button" for="input-file"
                  >파일첨부
                </label>
                <input
                  ref="image"
                  id="input"
                  type="file"
                  name="image"
                  accept="image/jpg image/png image/jpeg"
                  class="hidden"
                />
                <!-- <span>사업자 등록증 : {{}}</span> -->
              </span>
              <span class="error_next_box"></span>
              <button type="button" id="btnJoin" @click="uploadImage">
                <span>사진보내기</span>
              </button>
            </div>

            <div class="btn_area">
              <router-link to="/signupfour">
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
import router from "../router";
import axios from "axios";
export default {
  data() {
    return {
      inputs: {
        //관리자 이름
        manageName:"",
        //관리자 번호 첫번째
        firstNum:"",
        //관리자 번호 두번째
        secondNum:"",
        //관리자 번호 세번째
        thirdNum:"",
        mobileNo: this.firstNum+this.secondNum+this.thirdNum,
        bizNum1:"",
        bizNum2:"",
        bizNum3:"",
        sumBizNum:this.bizNum1+this.bizNum2+this.bizNum3
      },
      memberInfo: this.$route.params.signup2Info,
      memberAgree: this.$route.params.signup1Agree,
      images: "",


    };
  },
  methods: {
    //이미지 업로드
    uploadImage: function () {
      const biz = this.bizNum;
      let form = new FormData();
      let image = this.$refs["image"].files[0];
      form.append("image", image);
      // form.append('biznum',this.bizNum)
      axios
        .post("/api/upload", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            biznum: biz,
          },
        })
        .then(({ data }) => {
          this.images = data;
          console.log(data);
        })
        .catch((err) => console.log(err));
    },

  },
      created() {
      console.log(this.memberInfo)
      console.log(this.memberAgree)
      console.log(this.$route.params.signup2Info)
      console.log(this.$route.params.signup1Agree)
  }
};
</script>


<style>
@import '../assets/css/Member/SignUpThree.css';
</style>
