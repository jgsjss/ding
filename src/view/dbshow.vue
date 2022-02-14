<template>
  <h1>dbshow페이지</h1>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">아이디</th>
            <th scope="col">패스워드</th>
            <th scope="col">이름</th>
            <th scope="col">주소 1</th>
            <th scope="col">주소 2</th>
            <th scope="col">e-mail</th>
            <th scope="col">연락처</th>
            <th scope="col">가게이름</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in resultset" :key="user">
            <td>{{ user.userid }}</td>
            <td>{{ user.pw }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.bizaddr1 }}</td>
            <td>{{ user.bizaddr2 }}</td>
            <td>{{ user.mgemail }}</td>
            <td>{{ user.phnum }}</td>
            <td>{{ user.shopname }}</td>
          </tr>
          </tbody>
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
th {
  text-align: center;
}
</style>
