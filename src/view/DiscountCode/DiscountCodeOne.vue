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
      </div>
      <!--할인추가 콜랩스 시작-->
      <div class="proceeding_modal_container" v-show="discountOpen">
        <div class="proceeding_modal_container01">
          <h5 class="proceeding_modal_title">할인코드 추가(대량등록)</h5>
          <p class="proceeding_modal_sub_title">- 할인코드는 발급 후 수정이 불가합니다.</p>
          <p class="proceeding_modal_sub_title">- 사용 또는 기간 만료 시 자동으로 만료됩니다.</p>
          <p class="proceeding_modal_sub_title">- 등록해야하는 쿠폰이 많은 경우 엑셀파일을 사용하여 일괄등록이 가능합니다.</p>
          <p class="proceeding_modal_sub_title">- 아래 양식을 다운로드하여 작성하신후 파일을 업로드 해주세요.</p>
          <xlsx />
          <div class="proceeding_modal_input_wrap">
          <input type="file" accept=".xlsx, .xls" class="proceeding_modal_input" placeholder="파일추가">
          </div>
          <div>
          <p class="proceeding_modal_sub_title">* 지원하는 파일 형식: xlsx</p>
          <p class="proceeding_modal_sub_title">* 파일이 양식과 맞지 않을 경우 추가되지 않습니다.</p>
          </div>
          <div class="proceeding_modal_btn_wrap">
          <button type="button" class="proceeding_modal_btn">할인코드 추가</button>
          </div>
        </div>
        <div class="proceeding_modal_container02">
          <h5 class="proceeding_modal_title">할인코드 추가(개별등록)</h5>
          <p class="proceeding_modal_sub_title">- 할인코드는 발급 후 수정이 불가합니다.</p>
          <p class="proceeding_modal_sub_title">- 기간이 지나거나 사용하면 자동으로 종료처리 됩니다.</p>
          <form>
            <label for="" class="proceeding_modal_label form-label"> 할인코드
              <input type="text" placeholder="9-숫자를 입력해주세요(최대10자리)" class="proceeding_modal_input">
            </label>
            <label for="" class="proceeding_modal_label">할인코드명
              <input type="text" placeholder="ex) 1주년 기념 스페셜 할인" class="proceeding_modal_input">
            </label>
            <label for="" class="proceeding_modal_label">할인항목
              <input type="radio" name="proceeding_modal_radio">&nbsp결제금액&nbsp<input type="text" class="proceeding_modal_small_input" placeholder="퍼센트할인">&nbsp%할인
            </label>
            <label for="" class="proceeding_modal_label">
              <input type="radio" name="proceeding_modal_radio">&nbsp결제금액&nbsp<input type="text" class="proceeding_modal_small_input" placeholder="금액할인">&nbsp%할인
            </label>
            <label for="" class="proceeding_modal_label">사용가능횟수
              <input type="radio" name="proceeding_modal_radio">&nbsp다회(제한없음)
              <input type="radio" name="proceeding_modal_radio">&nbsp1회 (코드당 1번)
            </label>
            <label for="" class="proceeding_modal_label">유효기간
              <input type="radio" name="proceeding_modal_radio">&nbsp기간없음(무제한)
              <input type="radio" name="proceeding_modal_radio">&nbsp기간설정
            <Datepicker class="proceeding_modal_date" v-model="date" range datePicker modeHeight="120" locale="ko" weekStart="0" :enableTimePicker="false" value="2022-02-24"/>
            </label>
          </form>
        </div>
      </div>
      <!--할인추가 콜랩스 끝-->
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
          <td class="proceeding_data" @click="DiscountCodeInfo=!DiscountCodeInfo">
            {{ $store.state.DiscountCodeData[i].codenum }}</td>
          <td class="proceeding_data ">{{ $store.state.DiscountCodeData[i].date  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].codename  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].discount  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].count  }}</td>
          <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].validity  }}</td>
          <td class="proceeding_data"><button type="submit" class="proceeding_end_btn" value="hidden">종료</button></td>
        </tr>
        </tbody>
      </table>
      <div class="discountinfo_wrap" v-show="DiscountCodeInfo">
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
      discountOpen:false,
      DiscountCodeInfo:false,
      selected: [],
      date: '',
      allChecked: false,
    }
  },
  methods: {
importExcel(event) {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        let data = reader.result;
        // let data = e.target.result;
        let workbook = XLSX.read(data, {type: 'binary'});
        workbook.SheetNames.forEach(sheetName => {
            const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            this.items.push(roa);
        });
    };
    reader.readAsBinaryString(file);
},

  }
}
</script>

<style>
@import '../../assets/css/DiscountCode/DiscountCodeOne.css';
</style>
