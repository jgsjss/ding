<template>
  <div class="nav_ontainer">
    <ul class="nav flex-column">
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/main"><p class="nav-link active" aria-current="page">로고</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/menumanagement/categories"><p class="nav-link">메뉴관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/salesmanagement"><p class="nav-link">매출관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/ordermanagement/1"><p class="nav-link">주문관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/staffmanagement"><p class="nav-link">직원관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/operationmanagement"><p class="nav-link">운영관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/discountcode"><p class="nav-link">할인코드</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <div class="btn-group dropend nav-info-btn">
          <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            img
          </button>
          <ul class="dropdown-menu">
            <router-link to="@/components/MyInfo"><li><a class="dropdown-item" href="#">정보수정</a></li></router-link>
            <router-link to="/login"><li><a class="dropdown-item" href="#">로그아웃</a></li></router-link>
          </ul>
        </div>

      </li>
    </ul>
  </div>

</template>

<script>
export default {
}
</script>


<style>
.btn-group {
  display:block;
}
.dropdown-toggle {
  background:none;
  border:none;
  color:#997fb5;
}
.dropend .dropdown-toggle:after {
  color:#997fb5;
  display: block;
  margin-left: 0;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
}
.dropdown-menu {
  background:#997fb5;
  border:none;
}
.dropdown-item {
  color:white;
  text-align: center;
  padding:5px 0;
}
.dropdown-item:nth-child(2) {
  border-top:1px solid white;
}
ul {list-style:none;}
.nav_container {
  width:100%;
  padding:30px 15px;
}
.nav {
  float:left;
  background:#dcd4e3;
  padding:30px 15px;
  margin:0 10px;
}
.nav-item {
  text-align: center;
  padding:15px 0;
}
.nav-item > .xi-cloud-o {
  border:1px dashed #c6a6e2;
  border-radius: 100%;
  padding:5px;
  color:#fff;
}
.nav-link {
  color:#997fb5;
  text-decoration: none;
}
.nav-link:hover {
  color:#997fb5;
  text-decoration: none;
}
.nav-info-btn {

}
</style>