<template>
  <div class="proceeding_container">
      <div class="proceeding_btn_wrap">
          <div class="proceeding_btn_wrap01">
            <button type="submit" class="proceeding_header_btn">전체</button>
            <button type="submit" class="proceeding_header_btn">다회용</button>
            <button type="submit" class="proceeding_header_btn">1회용</button>
          </div>
          <div class="proceeding_btn_wrap02">
              <button type="submit" class="proceeding_header_right_btn">편집</button>
              <button type="submit" class="proceeding_header_right_btn">+코드추가</button>
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
        <tr v-for="(a, i) in cgData" :key="i">
          <td scope="row" class="proceeding_check_box">
            <input type="checkbox"
                   :id="'check_' + i.boardId"
                   :value="i"
                   v-model="selected"
                   @click="print"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <td class="proceeding_data">{{ }}</td>
          <td class="proceeding_data ">{{ }}</td>
          <td class="proceeding_data">{{ }}</td>
          <td class="proceeding_data">{{ }}</td>
          <td class="proceeding_data">{{ }}</td>
          <td class="proceeding_data">{{ }}</td>
          <td class="proceeding_data"><button type="submit">종료</button></td>
        </tr>
        </tbody>
      </table>
          </div>      
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../assets/css/DiscountCode/DiscountCodeOne.css';
</style>