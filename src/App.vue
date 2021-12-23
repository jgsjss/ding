<template>

  <h1>메인 대시보드</h1>
  <nav>
    <h1>네브바 메뉴</h1>
  </nav>
  <!-- 주문관리 컴포넌트 -->
  <OrdeerManagement :orderData="orderData" :completedNum="completedNum" :newOrder="newOrder" :cancelOrder="cancelOrder" />

  <!-- 메뉴현황 컴포넌트 -->
  <Menu />

  <!-- 나의정보 컴포넌트 -->
  <MyInfo />

</template>
<script>
import OrdeerManagement from './components/OrderManagement.vue'
import Menu from './components/Menu.vue'
import orderData from './assets/orderData.js'
import MyInfo from './components/MyInfo'

export default {
  data(){
    return{
      orderData,
      completedNum : 0,
      newOrder : 0,
      cancelOrder : 0,
    }
  },
  components: {
    MyInfo,
    OrdeerManagement,
    Menu,
  },
  methods: {
     //완료된 주문의 수를 확인하는 메소드
    //          completedOrder(){
    //              var count;
    //         for(var i = 0; i<orderData.length; i++){
    //             if(orderData.isCompleted == true ){
    //                   count ++
    //                  console.log(count)
    //          }
    //          return this.completedNum = count;
    //      }
    // }
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
