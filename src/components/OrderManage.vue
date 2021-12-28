<template>
  <div class="container">
    <div class="box">
      <p class="order_text">주문관리</p>
      <button class="btn" type="submit">New</button>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <p class="order_name">총주문수</p>
        <div>{{ $store.state.orderData.length }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">완료주문</p>
        <div>{{ $store.state.completedNum  }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">신규주문</p>
        <div>{{ $store.state.newOrderNum  }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">취소주문</p>
        <div>{{ $store.state.cancelOrder }}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  props:{
  // //주문관리 데이터 프롭스 ---
  //   orderData : Object,
  //   //완료주문 개수
  //   completedNum : Number,
  //    //신규주문 개수
  //   newOrderNum : Number,
  //   //취소주문 개수
  //   cancelOrder : Number,


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
.container {
  width:100%;
  margin:0
}
.box {
  width:100%;
}
.order_text {
  font-size:24px;
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

.btn {
  width:120px;
  height:30px;
  border-radius: 30px;
  border:1px solid #997fb5;
  color:#f5f3f7;
  background:#997fb5;
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
  left:0;
}
.order_box:nth-child(3n+4):before {
  display: block;
  content: '';
  clear:both;
  width:400px;
  height:1px;
  background:#ddd;
  position:absolute;
  top:5%;
  right:20%;
}

.xi-angle-right-min {
  border:1px dashed #997fb5;
  border-radius: 100%;
  color:#997fb5;
  line-height: 1.2;
  font-size: 12px;
}
.btn {
  padding:0;
}

/* media query */
@media ( min-width : 768px) {
  .container {
    width:100%;
    margin:0
  }
  .box {
    width:100%;
  }
  .order_text {
    font-size:16px;
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

  .btn {
    width:120px;
    height:30px;
    border-radius: 30px;
    border:1px solid #997fb5;
    color:#f5f3f7;
    background:#997fb5;
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
    left:0;
  }
  .order_box:nth-child(3n+4):before {
    display: block;
    content: '';
    clear:both;
    width:150px;
    height:1px;
    background:#ddd;
    position:absolute;
    top:5%;
    right:-6px;
  }

  .xi-angle-right-min {
    border:1px dashed #997fb5;
    border-radius: 100%;
    color:#997fb5;
    line-height: 1.2;
    font-size: 12px;
  }
  .btn {
    padding:0;
  }

}
@media ( min-width : 992px) {

}
@media ( min-width : 1200px) {

}
</style>
