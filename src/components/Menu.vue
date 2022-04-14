<template>
<!--로그인 후 메인화면 내 메뉴현황 컴포넌트-->
  <div class="container">
    <div class="box_wrap">
      <p class="order_text">메뉴현황</p>
      <!-- 품절해제 버튼 누르면 App.vue에 menuModal 오픈되는 커스텀이벤트
       @click="changeMenuTrue" -->
      <router-link to="releaseSoldout"><button class="btn" type="submit">품절해제</button></router-link>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <p class="order_name">전체메뉴</p>
        <div>{{ $store.state.menuData.length}}</div>
      </div>
      <div class="order_box">
        <p class="order_name">품절메뉴</p>
        <div>{{ $store.state.soldOutNum }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">정상운영</p>
        <div>{{ $store.state.openShopNum }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">숨김메뉴</p>
        <div>{{ $store.state.hiddenNum }}</div>
      </div>
    </div>
  </div>

</template>
<script>

  export default {
    data(){
      return {
        // menumodal : true,
      }
    },
    props:{
    //   //메뉴관리 데이터 프롭스 ---
    // menuData : Object,
    //  //품절메뉴 개수
    // soldOutNum : Number,
    // //숨김메뉴 개수
    // hiddenNum : Number,
    // //품절해제 모달 체크
    // MenuCheckModal : Boolean,
    //  //운영관리 데이터 프롭스 ---
    // shopData : Object,
    // //영업중인 가게 수
    // openShopNum : Number,
    },
    methods: {
      //품절해제 클릭시 아래 메소드로 이벤트 발사
      // changeMenuTrue(){
      //   this.emitter.emit("openMenuModal", this.menumodal)
      // }
  },
  }



</script>

<style>
@import '../assets/css/components/Menu.css';
</style>
