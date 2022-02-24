<template>
  <div id="app">
    <div>
      <button @click="ExcelFileDown">다운</button>
    </div>
  </div>
</template>

<script>
import Xlsx from 'xlsx'

export default {
  name: 'App',
  data () {
    return {
      dataex: [
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
      const workSheet = Xlsx.utils.json_to_sheet(this.dataex);
      Xlsx.utils.book_append_sheet(workBook, workSheet, "안녕");
      Xlsx.writeFile(workBook, "안녕.xlsx");
    },

  }
}
</script>

<style>
</style>