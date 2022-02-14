<template>
  <h1>사용자 정보 변경</h1>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col">아이디</th>
      <th scope="col">패스워드</th>
      <th scope="col">이름</th>
      <th scope="col">사업자 번호</th>
      <th scope="col">주소 1</th>
      <th scope="col">주소 2</th>
      <th scope="col">우편 번호</th>
      <th scope="col">e-mail</th>
      <th scope="col">연락처</th>
      <th scope="col">가게이름</th>
      <th scope="col">가게 연락처</th>
      <th scope="col">가입일</th>
    </tr>
    </thead>
    <tbody>

    <tr v-for="user in resultset" :key="user">
      <td>{{ user.userid }}</td>
      <td>{{ user.pw }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.bizaddr1 }}</td>
      <td>{{ user.bizaddr2 }}</td>
      <td>{{ user.bizzip }}</td>
      <td>{{ user.mgemail }}</td>
      <td>{{ user.phnum }}</td>
      <td>{{ user.shopname }}</td>
      <td>{{ user.shopPhNum }}</td>
      <td>{{ user.userdate }}</td>
    </tr>
    </tbody>
  </table>
  <span>{{ userid }}</span>
  <span>{{ resultset }}</span>
</template>

<script>
export default {
  name: 'modifyUser'
  ,
  data () {
    return {
      // resultset: [],
      user: [],
      userid: this.$route.params,
    }
  },
  props: ['resultset']
}
</script>

<style scoped>

</style>
