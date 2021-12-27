<template>
    <div><router-link to="/menumanagement/categories"><a>카테고리편집</a></router-link> |
    <router-link to="/menumanagement/menus"><a >메뉴편집</a> </router-link> |
    <router-link to="/menumanagement/options"> <a>옵션편집</a></router-link></div>
    <router-view :orderData="orderData" :completedNum="completedNum" :newOrderNum="newOrderNum" :cancelOrder="cancelOrder"
    :shopData="shopData" :openShopNum="openShopNum"
    :menuData="menuData" :soldOutNum="soldOutNum" :hiddenNum="hiddenNum" ></router-view>

    <!-- 카테고리편집 탭 -->
      <!-- <div v-if="menuTab == 0">
        <form >
          <label><input type="checkbox"> 정상</label>
          <label><input type="checkbox"> 숨김</label>
          <input type="search" name="categoriSearch" placeholder="search">
          <button>순서변경</button><button>편집</button><button>+카테고리추가</button>
          <input type="submit">
        </form>
        <div class="container1">
        <table class="table">
          <thead>
          <tr>
            <th> 카테고리명 </th> |
            <th scope="col">연결 된 메뉴</th> |
            <th scope="col">연결메뉴 갯수</th> |
            <th scope="col">메뉴연결</th> |
            <th scope="col">숨김</th> |
          </tr>
          </thead>
          <tbody>
          <tr >
            <th scope="row"></th>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }} </td>
            <td>{{ }}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div> -->

  <!-- 메뉴편집 탭  -->
  <!-- <div v-if="menuTab == 1"> -->
  <!-- </div> -->

  <!-- 옵션편집 탭 -->
  <!-- <div v-if="menuTab == 2"> -->
  <!-- </div> -->

</template>
<script>
  export default {
    data(){
      return {
        //메뉴관리 페이지의 탭 부분
        menuTab : 0,
      }
    },
    props:{
   //주문관리 데이터 프롭스 ---
    orderData : Object,
    //완료주문 개수
    completedNum : Number,
     //신규주문 개수
    newOrderNum : Number,
    //취소주문 개수
    cancelOrder : Number,


    //메뉴관리 데이터 프롭스 ---
    menuData : Object,
     //품절메뉴 개수
    soldOutNum : Number,
    //숨김메뉴 개수
    hiddenNum : Number,


    //운영관리 데이터 프롭스 ---
    shopData : Object,
    //영업중인 가게 수
    openShopNum : Number,


    },
    components : {
    },

  }

</script>
<style>
.container1{
    width: 1000px;
    margin: 0 auto;
}

</style>
