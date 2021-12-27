<template>
    <div><a @click="menuTab=0">카테고리편집</a> | <a @click="menuTab=1" >메뉴편집</a>  | <a @click="menuTab=3">옵션편집</a></div>
    <!-- 카테고리편집 탭 -->
      <div v-if="menuTab == 0">
        <form >
          <label><input type="checkbox"> 정상</label>
          <label><input type="checkbox"> 숨김</label>
          <input type="search" name="categoriSearch" placeholder="search">
          <button>순서변경</button><button>편집</button><button>+카테고리추가</button>
          <input type="submit">
        </form>
        <div class="container1">
        <table class="table">
          <thead>
          <tr>
            <th> 카테고리명 </th> |
            <th scope="col">연결 된 메뉴</th> |
            <th scope="col">연결메뉴 갯수</th> |
            <th scope="col">메뉴연결</th> |
            <th scope="col">숨김</th> |
          </tr>
          </thead>
          <tbody>
          <tr >
            <th scope="row"></th>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }} </td>
            <td>{{ }}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>

  <!-- 메뉴편집 탭  -->
  <div v-if="menuTab == 1">

  </div>

  <!-- 옵션편집 탭 -->
  <div v-if="menuTab == 2">

  </div>


</template>
<script>
  export default {
    data(){
      return {
        //메뉴관리 페이지의 탭 부분
        menuTab : 0,
      }
    },
    props:{

    },
    components : {
    },

  }

</script>
<style>
.container1{
    width: 1000px;
    margin: 0 auto;
}

</style>
