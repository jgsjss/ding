<template>
<Navbar />
<h2 class="staff_text">직원관리</h2>

  <div class="staff_container">
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
        <tr v-for="(a, i) in $store.state.StaffData" :key="i">
          <td>{{ $store.state.StaffData[i].condition }}</td>
          <td>{{ $store.state.StaffData[i].rank }}</td>
          <td>{{ $store.state.StaffData[i].id }}</td>
          <td class="staff_authority">
            <button type="button" class="btn btn-sm">주문관리</button>
            <button type="button" class="btn btn-sm">상태관리</button>
            <button type="button" class="btn">메뉴편집</button>
            <button type="button" class="btn">매출관리</button>
            <button type="button" class="btn">직원관리</button>
            <button type="button" class="btn">로그확인</button>
            <button type="button" class="btn">할인코드</button>

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
