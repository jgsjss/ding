<template>
<Navbar />
<!---->
<div class="modal fade" id="addition" tabindex="-1" aria-labelledby="additionModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="additionModalLabel">직원추가</h5>
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
</form>
      </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-primary">등록</button>
          </div>
    </div>
  </div>
</div>
<!---->
  <div class="staff_container">
    <div class="staff_wrap">
    <h2 class="staff_text">직원관리</h2>  
      <div class="staff_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>   
      <hr />
  <div class="staff_list_wrap">
      <router-link to="/OrderManagement/1"><i class="xi-list-square list"></i></router-link>
      <router-link to="/OrderManagement/1_2"><i class="xi-apps list"></i></router-link>
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addition" data-bs-whatever="@mdo">+ 직원추가</button>
  </div>
  <hr />
    <table class="staff_table">
      <thead class="staff_head">
        <tr class="staff_title">
          <th scope="col" class="staff_col">상태</th>
          <th scope="col" class="staff_col">직급</th>
          <th scope="col" class="staff_col">아이디</th>
          <th scope="col" class="staff_col">권한</th>
          <th scope="col" class="staff_col">설정</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in $store.state.StaffData" :key="i" class="staff_board">
          <td>{{ $store.state.StaffData[i].condition }}</td>
          <td>{{ $store.state.StaffData[i].rank }}</td>
          <td>{{ $store.state.StaffData[i].id }}</td>
          <td class="staff_authority">
            <button type="button" class="btn authority active" data-bs-toggle="button" autocomplete="off" aria-pressed="true" @click="isToggled = !isToggled">주문관리</button>
            <button type="button" class="btn authority active" data-bs-toggle="button" autocomplete="off" aria-pressed="true" @click="isToggled = !isToggled">상태관리</button>
            <button type="button" class="btn authority active" data-bs-toggle="button" autocomplete="off" aria-pressed="true" @click="isToggled = !isToggled">메뉴편집</button>
            <button type="button" class="btn authority active" data-bs-toggle="button" autocomplete="off" aria-pressed="true" @click="isToggled = !isToggled">매출관리</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off" @click="isToggled = !isToggled">직원관리</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off" @click="isToggled = !isToggled">로그확인</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off" @click="isToggled = !isToggled">할인코드</button>
            </td>
          <td><button type="button" class="btn">직원설정</button></td>
        </tr>
      </tbody>
    </table>
    <div class="s_btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="s_page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="s_page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="s_page-btn"
      >
        <i class="xi-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
// import axios from 'axios';
export default {
  components: { Navbar },
  data() {
    return {
      pageNum: 0,
      isToggled : false,
    };
  },
  props: {

  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },

};
</script>

<style>
@import '../assets/css/StaffManagement/StaffManagement.css';
</style>
