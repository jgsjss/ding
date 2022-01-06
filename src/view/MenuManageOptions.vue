<template>
<!-- 옵션 편집 게시판 페이지 -->
    <form >
          <label><input type="checkbox"> 정상</label>
          <label><input type="checkbox"> 숨김</label>
          <input type="search" name="categoriSearch" placeholder="search">
          <input type="submit">
          <button>순서변경</button><button>편집</button><button>+옵션 추가</button>
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

</template>
<script>
export default {

}
</script>
<style>

</style>
