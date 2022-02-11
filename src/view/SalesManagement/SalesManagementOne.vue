<template>
  <div class="month_container">
    <div class="month_wrap">
      <div class="month_left">
        <div class="month_left_wrap">
          <Datepicker v-model="month" monthPicker modeHeight="120" locale="ko"/>
        </div>
        <div class="month_list_wrap">
          <div class="m_list_wrap1">
            <div class="month_text_left">총 매출금액</div>
            <div class="month_text_left">총 주문건수</div>
            <div class="month_text_left">총 주문메뉴</div>
          </div>

          <div class="m_list_wrap2">
            <div class="month_text_right">{{ totalPrice }}원</div>
            <div class="month_text_right">{{ totalOrder }}건</div>
            <div class="month_text_right"> {{}}1452개</div>
          </div>
        </div>
      </div>
      <div class="month_right">
        <div class="sales_sort_btn_wrap">
          <select class="sales_sort_btn" v-model="selected" v-on="sortSales">
            품절해제
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
          <tr v-for="(a, i) in $store.state.SalesData" :key="i">
            <td class="sales_data">
              <router-link to="../ordermanage/orderprint">{{ $store.state.SalesData[i].orderdata }}</router-link>
            </td>
            <td class="sales_data">{{ $store.state.SalesData[i].watingnum }}</td>
            <td class="sales_data">{{ $store.state.SalesData[i].division }}</td>
            <td class="sales_data">{{ $store.state.SalesData[i].content }}</td>
            <td class="sales_data">{{ $store.state.SalesData[i].price }}</td>
            <td class="sales_data">{{ $store.state.SalesData[i].etc }}</td>
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
import { ref } from 'vue'
import { forEach } from 'lodash'
import _ from 'lodash'

export default {
  components: {},
  data () {
    return {
      pageNum: 0,
      totalPrice: 0,
      totalOrder: 0,
      // selected:'date-asc'
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    },
    // sortSales() {
    //   this.$emit('sales_data', {value :this.selected});
    //   console.log('')
    // },

    calcTotalPrice (object) {
      let sum = 0
      _.forEach(_.map(object, 'price'), function (val, key) {
        sum += val
      })
      this.totalPrice = sum
    },
      
      TotalMenuOrder (object) {
        let sum = 0
        _.forEach(_.map(object, 'watingnum'), function(val, key) {
          sum += val
        })
        this.totalOrder = sum
        console.log(sum)
            
      }
      //----------테스트-----------
        // TotalMenuOrder(object) {
        //   const arr = [];

        //   const result = arr.reduce(function add(sum, currValue) {
        //     return sum + currValue;
        //   }, 0);
        //   console.log(result)
        //   this.totalOrder = result

        // //   const arr = [object]
        // //   let count = arr .reduce((cnt, element) => cnt + ('a' === element), 0)          
        // //   console.log(arr)
        // // this.totalOrder = count
        // // console.log(count)

        // }
  },
  setup () {
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    })
    return {
      month,
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.$store.state.SalesData.length / 10)
    },
  },
  created () {
    this.calcTotalPrice(this.$store.state.SalesData)
    this.TotalMenuOrder(this.$store.state.SalesData)
  }

}


</script>
<style>
@import '../../assets/css/SalesManagement/SalesManagementOne.css';
</style>
