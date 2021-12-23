<template>
    <div><h4>메뉴현황</h4></div>
    <div>
      <div><h5>전체메뉴</h5></div>
      <div>{{$store.state.menuData.length}}</div>

      <div><h5>품절메뉴</h5></div>
      <div>{{ $store.state.soldOutNum }}</div>

      <div><h5>정상운영</h5></div>
      <div>{{ $store.state.openShopNum}}</div>

      <div><h5>숨김메뉴</h5></div>
      <div>{{ $store.state.hiddenNum }}</div>
    </div>
</template>
<script>

</script>
<style>

</style>
