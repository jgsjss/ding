<template>
  <div class="nav_container">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/main" class="nav-link">
        <div class="nav-wrap">
        <i class="xi-cloud-o"></i>
        <p class="nav-link active" aria-current="page">로고</p>
        </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/menumanagement/categories" class="nav-link">
        <div class="nav-wrap">
        <i class="xi-cloud-o"></i>
        <p class="nav-link">메뉴관리</p>
        </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/salesmanagement" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-cloud-o"></i>
            <p class="nav-link">매출관리</p>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ordermanagement/neworderlistone" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-cloud-o"></i>
            <p class="nav-link">주문관리</p>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/staffmanagement" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-cloud-o"></i>
            <p class="nav-link">직원관리</p>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/operationmanagement" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-cloud-o"></i>
            <p class="nav-link">운영관리</p>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/discountcode" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-cloud-o"></i>
            <p class="nav-link">할인코드</p>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <div class="btn-group dropend nav-info-btn">
          <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            img
          </button>
          <ul class="dropdown-menu">
            <router-link to="../components/MyInfo" class="nav-link"><li><a class="dropdown-item" href="#">정보수정</a></li></router-link>
            <router-link to="/login" class="nav-link"><li><a class="dropdown-item" href="#">로그아웃</a></li></router-link>
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
  width:15%;
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
.nav-wrap > .xi-cloud-o {
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
</style>
