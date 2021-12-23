<template>
  <div class="container">
    <div class="box">
      <h4 class="order_text">주문관리</h4>
      <button class="btn btn-default" type="submit">New</button>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <h5>총주문수</h5>
        <div>{{ $store.state.orderData.length }}</div>
      </div>
      <div class="order_box">
        <h5>완료주문</h5>
        <div>{{comNum}}</div>
      </div>
      <div class="order_box">
        <h5>신규주문</h5>
        <div>{{newOrder}}</div>
      </div>
      <div class="order_box">
        <h5>취소주문</h5>
        <div>{{cancelOrder}}</div>
      </div>
    </div>
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
.container {
  width:100%;
  margin:0
}
.box {
  display:flex;
  justify-content: space-around;
}
/* .box:after {
    position:absolute;
    top:0;
    right:0;
    font-family:'xeicon';
    display: block;
    content:"\e93f";
    clear:both;
} */
.order_text {
  width:44%;
}
.btn-default {
  width:20%;
  border-radius: 30px;
  padding:0 15px;
  border:1px solid #997fb5;
  color:#997fb5;
}
.btn-default:hover {
  color:#997fb5;
}
.order_container {
  display:grid;
  grid-template-columns: 1fr 1fr;

  padding:30px 0;
}
.order_box {
  padding:15px 0;
  text-align: center;
  position:relative;
}
.order_box:nth-child(even):after {
  display: block;
  content: '';
  clear:both;
  width:1px;
  height:100%;
  background:#ddd;
  position:absolute;
  top:5%;
  left:3%
}
.order_box:nth-child(3n+4):before {
  display: block;
  content: '';
  clear:both;
  width:300px;
  height:1px;
  background:#ddd;
  position:absolute;
  top:5%;
  right:10%;
}

.xi-angle-right-min {
  border:1px dashed #997fb5;
  border-radius: 100%;
  color:#997fb5;
  padding:5px;
  line-height: 1.3;
  font-size: 20px;
}
</style>
