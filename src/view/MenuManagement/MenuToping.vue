<template>
  <!-- 메뉴관리 페이지의 과일 또는 토핑추가 게시판 페이지 -->
  <div class="toping_container">
      <div class="toping_title_wrap"></div>
    <form class="toping_wrap">
      <div class="toping_left">
        <label class="toping_label">
          <input
            type="checkbox"
            class="toping_check"
            id="all-check"
            v-model="allChecked"
            @click="checkedAll($event.target.checked)"
          />
          전체선택
        </label>
        <label class="toping_label">
          <button type="button" class="toping_check_btn">삭제</button>
        </label>
        <label class="toping_label">
          <button type="button" class="toping_check_btn">숨김</button>
        </label>
        <label class="toping_label">
          <button type="button" class="toping_check_btn">정상</button>
        </label>
      </div>
      <div class="toping_right">
        <input
          type="text"
          v-model="search"
          @input="handleSearchInput"
          @keydown.tab="KeydownTab"
          name="categoriSearch"
          placeholder="search"
          class="toping_search"
          autofocus
        />
        <!--옵션추가 오프캔버스 시작-->
        <button
          class="toping_menu_btn02"
          type="button"
          @click="open = !open">
          +옵션목록추가
        </button>
        <div class="toping_option_add_wrap"
            v-show="open"
        >
        <h4 class="toping_option_add_title">
            옵션목록 추가
        </h4>
        <p class="toping_option_add_subtitle">
            - 메뉴와 연결되는 카테고리를 설정할 수 있습니다.
        </p>
        <form>
            <label class="toping_option_add_label">옵션목록 및 추가가격
                <input type="text" class="toping_option_add_input" placeholder="예)순한맛">
                <input type="text" class="toping_option_add_input" placeholder="예)500원">
            </label>
        </form>
        </div>

        <select class="toping_hidden_select">
          <option class="toping_hidden_btn">전체/정상/숨김</option>
          <option class="toping_hidden_btn" value="삭제">정상</option>
          <option class="toping_hidden_btn" value="숨김">숨김</option>
          <option class="toping_hidden_btn" value="숨김">품절</option>
        </select>
      </div>
    </form>
    <div class="toping_list_wrap">
      <table class="toping_table">
        <thead class="toping_thead">
          <tr class="toping_title">
            <th scope="col"></th>
            <th scope="col" class="toping_col">옵션목록 명</th>
            <th scope="col" class="toping_col">추가금액</th>
            <th scope="col" class="toping_col">수정/삭제</th>
            <th scope="col" class="toping_col">숨김/품절</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.TopingData" :key="i">
            <td scope="row" class="toping_check_box">
              <input type="checkbox" :id="'check_' + i.boardId" :value="i" v-model="selected" @click="print" />
            </td>
            <!-- <td>인덱스 {{a}}--{{i}}</td> -->
            <td class="toping_data" title="마우스">{{ $store.state.TopingData[i].listname }}</td>
            <td class="toping_data">{{ $store.state.TopingData[i].price }}원</td>
            <td class="toping_data col-2">
                <div class="toping_data_btn_wrap">
                <button type="submit" class="toping_data_btn01">수정</button>
                <button type="submit" class="toping_data_btn02">삭제</button>
                </div>
            </td>
            <td class="toping_data">
              <select class="toping_condition" @change="editCondition($event)" v-model="conditionKey">
                <option class="toping_condition_text" value="상태설정">상태설정</option>
                <option class="toping_condition_text" value="숨김">숨김</option>
                <option class="toping_condition_text" value="품절">품절</option>
              </select>
              <!-- <button type="button" class="cate_connect_btn">숨김(OFF)
              </button> -->
            </td>
          </tr>
        </tbody>
      </table>
      <!--옵션수정 오프캔버스 시작-->
      <div class="offcanvas offcanvas-start" tabindex="-1" id="toping_" aria-labelledby="menuoption_Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="toping_Label">옵션정보 수정</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="toping_correction"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <form>
              <label for="" class="form-label toping_form_label">* 옵션명</label>
              <input type="text" class="toping_input form-control" />
              <div class="mb-3">
                <label class="toping_form_label">* 필수여부</label>
                <input type="radio" class="toping_input" />필수(옵션을 선택해야 주문가능)<br />
                <input type="radio" class="toping_input" />선택(옵션을 선택하지 않아도 주문가능)
              </div>
              <div class="mb-3">
                <label class="toping_form_label">* 선택가능 옵션 수</label>
                <input type="number" min="0" max="5" class="m-2" />옵션은 최대 까지 선택 가능합니다.
                <p class="toping_subtitle">- 등록한 옵션목록 개수만큼 설정 가능합니다.</p>
              </div>
              <button type="submit" class="toping_add_btn">옵션정보 수정</button>
            </form>
          </div>
        </div>
      </div>
      <!--옵션수정 오프캔버스 끝-->
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
    <div class="toping_add_wrap">
      <button type="submit" class="toping_add_btn">저장</button>
    </div>
  </div>
</template>

<script>
// import { ref, computed } from 'vue';
// import axios from 'axios';
import _ from "lodash";
import axios from "axios";

export default {
  data() {
    return {
        open:false,
        conditionKey: 0,
        pageNum: 0,
        active: false,
        searchList: "",
        search: "",
        allChecked: false,
    };
  },
  methods: {
    print() {
      console.log(this.selected);
    },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    checkedAll(checked) {
      this.allChecked = checked;
    },
    selected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].selected) {
          this.allChecked = false;
          return;
        } else {
          this.allChecked = true;
        }
      }
    },
    getSelected() {
      let boardIds = [];
      for (let i in this.cgData) {
        if (this.cgData[i].selected) {
          boardIds.push(this.cgData[i].boardId);
        }
      }
    },
    getCategories() {
      axios
        .post("/apimenu/categories")
        .then((res) => {
          // console.log(res)

          this.cgData = res.data;
          // console.log('cgData: ', this.cgData)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    menuCnt(obj) {
      _.forEach(obj, function (v, k, copy) {
        // console.log("Asd",V)
        // console.log(K)
        // console.log("v",v)
        // console.log("k",k)
        // console.log("copy",copy)
        _.reduce(
          v,
          function (accum, v) {
            console.log("v", v);
            console.log("accum", accum);
            // console.log("k",k)
            // console.log("i",i)
          },
          3
        );
      });
    },
    editCondition(event) {
      console.log(event.target.value);
    },
    //검색 고장난거같음 일단 보류
    handleSearchInput(e) {
      this.search = e.target.value;
      if (this.search.length !== 0) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          const filteredList = this.stageInfoList.filter((item) => item.title.includes(this.search));
          this.searchList = filteredList;
        }, 500);
      } else {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.searchList = [];
        }, 500);
      }
    },
  },

  // mounted() {
  //   this.getList();
  // },
  computed: {
    // pageCount () {
    //   return Math.ceil(this.$store.state.CategoryData.length / 10)
    // },
  },
  beforeMount() {
    this.getCategories();

    // console.log(this.cgData)
  },
  setup() {},
  updated() {
    this.menuCnt(this.cgData);
  },
};
</script>

<style>
@import "../../assets/css/MenuManagement/MenuToping.css";
</style>
