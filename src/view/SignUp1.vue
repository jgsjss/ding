<template>
  <div class="container_fluid">
    <!-- wrapper -->
    <div id="wrapper">
      <p class="border_text1">
        STEP1. 회원약관 동의
      </p>
      <!-- content-->
      <div id="content">
        <div class="terms_box1">
          <label class="login_check_wrap"><span class="terms_text">딩동오더 이용약관, 개인정보 처리방침 광고성 정보 수신(선택)에 모두 동의합니다.</span>
            <input type="checkbox" v-model="allSelected" @click="allSelect">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">14세 이상
            <input type="checkbox" v-model="selected" :value="agree[0]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">이용약관
            <input type="checkbox" v-model="selected" :value="agree[1]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">개인정보 처리방침
            <input type="checkbox" v-model="selected" :value="agree[2]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">광고성 정보 마케팅 동의
            <input type="checkbox" v-model="selected" :value="agree[3]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
      </div>


      <!--prev-->
      <div class="term_wrap">
        <div class="term_box">

          <router-link to="/Login">
            <button type="button" id="term_btnJoin1">
              <span>이전</span>
            </button>
          </router-link>
          <!--next-->
          <router-link to="/signup2" >
            <button type="button" id="term_btnJoin2">
              <span>다음</span>
            </button>
          </router-link>
<button type="button" @click="$hi">테스트</button>
        </div>
      </div>

    </div>
  </div>


</template>
<script>


export default {
  data () {
    return {
      agree: ['14세이상', '이용약관', '개인정보', '마케팅'],
      allSelected: false,
      selected: [],

    }
  },
  methods: {

    select () {
      this.selected = []
      if (!this.allSelected) {
        for (let i in this.agree) {
          this.selected.push(this.agree[i])
        }
      }
    },
    updateCheckall: function () {
      if (this.agree.length == this.selected.length) {
        this.allSelected = true
      } else {
        this.allSelected = false
      }
    }
  },
  computed: {
    allSelect () {
      this.selected = [...this.agree]
      // console.log(this.selected)
    }
  },
  watch: {

  },
  mounted () {
    this.$test()
  }
}
</script>


<style>
#content {
  height: 400px;
}

.border_text1 {
  padding: 10px 0;
  font-size: 18px;
  color: #997fb5;
  font-weight: 700;
}

.border_text1::after {
  display: block;
  content: '';
  background: #997fb5;
  width: 30%;
  height: 5px;
}

/* check */
.term_wrap {
  padding: 30px 0;
}

.terms_box1 {
  width: 100%;
  height: 100px;
  border: 1px solid #997fb5;
  padding: 25px 30px;
  margin: 30px 0;
  font-size: 14px;
  color: #997fb5;
}

.terms_text {
  text-decoration: underline;
}

.terms_box {
  width: 100%;
  padding: 10px 30px;
  font-size: 14px;
}

/* Check*/
.login_check_wrap {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #997fb5;
}

/* Hide the browser's default checkbox */
.login_check_wrap input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 1px solid #997fb5;
  border-radius: 100%;
}

/* On mouse-over, add a grey background color */
.login_check_wrap:hover input ~ .checkmark {
  background-color: #fff;
}

/* When the checkbox is checked, add a blue background */
.login_check_wrap input:checked ~ .checkmark {
  background-color: #997fb5;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.login_check_wrap input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.login_check_wrap .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* 버튼 */
.term_box {
  width: 100%;
  display: table;
}

.term_box > a {
  text-decoration: none;
}

#term_btnJoin1 {
  display: table-cell;
  width: 220px;
  padding: 20px 15px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #dcd4e3;
  font-size: 20px;
  margin: 0 10px;
  font-weight: 400;
  font-family: Dotum, '돋움', Helvetica, sans-serif;
}

#term_btnJoin2 {
  display: table-cell;
  width: 220px;
  padding: 20px 15px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #997fb5;
  font-size: 20px;
  margin: 0 10px;
  font-weight: 400;
  font-family: Dotum, '돋움', Helvetica, sans-serif;
}

</style>
