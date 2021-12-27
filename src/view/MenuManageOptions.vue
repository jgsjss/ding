<template>
<!-- 옵션 편집 게시판 페이지 -->
    <p>옵션편집 게시판 페이지입니다.</p>
</template>
<script>
export default {
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
    }
}
</script>
<style>

</style>
