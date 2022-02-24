<template>
  <div id="app">
    <div>
      <button @click="ExcelFileDown" class="xlsx_btn">엑셀파일 다운로드</button>
    </div>
  </div>
</template>

<script>
import Xlsx from 'xlsx'

export default {
  data () {
    return {
      data1: [
        {
          a: 1,
          b: '325',
          c: 'abc',
          d: 'xcv',
          e: "1131",
          f: "1241241"
        },
        {
          a: 2,
          b: '325',
          c: 'abc',
          d: 'xcv',
          e: "1131",
          f: "1241241"
        }
      ]
    }
  },
  methods: {
     ExcelFileDown() {
      const workBook = Xlsx.utils.book_new();
      const workSheet = Xlsx.utils.json_to_sheet(this.data1);
      Xlsx.utils.book_append_sheet(workBook, workSheet, "discountCode");
      Xlsx.writeFile(workBook, "안녕.xlsx");
            console.log(this.data1)
    },

  }
}
</script>

<style>
.xlsx_btn {
    border:none;
    background:none;
    text-decoration: underline;
    color:#997fb5;
    
}
</style>