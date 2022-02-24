<template>
  <div class="accomplished_container">
      <div class="accomplished_btn_wrap">
          <div class="accomplished_btn_wrap01">
            <button type="submit" class="accomplished_header_btn">1개월</button>
            <button type="submit" class="accomplished_header_btn">3개월</button>
            <button type="submit" class="accomplished_header_btn">전체</button>
          </div>
          <div class="accomplished_btn_wrap02">
              <button type="submit" class="accomplished_header_right_btn">전체삭제</button>
              <button type="submit" class="accomplished_header_right_btn">저장</button>
              <selection class="">
                <option class="" value="null">선택</option>
                <option class="" value="최신순">최신순</option>
                <option class="" value="과거순">과거순</option>
              </selection>
          </div>
      </div>

    <div class="accomplished_list_wrap">
      <table class="accomplished_table">
        <thead class="accomplished_head">
        <tr class="accomplished_title">
          <th scope="col">
            <input type="checkbox"
                   id="all-check"
                   v-model="allChecked"
                   @click="checkedAll($event.target.checked)"
            />
          </th>
          <th scope="col" class="accomplished_col">할인코드</th>
          <th scope="col" class="accomplished_col">발급일자</th>
          <th scope="col" class="accomplished_col">코드이름</th>
          <th scope="col" class="accomplished_col">할인항목</th>
          <th scope="col" class="accomplished_col">사용가능횟수</th>
          <th scope="col" class="accomplished_col">유효기간</th>
          <th scope="col" class="accomplished_col">설정</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(a, i) in $store.state.DiscountCodeData" :key="i">
          <td scope="row" class="accomplished_check_box">
            <input type="checkbox"
                   :id="'check_' + i.boardId"
                   :value="i"
                   v-model="selected"
                   @click="print"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <td class="accomplished_data" @click="accomplishedcode=!accomplishedcode">
            {{ $store.state.DiscountCodeData[i].codenum }}</td>
          <td class="accomplished_data ">{{ $store.state.DiscountCodeData[i].date  }}</td>
          <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].codename  }}</td>
          <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].discount  }}</td>
          <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].count  }}</td>
          <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].validity  }}</td>
          <td class="accomplished_data"><button type="submit" class="accomplished_end_btn" value="hidden">종료</button></td>
        </tr>
        </tbody>
      </table>
      <div class="accomplishedcode_wrap" v-show="accomplishedcode">
        <div class="discountinfo_main_wrap">
          <h5 class="discountinfo_main_title">할인코드 정보</h5>
          <i class="xi-close" @click.self="$emit('close')"></i>
        </div>
        <div class="discountinfo_sub_wrap">
          <p class="discountinfo_text">발급일자 :{{}}2022.02.22</p>
          <p class="discountinfo_text">할인코드:{{}}3252353252</p>
          <p class="discountinfo_text">할인코드명 :{{}} </p>
          <p class="discountinfo_text">할인항목 :{{}}  </p>
          <p class="discountinfo_text">사용가능횟수 :{{}} </p>
          <p class="discountinfo_text">유효기간 :{{}}  </p>
          <p class="discountinfo_text">종료구분 :{{}}  </p>
        </div>
      </div>
          </div>
  </div>
  <router-view></router-view>
</template>

<script>
import xlsx from '../xlsx.vue'
export default {
  components: {
    xlsx,
  },
  data(){
    return {
      accomplishedOpen:false,
      accomplishedcode:false,
      selected: [],
      date: '',
      allChecked: false,
    }
  },
  methods: {
// importExcel(event) {
//     const file = event.target.files[0];
//     let reader = new FileReader();
//     reader.onload = (e) => {
//         let data = reader.result;
//         // let data = e.target.result;
//         let workbook = XLSX.read(data, {type: 'binary'});
//         workbook.SheetNames.forEach(sheetName => {
//             const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//             this.items.push(roa);
//         });
//     };
//     reader.readAsBinaryString(file);
// },

  }
}
</script>

<style>
@import '../../assets/css/DiscountCode/DiscountCodeTwo.css';
</style>
