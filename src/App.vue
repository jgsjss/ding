<template>
  <div>
    <nav>
      <ul>
      <li>
        <router-link to="/main">Logo(메인페이지 이동)</router-link>
      </li>
        <li>
          <router-link to="/menumanagement">메뉴관리</router-link>
        </li>
        <li>
          <router-link to="/salesmanagement">매출관리</router-link>
        </li>
        <li>
          <router-link to="/ordermanagement">주문관리</router-link>
        </li>
        <li>
          <router-link to="/staffmanagement">직원관리</router-link>
        </li>
        <li>
          <router-link to="/operationmanagement">운영관리</router-link>
        </li>
        <li>
          <router-link to="/discountcode">할인코드</router-link>
        </li>
      </ul>
    </nav>
    <div>
        <h4>App.vue 화면</h4>
    </div>
  </div>
  <router-view> </router-view>



</template>
<script>



export default {
  data(){
    return{

    }
  },
  components: {
  },
  methods: {

  },
  created(){

  },
  mounted(){
  },
  watch: {

  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
