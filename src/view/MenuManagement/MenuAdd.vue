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
            <input type="text" v-model="pdname" @change="errorMenuAdd" class="menuadd_input form-control" placeholder="예) 딩동아메리카노">
            <span class="error_next_box1" id="menuNa" style aria-live="assertive">필수 정보 입니다.</span>
          </label>
          <label class="menuadd_label form-label">* 가격
            <input type="text" v-model="price" @change="errorMenuPrAdd" class="menuadd_input form-control" @input="menuaddNumber">
            <span class="error_next_box1" id="menuPr" style aria-live="assertive">필수 정보 입니다.</span>
          </label>
          <label class="menuadd_label form-label">* 설명
            <textarea type="text" v-model="pddescription" @change="errorMenuDeAdd" class="menuadd_input form-control"
                      placeholder="예) 딩동커피만의 로스팅방식으로 만들어낸 아메리카노"></textarea>
            <span class="error_next_box1" id="menuDe" style aria-live="assertive">필수 정보 입니다.</span>          
          </label>
          <label class="menuadd_label form-label"> 이미지
            <input
                type="file"
                ref="image"
                class="menuadd_img_btn form-control"
                accept=".png"
                id="file"
            >
          </label>
          <div class="menuadd_img_input form-label">
            <img :src="image" alt="메뉴이미지" class="popupImageItem" style="width:200px; text-align:center;">
            <div class="menuadd_img_add_btn_wrap">

            </div>
          </div>
          <label class="form-label">메뉴공개&nbsp
            <input type="radio" name="menu_add_radio" class="menuadd_radio" aria-selected="true">&nbsp공개
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
                    <button type="button" @click="cateConnCheck" class="category_option_add_btn">+카테고리 연결</button>
                  </div>
                  <div
                      class="category_option_name">
                    {{ pdcategory }}
                    <p>{{ description }}</p>
                  </div>
                  <div class="category_option_add_btn_wrap">
                    <button type="button" class="category_option_add_btn02">저장</button>
                  </div>
                </div>
                <div class="category_option_add_right" v-show="cateConnect">
                  <div class="category_option_add_title_wrap">
                    <h4 class="category_option_add_title">카테고리 연결</h4>
                  </div>
                  <div class="category_option_wrapper">
                    <button type="button" v-for="(a, i) in cgData" :key="i"
                            class="category_option_name" @click="selectCategory(i)">
                      {{ cgData[i].pdcategory }}
                      <p>{{ cgData[i].description }}</p>
                    </button>
                  </div>
                  <!--                  <div class="category_option_add_btn_wrap">-->
                  <!--                    <button type="button" class="category_option_add_btn02">연결</button>-->
                  <!--                  </div>-->
                </div>

              </div>
            </div>
          </div>
        </label>
        <!--옵션설정-->
        <label class="menuadd_label">옵션
          <button type="button" class="menuadd_edit_btn" data-bs-toggle="collapse" data-bs-target="#option_edit"
                  aria-expanded="false" aria-controls="option_edit">옵션설정
          </button>
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
                  <button type="button" v-for="(a, i) in $store.state.CategoryOptionData" :key="i"
                          class="option_edit_name">
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
      <button type="button" class="menuadd_btn" @click="addMenu">메뉴추가</button>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import axios from 'axios'
import router from '@/router'
import sweet from 'sweetalert2'
import store from '../../store/index.js'
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();



export default {
  components: {
    draggable: VueDraggableNext,
  },

  data () {
    return {
      pdname: '',
      price: '',
      pddescription: '',
      ctnum: '',
      pdcategory: '선택된 카테고리 없음',
      description: '',
      catenum: Number,
      // shopcode: '',
      cateConnect: false,
      enabled: true,
      list: [
        {
          name: 'HOT/ICED',
          id: 1
        },
        {
          name: '샷추가-기본2샷',
          id: 2
        },
        {
          name: '시럽추가선택',
          id: 3
        },
        {
          name: '추가 옵션',
          id: 4
        },
      ],
      dragging: false,
      categoryAdd: false,
      cgData: [],
      menuNumber: '',
      isNull: false,

    }
  },
  methods: {
    isEmpty (data) {
      if (data == '' || data == null || data == undefined) {
        return true
      } else {
        return false
      }
    },
    nullCheck () {
      if (!this.isEmpty(this.pdname) &&
          !this.isEmpty(this.price) &&
          !this.isEmpty(this.pddescription) &&
          !this.isEmpty(this.ctnum)
      ) {
        return this.isNull = true

      } else {
        return this.isNull = false
      }
    },
    pdimageUpload () {
      let form = new FormData()
      let shopCode = this.shopcode
      console.log("폼데이터 샵코드",shopCode)
      let image = this.$refs['image'].files[0]

      form.append('image', image)
      // form.append('shopcode', shopCode)

      console.log("form.get : ",form.get('shopcode'))

      console.log("shopcode : ",cookies.get('login'))
      console.log("shopcode : ",cookies.get('login').shopCode)

      axios.post('/apimenu/pdupload', form, {
        // data:{
        //   shopcode: this.shopcode
        // },
        headers: {
          'Content-Type': 'multipart/form-data',
          shopcode : shopCode,
        },
      }).then(res => {
        console.log('전송완료')
      }).catch((err) => {
        console.log(err)
      })
    },
    errorMenuAdd() {
      if (this.pdname == "") {
        document.getElementById("menuNa").style.display = "block";
        return false;
      } else if (this.pdname != "") {
        document.getElementById("menuNa").style.display = "none";
        return false;
      }
    },
      errorMenuPrAdd() {
      if (this.price == "") {
        document.getElementById("menuPr").style.display = "block";
        return false;
      } else if (this.price != "") {
        document.getElementById("menuPr").style.display = "none";
        return false;
      }
      },
      errorMenuDeAdd() {
      if (this.pddescription == "") {
        document.getElementById("menuDe").style.display = "block";
        return false;
      } else if (this.pddescription != "") {
        document.getElementById("menuDe").style.display = "none";
        return false;
      }
    },
    async addMenu () {

      this.nullCheck()
      let nullCk = this.isNull

      if (!nullCk) {
        sweet.fire('메뉴 정보들을 모두 입력하세요.')
        return false
      } else {
       await this.pdimageUpload()

       await axios.post('/apimenu/addMenu', {
          data: {
            pdname: this.pdname,
            ctnum: this.ctnum,
            price: this.price,
            pddescription: this.pddescription,
          }
        }).then(res => {
          console.log(res.data)
          console.log('전송완료')
          sweet.fire('메뉴 등록 완료')
          // push해서 라우팅 경로 이동 redirect 필요
          router.push('/menumanagement/menus')
        })
            .catch((err) => {
              console.log(err)
            })
      }

    },
    selectCategory (i) {
      this.pdcategory = this.cgData[i].pdcategory
      this.description = this.cgData[i].description
      this.ctnum = this.cgData[i].ctnum
      this.catenum = i
      console.log('i : ', i)
    },
    cateConnCheck () {
      if (!this.cateConnect) {
        this.cateConnect = true
      } else {
        this.cateConnect = false
      }
    },
    log (event) {
      console.log(event)
    },
    handleChange () {
      console.log('changed')
    },
    inputChanged (value) {
      this.activeNames = value
    },
    getComponentData () {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        attrs: {
          wrap: true
        },
        props: {
          value: this.activeNames
        }
      }
    },
    upload (e) {
      var file = e.target.files
      let url = URL.createObjectURL(file[0])
      this.image = url
    },
    getCategory () {
      axios.post('/apimenu/menucategory')
          .then(res => {
            this.cgData = res.data.rows
          })
    },
    menuaddNumber (event) {
      this.menuNumber = event.target.value
    }
  },
  beforeMount () {
    this.getCategory()

  },
  watch: {
    menuNumber (val) {
      const menuadd = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/

      //한글, 영문 체크
      if (menuadd.exec(val) !== null) this.menuNumber = val.replace(/[^0-9]/g, '')

      //...만 입력하게 될 경우 체크
      if (isNaN(parseFloat(val))) this.menuNumber = ''
    },
  },
  computed:{
    shopcode(){
      return store.getters["loginStore/getShopcode"]
    }
  },
  updated () {
    console.log("=======샵코드: ",this.shopcode)

  }

}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuAdd.css';
</style>
