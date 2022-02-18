<template>
  <div class="menuadd_container">
    <div class="menuadd_title_wrap">
      <h4 class="menuadd_title">메뉴추가</h4>
      <i class="xi-close" @click="$router.go(-1)"></i>
    </div>
    <div class="menuadd_box_wrap">
      <div class="menuadd_wrap">
        <form>
        <label class="menuadd_label">* 메뉴명
          <input type="text" class="menuadd_input" placeholder="예) 딩동아메리카노">
        </label>
        <label class="menuadd_label">* 가격
          <input type="text" class="menuadd_input" placeholder="예) 딩동아메리카노">
        </label>
        <label class="menuadd_label">* 설명
          <textarea type="text" class="menuadd_input" placeholder="예) 딩동커피만의 로스팅방식으로 만들어낸 아메리카노"></textarea>
        </label>
        <label class="menuadd_label">이미지
          <button type="button" class="menuadd_img_btn">이미지 추가</button>
        </label>
        <label class="menuadd_label">메뉴공개
          <input type="radio" class="menuadd_radio">공개
          <input type="radio" class="menuadd_radio">숨김 (딩동오더에 노출 안됨)
        </label>
        </form>
      </div>
      <!--카테고리설정 및 옵션설정 창-->
      <div class="menuadd_btn_wrap">
        <label class="menuadd_label">카테고리
          <button type="button" class="menuadd_edit_btn">카테고리설정</button>
        </label>
        <label class="menuadd_label">옵션
          <button type="button" class="menuadd_edit_btn">옵션설정</button>
        </label>
      </div>
    </div>
    <div class="menuadd_btn_con">
      <button type="button" class="menuadd_btn">메뉴추가</button>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuAdd.css';
</style>