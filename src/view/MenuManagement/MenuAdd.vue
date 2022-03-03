<template>
  <div class="menuadd_container">
    <div class="menuadd_title_wrap">
      <h4 class="menuadd_title">메뉴추가</h4>
      <i class="xi-close menuadd_close" @click="$router.go(-1)"></i>
    </div>
    <div class="menuadd_box_wrap">
      <div class="menuadd_wrap">
        <form>
        <label class="menuadd_label form-label">* 메뉴명
          <input type="text" class="menuadd_input form-control" placeholder="예) 딩동아메리카노">
        </label>
        <label class="menuadd_label form-label">* 가격
          <input type="text" class="menuadd_input form-control">
        </label>
        <label class="menuadd_label form-label">* 설명
          <textarea type="text" class="menuadd_input form-control" placeholder="예) 딩동커피만의 로스팅방식으로 만들어낸 아메리카노"></textarea>
        </label>
        <label class="menuadd_label form-label"> 이미지
          <input 
            type="file" 
            class="menuadd_img_btn form-control"
            @change="upload"
            multiple accept="image/*"
            id="file"
            >
        </label>
        <div class="menuadd_img_input form-label">
        <img :src="image" alt="메뉴이미지" class="popupImageItem" style="width:200px; text-align:center;" >
        </div>
        <label class="form-label">메뉴공개&nbsp
          <input type="radio" name="menu_add_radio" class="menuadd_radio">&nbsp공개
        </label>
        <label class="form-label">&nbsp
          <input type="radio" name="menu_add_radio" class="menuadd_radio">&nbsp숨김 (딩동오더에 노출 안됨)
        </label>
        </form>
      </div>
      <!--카테고리설정 및 옵션설정 창-->
      <div class="menuadd_btn_wrap">
        <label class="menuadd_label">카테고리
          <button type="button" class="menuadd_edit_btn" @click="categoryAdd=!categoryAdd">카테고리설정</button>
          <div class="category_option_bind">{{}}전체(기본카테고리)</div>
          <div class="category_option_wrap" id="category_option" v-show="categoryAdd">
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
        <!--옵션설정-->
        <label class="menuadd_label">옵션
          <button type="button" class="menuadd_edit_btn"  data-bs-toggle="collapse" data-bs-target="#option_edit" aria-expanded="false" aria-controls="option_edit">옵션설정</button>
            <div class="option_edit_bind">{{}}연결된 옵션 없음</div>
          <div class="collapse option_edit_wrap" id="option_edit">
            <div class="card card-body">
              <div class="option_edit_add_wrap">
                <div class="option_edit_add_left">
                  <div class="option_edit_add_title_wrap">
                  <h4 class="option_edit_add_title">옵션 설정</h4>
                  <p class="option_edit_add_text">- 메뉴와 연결되는 옵션을 설정할 수 있습니다.</p>
                  <p class="option_edit_add_text">- 삭제를 누르시면 메뉴와의 연결이 끊어집니다.</p>
                  <p class="option_edit_add_text">- 왼쪽의 아이콘을 잡고 드래그하여 순서변경이 가능합니다.</p>
                  </div>
                  <div class="option_edit_add_btn_wrap">
                    <button type="button" class="option_edit_add_btn">+옵션 연결</button>
                  </div>
                    <draggable class="dragArea list-group w-full" :list="list" @change="log">
                      <div
                        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center menuconnect_drag_text"
                        v-for="element in list"
                        :key="element.name"
                      >
                        {{ element.name }}
                      </div>
                    </draggable>
                  <div class="option_edit_add_btn_wrap">
                    <button type="button" class="option_edit_add_btn02">저장</button>
                  </div>

                </div>
                <div class="option_edit_add_right">
                  <div class="option_edit_add_title_wrap">
                  <h4 class="option_edit_add_title">카테고리 연결</h4>
                  </div>
                  <button type="button" v-for="(a, i) in $store.state.CategoryOptionData" :key="i" class="option_edit_name">
                    {{ $store.state.CategoryOptionData[i].dessert }}
                    <p>{{ $store.state.CategoryOptionData[i].dessertname }}</p>
                  </button>
                    <div class="option_edit_add_btn_wrap">
                      <button type="button" class="option_edit_add_btn02">(2개선택){{}}연결</button>
                    </div>                  
                </div>
              </div>
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
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
export default {
    components: {
      draggable: VueDraggableNext,
    },
      data() {
      return {
        enabled: true,
        list: [
          { name: 'HOT/ICED', id: 1 },
          { name: '샷추가-기본2샷', id: 2 },
          { name: '시럽추가선택', id: 3 },
          { name: '추가 옵션', id: 4 },
        ],
        dragging: false,
        categoryAdd:false,
      }
    },
    methods: {
        log(event) {
        console.log(event)
      },
        handleChange() {
        console.log('changed');
    },
        inputChanged(value) {
        this.activeNames = value;
    },
        getComponentData() {
            return {
                on: {
                change: this.handleChange,
                input: this.inputChanged
                },
                attrs:{
                wrap: true
                },
                props: {
                value: this.activeNames
                }
            };
    },
        upload(e){
      var file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.image = url;
    },
}
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuAdd.css';
</style>