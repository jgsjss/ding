<template>
<!-- 메뉴관리 페이지의 카테고리편집 게시판 페이지 -->
<div class="cate_container">
        <form class="category_wrap">
          <div class="category_left">
          <label class="cate_label"><input type="checkbox" class="cate_check"> 전체선택</label>
          <label class="cate_label"><button type="button" class="cate_check_btn"> 삭제</button></label>
          <label class="cate_label"><button type="button" class="cate_check_btn"> 정상</button></label>
          <label class="cate_label"><button type="button" class="cate_check_btn"> 숨김</button></label>
          </div>
          <div class="category_right">
          <input type="search" 
          name="categoriSearch" 
          placeholder="search" 
          class="menu_search"
          >
          <button class="cate_menu_btn">순서변경</button>
          <button class="cate_menu_btn02">+카테고리추가</button>
          <select class="hidden_select">
            <option class="hidden_btn">전체/숨김/정상</option>
            <option class="hidden_btn" value="삭제">삭제</option>
            <option class="hidden_btn" value="숨김">숨김</option>
            <option class="hidden_btn" value="정상">정상</option>
          </select>
          </div>

        </form>
        <div class="category_list_wrap">
        <table class="cate_table">
          <thead class="category_thead">
          <tr class="cate_title">
            <th><input type="checkbox" id="all-check"></th>
            <th scope="col" class="cate_col">카테고리명</th>
            <th scope="col" class="cate_col">연결 된 메뉴</th>
            <th scope="col" class="cate_col">연결메뉴 갯수</th>
            <th scope="col" class="cate_col">메뉴연결</th>
            <th scope="col" class="cate_col">숨김</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in $store.state.CategoryData" :key="i">
            <th  scope="row"><input type="checkbox"></th>
            <td class="cate_data">{{ $store.state.CategoryData[i].catename }}</td>
            <td class="cate_data">{{ $store.state.CategoryData[i].catemenu }}</td>
            <td class="cate_data">{{ $store.state.CategoryData[i].menunum }}</td>
            <td class="cate_data"><button type="button" class="cate_connect_btn">메뉴연결</button></td>
            <td class="cate_data">
              <button type="button" class="cate_connect_btn">숨김(OFF)
                </button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="cate_add_wrap">
          <button type="button" class="cate_add_btn">저장</button>
        </div>
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
// import { ref, computed } from 'vue';
// import axios from 'axios';

export default {
  date() {
    return {
      pageNum: 0,      
      active: false,
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    },
  },
    computed: {
    // pageCount () {
    //   return Math.ceil(this.$store.state.CategoryData.length / 10)
    // },
  },
  setup() {
  },
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuManageCategories.css';
</style>
