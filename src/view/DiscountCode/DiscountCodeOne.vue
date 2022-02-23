<template>
  <div class="proceeding_container">
      <div class="proceeding_btn_wrap">
          <div class="proceeding_btn_wrap01">
            <button type="submit" class="proceeding_header_btn">전체</button>
            <button type="submit" class="proceeding_header_btn">다회용</button>
            <button type="submit" class="proceeding_header_btn">1회용</button>
          </div>
          <div class="proceeding_btn_wrap02">
              <button type="submit" class="proceeding_header_right_btn" @click="discountOpen=!discountOpen">+코드추가</button>
          </div>
          <div class="proceeding_modal_wrap" v-if=" discountOpen == true">
            <div class="proceeding_modal_sub_wrap">
              <h4 class="proceeding_modal_title">할인코드 추가</h4>
              <div class="discount_box_wrap">
                <button type="file" 
                        class="proceeding_modal_btn" 
                        accept=".csv, appliction/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">할인코드<br>일괄등록<br>(엑셀파일)</button>
                <button type="file" 
                        class="proceeding_modal_btn" 
                        accept=".csv, appliction/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">할인코드<br>개별등록<br>&nbsp</button>
              </div>  
            </div>
          </div>
      </div>
    <div class="proceeding_list_wrap">
      <table class="proceeding_table">
        <thead class="proceeding_head">
        <tr class="proceeding_title">
          <th scope="col">
            <input type="checkbox"
                   id="all-check"
                   v-model="allChecked"
                   @click="checkedAll($event.target.checked)"
            />
          </th>
          <th scope="col" class="proceeding_col">할인코드</th>
          <th scope="col" class="proceeding_col">발급일자</th>
          <th scope="col" class="proceeding_col">코드이름</th>
          <th scope="col" class="proceeding_col">할인항목</th>
          <th scope="col" class="proceeding_col">사용가능횟수</th>
          <th scope="col" class="proceeding_col">유효기간</th>
          <th scope="col" class="proceeding_col">설정</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(a, i) in $store.state.DiscountCodeData" :key="i">
          <td scope="row" class="proceeding_check_box">
            <input type="checkbox"
                   :id="'check_' + i.boardId"
                   :value="i"
                   v-model="selected"
                   @click="print"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].codenum }}</td>
          <td class="proceeding_data ">{{ $store.state.DiscountCodeData[i].date  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].codename  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].discount  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].count  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].validity  }}</td>
          <td class="proceeding_data"><button type="submit" class="proceeding_end_btn">종료</button></td>
        </tr>
        </tbody>
      </table>
          </div>      
  </div>
</template>

<script>
import XLSX from 'xlsx';
export default {
  data(){
    return {
      discountOpen:false,
      XLSX:'',
    }
  }
}
</script>

<style>
@import '../../assets/css/DiscountCode/DiscountCodeOne.css';
</style>