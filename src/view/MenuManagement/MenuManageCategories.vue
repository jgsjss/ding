<template>
<!-- 메뉴관리 페이지의 카테고리편집 게시판 페이지 -->
<div class="cate_container">
        <form class="category_wrap">
          <div class="category_left">
          <label class="cate_label"><input type="checkbox" class="cate_check"> 정상</label>
          <label class="cate_label"><input type="checkbox" class="cate_check"> 숨김</label>
          </div>
          <div class="category_right">
          <input type="search" name="categoriSearch" placeholder="search" class="menu_search">
          <button class="cate_menu_btn">순서변경</button>
          <button class="cate_menu_btn">편집</button>
          <button class="cate_menu_btn">+카테고리추가</button>
          </div>
        </form>
        <div class="category_list_wrap">
        <table class="cate_table">
          <thead class="category_thead">
          <tr class="cate_title">
            <th scope="col" class="cate_col">카테고리명</th>
            <th scope="col" class="cate_col">연결 된 메뉴</th>
            <th scope="col" class="cate_col">연결메뉴 갯수</th>
            <th scope="col" class="cate_col">메뉴연결</th>
            <th scope="col" class="cate_col">숨김</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in $store.state.CategoryData" :key="i">
            <td class="cate_data">{{ $store.state.CategoryData[i].catename }}</td>
            <td class="cate_data">{{ $store.state.CategoryData[i].catemenu }}</td>
            <td class="cate_data">{{ $store.state.CategoryData[i].menunum }}</td>
            <td class="cate_data"><button type="button" class="cate_connect_btn">메뉴연결</button></td>
            <td class="cate_data">
              <button type="button" class="cate_connect_btn" @click="activeBtn = '숨김(OFF)'" :class="{active: activeBtn === '숨김(OFF)'}">숨김(OFF)
                </button>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- <div class="btn-cover">
          <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
            <i class="xi-angle-left"></i>
          </button>
          <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
          <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
            <i class="xi-angle-right"></i>
          </button>
        </div> -->
        </div>
        </div>
</template>

<script>
export default {
  date() {
    return {
      activeBtn:'',
    }
  }
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuManageCategories.css';
</style>
