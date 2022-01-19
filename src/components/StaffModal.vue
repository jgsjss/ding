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
      <input type="text" class="form-control" id="stName" v-model="stName">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="stId" v-model="stId">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="stPw" v-model="stPw">
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary" @click="sendCheck">등록</button>
          </div>
    </div>
  </div>
</div>
<!--직원추가모달 끝-->

<!--직원설정 모달 시작-->
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
      <input type="email" class="form-control" id="sName">
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
        <input class="form-check-input" type="checkbox" checked v-model="setchecked" :value="setcheck[4]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios1">
          메뉴편집
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[4]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          매출관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[4]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          직원관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[4]" @change="SetCheck()">
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
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="setchecked" :value="setcheck[4]" @change="SetCheck()">
        <label class="col-form-label" for="gridRadios2">
          매출관리
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
    }
  },
  methods: {
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
  // watch: {
  //   checked (a) {
  //     if (a.length ==5) {
  //       this.enrollBtn =true
  //     } else if (a.length ==0) {
  //       for (let i = 0; i < a.length; i++) {
  //         if (a[i] === this.check[5]) {
  //           this.enrollBtn = false
  //         } else {
  //           this.enrollBtn = true
  //         }
  //       }
  //     }else{
  //       this.enrollBtn = false;
  //     }
  //   }
  // },
  mounted() {

  },
}
</script>

<style>
@import '../assets/css/components/StaffModal.css';
</style>
