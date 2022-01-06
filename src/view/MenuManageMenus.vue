<template>
<!-- 메뉴관리 페이지의 메뉴편집 게시판 페이지 -->
        <form >
          <label><input type="checkbox"> 정상</label>
          <label><input type="checkbox"> 숨김</label>
          <label><input type="checkbox"> 품절</label>
          <input type="search" name="categoriSearch" placeholder="search">
          <input type="submit">
          <button>순서변경</button><button>편집</button><button>+메뉴 추가</button>
        </form>
  <div class="container1">
    <table class="table">
      <thead>
      <tr>
        <th> 메뉴명 </th> |
        <th scope="col">가격</th> |
        <th scope="col">카테고리</th> |
        <th scope="col">연결옵션</th> |
        <th scope="col">숨김/품절</th>
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

</template>

<script>
export default {

}
</script>

<style>

</style>
