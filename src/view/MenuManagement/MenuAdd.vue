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
          <button type="button" class="menuadd_edit_btn" data-bs-toggle="collapse" data-bs-target="#category_option" aria-expanded="false" aria-controls="category_option">카테고리설정</button>
          <div class="collapse category_option_wrap" id="category_option">
            <div class="card card-body">
              <div class="category_option_add_wrap">
                <div class="category_option_add_left">
                  <div class="category_option_add_title_wrap">
                  <h4 class="category_option_add_title">카테고리 설정</h4>
                  <p class="category_option_add_text">- 메뉴와 연결되는 카테고리를 설정할 수 있습니다.</p>
                  <p class="category_option_add_text">- 삭제를 누르시면 메뉴와의 연결이 끊어집니다.</p>
                  </div>
                  <div class="category_option_add_btn_wrap">
                    <button type="button" class="category_option_add_btn">+카테고리 연결</button>
                  </div>
                  <button type="button" v-for="(a, i) in $store.state.CategoryOptionData" :key="i" class="category_option_name">
                    {{ $store.state.CategoryOptionData[i].catename }}
                    <p>{{ $store.state.CategoryOptionData[i].menuname }}</p>
                  </button>
                  <div class="category_option_add_btn_wrap">
                    <button type="button" class="category_option_add_btn02">저장</button>
                  </div>

                </div>
                <div class="category_option_add_right">
                  <div class="category_option_add_title_wrap">
                  <h4 class="category_option_add_title">카테고리 연결</h4>
                  </div>
                  <button type="button" v-for="(a, i) in $store.state.CategoryOptionData" :key="i" class="category_option_name">
                    {{ $store.state.CategoryOptionData[i].catename }}
                    <p>{{ $store.state.CategoryOptionData[i].menuname }}</p>
                  </button>
                    <div class="category_option_add_btn_wrap">
                      <button type="button" class="category_option_add_btn02">(2개선택){{}}연결</button>
                    </div>                  
                </div>
              </div>
            </div>
          </div>
        </label>
        <label class="menuadd_label">옵션
          <button type="button" class="menuadd_edit_btn"  data-bs-toggle="collapse" data-bs-target="#option_edit" aria-expanded="false" aria-controls="option_edit">옵션설정</button>
          <div class="collapse  category_option_wrap" id="option_edit">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>          
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