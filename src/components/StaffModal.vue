<template>
  <!--직원추가 모달-->
  <!--modal 직원추가-->
<div class="modal fade" id="addition" tabindex="-1" aria-labelledby="additionModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="additionModalLabel">직원추가</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<form id="staffadd" @submit.prevent="sendpost" method="post">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">이름</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputname" name="addname" v-model="addname">
      <button>send</button>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputid">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputpassword">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">권한설정</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="col-form-label" for="gridRadios1">
          메뉴편집
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          매출관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          직원관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          로그확인
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          할인코드
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          매출관리
        </label>
      </div>
    </div>
  </fieldset>
</form>
      </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">등록</button>
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
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputid">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">비밀번호</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputpassword">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">권한설정</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="col-form-label" for="gridRadios1">
          메뉴편집
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          매출관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          직원관리
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          로그확인
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
        <label class="col-form-label" for="gridRadios2">
          할인코드
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2">
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
      addname:'name'
      
    }
    
  },
  methods: {
    sendpost: function() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        userId: 1,
        addname: this.addname
      })
      .then(function(res) {
        console.log(res.data)
    }, function() {
      console.log('falied')
    })
  }
  }
}
</script>

<style>
@import '../assets/css/components/StaffModal.css';
</style>
