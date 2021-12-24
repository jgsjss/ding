<template>

  <div class="container">
    <div class="box">
      <p class="order_text">메뉴현황</p>
      <button class="btn" @click="$store.commit('openMenuModal')" type="submit">품절해제</button>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <p class="order_name">전체메뉴</p>
        <div>{{$store.state.menuData.length}}</div>
      </div>
      <div class="order_box">
        <p class="order_name">품절메뉴</p>
        <div>{{ $store.state.soldOutNum }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">정상운영</p>
        <div>{{$store.state.openShopNum}}</div>
      </div>
      <div class="order_box">
        <p class="order_name">숨김메뉴</p>
        <div>{{ $store.state.hiddenNum }}</div>
      </div>
    </div>
  </div>

</template>
<script>



</script>

<style scope>
.container {
  width:100%;
  text-align:center;
}
.box {
  display:flex;
  justify-content: space-around;
  align-items: center;
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
  font-size:16px;
}
.btn {
  width:100%;
  height:30px;
  border-radius: 30px;
  border:1px solid #997fb5;
  color:#f5f3f7;
  background:#997fb5;
}
.btn-default:hover {
  color:#fff;
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
  padding:5px;
  line-height: 1.3;
  font-size: 20px;
}
/* media query */
@media ( max-width : 768px) {
  .container {
    width:100%;
    text-align:center;
  }
  .box {
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
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
    font-size:16px;
  }
  .btn {
    width:100%;
    height:30px;
    border-radius: 30px;
    border:1px solid #997fb5;
    color:#f5f3f7;
    background:#997fb5;
  }
  .btn-default:hover {
    color:#fff;
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
    padding:5px;
    line-height: 1.3;
    font-size: 20px;
  }
}
@media (max-width : 992px) {
  .container {
    width:100%;
    text-align:center;
  }
  .box {
    display:flex;
    justify-content: space-around;
    align-items: center;
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
    font-size:16px;
  }
  .btn {
    width:120px;
    height:30px;
    border-radius: 30px;
    border:1px solid #997fb5;
    color:#f5f3f7;
    background:#997fb5;
  }
  .btn-default:hover {
    color:#fff;
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
    padding:5px;
    line-height: 1.3;
    font-size: 20px;
  }
}
@media ( min-width : 1200px) {
  .container {
    width:100%;
    text-align:center;
  }
  .box {
    display:flex;
    justify-content: space-around;
    align-items: center;
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
    font-size:16px;
  }
  .btn {
    width:120px;
    height:30px;
    border-radius: 30px;
    border:1px solid #997fb5;
    color:#f5f3f7;
    background:#997fb5;
  }
  .btn-default:hover {
    color:#fff;
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
    padding:5px;
    line-height: 1.3;
    font-size: 20px;
  }
}


</style>
