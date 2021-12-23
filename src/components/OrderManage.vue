<template>
    <div>
    <div><h4>주문관리</h4> <a href="#">NEW</a></div>

    <div><h5>총주문수</h5></div>
    <div>{{ $store.state.orderData.length }}</div>

    <div><h5>완료주문</h5></div>
    <div @click="$store.commit('completedOrder')">{{ completedNum }}</div>

    <div><h5>신규주문</h5></div>
    <div>{{ $store.state.newOrderNum }}</div>

    <div><h5>취소주문</h5></div>
    <div>{{ $store.state.cancelOrder }}</div>
    </div>


</template>

<script>
// import orderData from '../assets/orderData';
    export default {
        computed: {
          completedNum(){
            return this.$store.state.completedNum
          }
        },
        props:{
        },
        watch:{
        },
        methods:{
        },
        mounted(){
        },
    }
</script>
<style>

</style>
