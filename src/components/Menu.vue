<template>

  <div class="container">
    <div class="box">
      <p class="order_text">메뉴현황</p>
      <button class="btn btn-default" type="submit" @click="$store.commit('openMenuModal')">품절해제</button>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <p>전체메뉴</p>
        <div>{{ $store.state.menuData.length }}</div>
      </div>
      <div class="order_box">
        <p  >품절메뉴</p>
        <div>{{ $store.state.soldOutNum }}</div>
      </div>
      <div class="order_box">
        <p>정상운영</p>
        <div>{{ $store.state.openShopNum }}</div>
      </div>
      <div class="order_box">
        <p>숨김메뉴</p>
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
  width:30%;
  border-radius: 30px;
  padding:0 15px;
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
