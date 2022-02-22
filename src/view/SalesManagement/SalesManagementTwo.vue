<template>
<div class="month_container">
  <div class="month_wrap">
    <div class="month_left">
      <div class="month_left_wrap">
          <Datepicker v-model="date" range datePicker modeHeight="120" locale="ko" weekStart="0" :enableTimePicker="false" value="2022-02-08"/>
      </div>
    <div class="month_list_wrap">
      <div class="m_list_wrap1">
        <div class="month_text_left">총 매출금액</div>
        <div class="month_text_left">총 주문건수</div>
        <div class="month_text_left">총 주문메뉴</div>
      </div>

      <div class="m_list_wrap2">
        <div class="month_text_right">{{}}3,005,000원</div>
        <div class="month_text_right">{{}}832건</div>
        <div class="month_text_right"> {{}}1452개</div>
      </div>
    </div>
    </div>
<div class="month_right">
  <div class="sales_sort_btn_wrap">
  <select class="sales_sort_btn" v-model="selected" v-on="sortSales">
    품절해제
            <option class="log_check_box" value="null">필터선택</option>
            <option class="log_check_Box" value="date-asc">최신순</option>
            <option class="log_check_Box" value="date-desc">과거순</option>
  </select>
  </div>
        <table class="table">
          <thead class="sales_head">
          <tr class="sales_title">
            <th scope="col" class="sales_col">주문일시</th>
            <th scope="col" class="sales_col">대기번호</th>
            <th scope="col" class="sales_col">구분</th>
            <th scope="col" class="sales_col">내용</th>
            <th scope="col" class="sales_col">금액</th>
            <th scope="col" class="sales_col">비고</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in $store.state.menuData" :key="i">
            <td class="sales_data"><router-link to="../ordermanage/orderprint">{{ $store.state.SalesData[i].orderdata }}</router-link></td>
            <td>{{ $store.state.SalesData[i].watingnum }}</td>
            <td>{{ $store.state.SalesData[i].division }} </td>
            <td>{{ $store.state.SalesData[i].content }}</td>
            <td>{{ $store.state.SalesData[i].price }}</td>
            <td>{{ $store.state.SalesData[i].etc }}</td>
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
</div>

</template>
<script>
import { ref, onMounted } from 'vue';

  export default {
  components:{
  },
  data() {
    return {
      show:false,
      step: 0,
      pageNum: 0,
      selected:null,
    }
  },
  methods: {
      nextPage() {
        this.pageNum += 1;
      },
      prevPage() {
        this.pageNum -= 1;
      },
    },
    setup() {
        const date = ref();

        // For demo purposes assign range from the current date
        onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        })
        
        return {
            date,
        }
    }  
}




</script>
<style>
@import '../../assets/css/SalesManagement/SalesManagementOne.css';
</style>
