<template>
  <h1>dbshow페이지</h1>
  <table>
    <tr v-for="user in resultset" key="user">
      <td>{{ user.userid }}</td>
      <td>{{ user.pw }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.bizaddr1 }}</td>
      <td>{{ user.bizaddr2 }}</td>
      <td>{{ user.mgemail }}</td>
      <td>{{ user.phnum }}</td>
      <td>{{ user.shopname }}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dbshow',
  data () {
    return {
      resultset: []
    }
  },
  created () {
    axios.post('/member/db')
        .then(response => {
          this.resultset = response.data
          console.log(this.resultset)
        })
  },
}
</script>

<style scoped>

</style>
