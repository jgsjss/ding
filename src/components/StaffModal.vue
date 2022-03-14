<template>
  <!--modal 직원추가-->
<div class="modal fade" id="addition" tabindex="-1" aria-labelledby="additionModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="additionModalLabel">직원추가</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<form id="staffadd" @submit.prevent="sendCheck" method="post">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">이름</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control textField" 
      id="stName1"
      maxlength="10"
      v-model="stName"
      @change="errorCh"
      @focus="checkFlag = false"
      :class="{'textError': nameError}"
      />
      <!-- <p v-if="nameError" class="subError">이름을 입력해 주세요</p> -->
      <span class="error_text_box" id="stName" style aria-live="assertive">필수입력 정보입니다.</span>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control textField" 
      id="stId2" 
      v-model="stId"
      maxlength="20"
      @change="isStId(stId)"
      @focus="checkFlag = false"
      :class="{'textError': idError}"
      >
      <!-- <p v-if="idError" class="subError">아이디를 입력해 주세요</p> -->
      <span class="step_st" v-show="stCheck1">사용가능한 아이디 입니다.</span>
      <span class="step_st" v-show="stCheck2">이미 사용중인 아이디 입니다.</span>
      <span class="error_text_box" id="stIdMsg" style aria-live="assertive">필수입력 정보입니다.</span>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input 
      type="password" 
      class="form-control textField" 
      id="stPw2" 
      v-model="stPw"
      maxlength="16"
      placeholder="8~16자의 영문/숫자를 조합"
      ref=""
      @change="checkStPw"
      @focus="checkFlag = false "
      :class="{'textError': pwError}"
      >
      <!-- <p v-if="pwError" class="subError">비밀번호를 입력해주세요.</p> -->
      <span class="error_text_box" id="stPwMsg" style aria-live="assertive">필수 입력 정보입니다.</span>
    </div>
  </div>
  <!--/////권한설정 체크박스/////-->
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">권한설정</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checked" :value="check[0]" @change="NewCheck()">
        <label class="col-form-label" for="checkbox">
          메뉴편집
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox"  v-model="checked" :value="check[1]" @change="NewCheck()">
        <label class="col-form-label" for="checkbox">
          매출관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checked" :value="check[2]" @change="NewCheck()">
        <label class="col-form-label" for="checkbox">
          직원관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checked" :value="check[3]" @change="NewCheck()">
        <label class="col-form-label" for="checkbox">
          로그확인
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checked" :value="check[4]" @change="NewCheck()">
        <label class="col-form-label" for="checkbox">
          할인코드
        </label>
      </div>
    </div>
  </fieldset>
</form>
      </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary">취소</button>
            <button type="submit" class="btn btn-primary"  @click="login">등록</button>
          </div>
    </div>
  </div>
</div>
<!--직원추가모달 끝-->

<!--직원설정 모달 시작-->
<!--일치하는 정보가 있는지 찾아야함-->
<div class="modal fade" id="staffsetting" tabindex="-1" aria-labelledby="staffsetting" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staffsetting">직원설정</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">이름</label>
    <div class="col-sm-10">
      <input 
      type="email" 
      class="form-control" 
      id="sName"
      >
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="sId">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="sPw">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">권한설정</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked v-model="setchecked" :value="setcheck[0]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios1">
          메뉴편집
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[1]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          매출관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[2]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          직원관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[3]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          로그확인
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[4]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          할인코드
        </label>
      </div>
    </div>
  </fieldset>
  <div class="staff_clear d-grid">
  <button type="button" class="btn btn-lg clear_btn">직원삭제</button>
  </div>
</form>
      </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">저장</button>
          </div>
    </div>
  </div>
</div>
<!--직원설정 모달 끝-->
  <div></div>
</template>

<script>
import router from "../router";
import axios from "axios";
// import store from "../../store/index.js";
export default {
  data() {
    return {
        //직원추가 이름
        stName:'',
        //직원추가 아이디
        stId:'',
        //직원추가 비밀번호
        stPw:'',
        //직원설정 이름
        sName:'',
        //직원설정 아이디
        sId:'',
        //직원설정 비밀번호
        sPw:'',
        //직원추가 권한설정 체크박스
        check: ['메뉴편집', '매출관리', '직원관리', '로그확인', '할인코드'],
        ListChecked: false,
        checked: [],
        NoChecked: [],
        //직원설정 권한설정 체크박스
        setcheck: ['메뉴편집', '매출관리', '직원관리', '로그확인', '할인코드'],
        setListChecked: false,
        setchecked: [],
        NoSetChecked: [],
        //아이디 및 비밀번호 유효성 체크
        stCheck1: false,
        stCheck2: false,
        stPwCheck: false,
        //정보 공백 확인
        nameError:false,
        idError:false,
        pwError:false,
    }
  },
  methods: {
    // typing: function(e) {
    //   console.log(e.target.value)
    //   let stName = e.target.target.value
    //   let pattern = /([가-힣]\x20])/i
    //   this.valid = (stName.length > 1 && pattern.test(stName) === false)
    // },
    errorCh() {
      let stName = document.getElementById("stName1").value;


      //직원이름
      if (stName == "") {
        document.getElementById("stName").style.display = "block";
        return false;
      } else if (stName != "") {
        document.getElementById("stName").style.display = "none";
        return false;
      }

      },
      isStId() {
        let id = document.getElementById("stId2").value;
        let idValue = /^[a-zA-z0-9]{4,12}$/;

        console.log(typeof this.stId);
        console.log(this.stId);
        if(id == "") {
          document.getElementById("stIdMsg").style.display = "block;"
        } else if (id != "") {
          document.getElementById("stIdMsg").style.display = "none";
        }
        if (id.length < 6) {
          this.$swal("아이디는 최소 6자리 이상입니다.");
        } else if (id.search(/\s/) !== -1) {
          this.$swal("아이디에 공백은 불가능합니다.");
        } else if (id.search(/[~!@#$%^&*()_+|<>?:{}]/) !== -1) {
          this.$swal("아이디에 특수문자는 불가능합니다.");
        } else if (id.search(/[가-힣]/) !== -1) {
          this.$swal("아이디에 한글은 불가능합니다.")

        // axios({
        //   url: "/api/isStId",
        //   method: "post",
        //   data: { stId: this.stId },
        // }).then((res) => {
        //   if (res.data == 1) {
        //     console.log("아이디 존재");
        //     this.stCheck1 = false;
        //     this.stCheck2 = true;
        //   } else {
        //     console.log("아이디 없음");
        //     this.stCheck1 = true;
        //     this.stCheck2 = false;
        //   }
        // });
      }
      },
      checkStPw() {
        let pwd = document.getElementById("stPw2").value;
        console.log(typeof this.stPw);
        if (pwd == "") {
          document.getElementById("stPwMsg").style.display = "block";
        } else if (pwd != "") {
          document.getElementById("stPwMsg").style.display = "none";
        }

        if (pwd.length < 8) {
          this.$swal("비밀번호는 최소 8자리 이상입니다.");
        } else if(pwd.search(/\/s/) !== -1) {
          this.$swal("비밀번호에 공백은 불가능합니다.");
        } else if (pwd.search(/[a-zA-Z]/) || pwd.search(/[0-9]/) == -1 || pwd.search(/[~!@#$%^&*()_+|<>?:{}]/) !== -1) {
          this.$swal("영문자와 숫자로만 조합이 가능합니다.");
        }
      },
      isEmpty2(data) {
        if(data =="" || data == null || data == undefined) {
          return true;
        } else {
          return false;
        }
      },

    // sendCheck() {
    //   router.push({
    //     name:'StaffManagementOne',
    //     params: {check: this.checked}
    //   })
    // },
    //직원추가 권한설정 @change
    NewCheck: function() {
      if (this.check.length == this.checked.length) {
        this.ListChecked = true
        this.checked = [...this.check]
      } else {
        this.ListChecked = false
      }
    },
    //직원설정 권한설정 @change
    SetCheck: function() {
      if (this.setcheck.length == this.setchecked.length) {
        this.setListChecked = true
        this.setchecked = [...this.setcheck]
      } else {
        this.setListChecked = false
      }
    },
    //직원추가 input 공백체크
    login() {
      if(this.isBlank(this.name)) {
        this.nameError = true
      }
      if(this.isBlank(this.id)) {
        this.idError = true
      }
      if(this.isBlank(this.pw)){
        this.pwError = true
      }
    },
    isBlank(val){
      if(val === undefined) return true
      else if(val === null) return true
      else if(val === '') return true
      else return false
    }
    //이름 테스트//
    //   sendCheck: function() {
    //     axios.post('//jsonplaceholder.typicode.com/posts', {
    //       userId: 1,
    //       stName: this.stName,
    //     })
    //     .then(function(res) {
    //       console.log(res.data)
    //   }, function() {
    //     console.log('falied')
    //   })
    // }
  },
  watch: {
      name(val) {
        if(val.length> 0) {
          this.nameError = false
      }
    },
      id(val) {
        if(val.length> 0) {
          this.idError = false
      }
    },
      pw(val) {
        if(val.length> 0) {
          this.pwError = false
      }
    },  

    //     stName: function() {
    //   return this.stName = this.stName.replace/([가-힣]\x20])
    // }
    // checked (a) {
    //   if (a.length ==5) {
    //     this.enrollBtn =true
    //   } else if (a.length ==0) {
    //     for (let i = 0; i < a.length; i++) {
    //       if (a[i] === this.check[5]) {
    //         this.enrollBtn = false
    //       } else {
    //         this.enrollBtn = true
    //       }
    //     }
    //   }else{
    //     this.enrollBtn = false;
    //   }
    // }
  },
  mounted() {

  },
}
</script>

<style>
@import '../assets/css/components/StaffModal.css';
</style>
