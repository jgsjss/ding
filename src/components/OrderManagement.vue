<template>
    <div>
    <div><h4>주문관리</h4> <a href="#">NEW</a></div>

    <div><h5>총주문수</h5></div>
    <div>{{orderData.length}}</div>

    <div><h5>완료주문</h5></div>
    <div>{{comNum}}</div>

    <div><h5>신규주문</h5></div>
    <div>{{newOrder}}</div>

    <div><h5>취소주문</h5></div>
    <div>{{cancelOrder}}</div>
    </div>


</template>

<script>
import orderData from '../assets/orderData';
    export default {
        props:{
            orderData : Object,
            completedNum : Number,
            newOrder : Number,
            cancelOrder : Number,
        },
        data(){
            return{
                comNum : this.completedNum,
            }
        },
        watch:{
            completedNum(){
                this.comNum = this.completedNum
            } 
        },
        methods:{
           
    },
    mounted(){
        
    },
   

    }

</script>
<style>

</style>