<template>
    <div><a>카테고리편집</a>  <a>메뉴편집</a>   <a>옵션편집</a></div>
    <!-- 카테고리편집 탭 -->
      <div v-if="$store.state.menuTab == 0">
        <form >
          <label><input type="checkbox"> 정상</label>
          <label><input type="checkbox"> 숨김</label>
          <input type="search" name="categoriSearch" placeholder="search">
          <button>순서변경</button><button>편집</button><button>+카테고리추가</button>
          <input type="submit">
        </form>
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

  <!--  -->
  <div v-if="$store.state.menuTab == 1">
  </div>


</template>
<script>
  export default {

    components : {
    },

  }

</script>
<style>

</style>
