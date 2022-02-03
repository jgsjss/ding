<template>
  <Navbar />
  <!-- 로그확인 페이지, 라우팅 path = /Logcheck -->
  <div class="log_container">
    <div class="log_header_wrap">
      <span class="log_main_text">로그확인</span>
      <!--x버튼 클릭시 OperationManagement 운영관리로 이동-->
      <router-link to="/OperationManagement">
        <span class="xi-close"></span>
      </router-link>
    </div>
    <div class="log_btn_wrap">
      <div class="category_wrap">
        <button type="text" class="log_menu_btn">전체</button>
        <button type="text" class="log_menu_btn">1주일</button>
        <button type="text" class="log_menu_btn">1개월</button>
        <button type="text" class="log_menu_btn">3개월</button>
        <button type="text" class="log_menu_btn" @click="detail = !detail">상세조회</button>
        <div class="log_hidden_date" v-show="detail">
          <datepicker 
            v-model="picked"
            :locale="locale"
            :upperLimit="to"
            :lowerLimit="from"
            :clearable="false" />
          &nbsp~&nbsp
          <datepicker 
          v-model="selected"
          :locale="locale"
          :lowerLimit="from"
          :picker-options="endDateOptions"/>
          <button type="button" class="log_hidden_btn">조회</button>
        </div>
      </div>
      <select class="menu_btn">
        품절해제
        <option class="log_check_Box" :value="check">최신순</option>
        <option class="log_check_Box" :value="check">과거순</option>
      </select>
    </div>
    <div class="log_wrapper">
      <table class="table log_table">
        <thead class="log_head">
          <tr class="log_title">
            <th><input type="checkbox" id="all-check" /></th>
            <th scope="col" class="log_col">시간</th>
            <th scope="col" class="log_col">아이디</th>
            <th scope="col" class="log_col">아이피</th>
            <th scope="col" class="log_col">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.LogCheckData" :key="i">
            <th scope="row"><input type="checkbox" /></th>
            <td>{{ $store.state.LogCheckData[i].time }}</td>
            <td>{{ $store.state.LogCheckData[i].Id }}</td>
            <td>{{ $store.state.LogCheckData[i].IP }}</td>
            <td>{{ $store.state.LogCheckData[i].text }}</td>
          </tr>
        </tbody>
      </table>
      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ko">
import Navbar from '@/components/Navbar.vue';
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
// import moment from 'moment'
const picked = ref(new Date())
// import axios from 'axios';
export default {
  components: {
    Navbar,
    Datepicker,
  },
 name: 'DateCheck',
  data() {
    return {
      detail:false,
     startDate: '',
     endDate: '',
      startDateOptions: {
        disabledDate: this.disabledStDate
      },
      endDateOptions: {
        disabledDate: this.disabledEdDate
      },
    }
},
//   created() {
// this.startDate = moment().format('YYYYMMDD')
// this.endDate = moment().add(-1, 'months').format('YYYYMMDD')
// },
// methods: {
// disabledStDate(date) {
//       date = moment(String(date)).format('YYYYMMDD')
//     return date > moment().format('YYYYMMDD') || date < moment().add(-1, 'years').format('YYYYMMDD')
//     },
// disabledEdDate(date) {
//       date = moment(String(date)).format('YYYYMMDD')
//       return date > moment().format('YYYYMMDD') || date < this.searchData.startDate
//     },
//     changeDate(type) {
//       if (type === 'start') {
//        if (this.endDate === null || this.startDate > this.endDate) {
//          this.endDate = this.startDate
//         }
//        if (moment(this.startDate).isBefore(moment(this.endDate).subtract(1, 'months').format('YYYYMMDD'))) {
//           alert('검색 기간은 최대 1개월까지 선택 가능 합니다.')
//         this.startDate = moment(this.endDate).subtract(1, 'months').format('YYYYMMDD')
//         }
//       } else if (type === 'end') {
//        if (this.startDate === null) {
//          this.startDate = this.endDate
//         }
//       if (moment(this.endDate).isAfter(moment(this.startDate).add(1, 'months').format('YYYYMMDD'))) {
//           alert('검색 기간은 최대 1개월까지 선택 가능 합니다.')
//          this.endDate = moment(this.startDate).add(1, 'months').format('YYYYMMDD')
//         }
//       }
//   }
//   }
}

</script>

<style>
@import '../../assets/css/OperationManagement/LogCheck.css';
</style>
