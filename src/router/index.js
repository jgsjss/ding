import { createRouter, createWebHistory } from 'vue-router';
// import Total from '../view/**'
import Main from '../view/Main.vue';
import MenuManagement from '../view/MenuManagement.vue';
/*------ordermanage------ */
import OrderManagement from '../view/ordermanage/OrderManagement.vue';
import NewOrderListOne from '../view/ordermanage/NewOrderListOne.vue';
import NewOrderListTwo from '../view/ordermanage/NewOrderListTwo.vue';
import PreparingListOne from '../view/ordermanage/PreparingListOne.vue';
import PreparingListTwo from '../view/ordermanage/PreparingListTwo.vue';
import CompletedOrder from '../view/ordermanage/CompletedOrder.vue';
import OrderList from '../view/ordermanage/OrderList.vue';
import OrderPrint from '../view/ordermanage/OrderPrint.vue';
/*------staffmanagement------ */
import StaffManagementOne from '../view/staffmanagement/StaffManagementOne.vue';
import StaffManagementTwo from '../view/staffmanagement/StaffManagementTwo.vue';
/*------operationmanagement------ */
import OperationManagement from '../view/operationmanagement/OperationManagement.vue';
import OperationSetting from '../view/operationmanagement/OperationSetting.vue';
import LogCheck from '../view/operationmanagement/LogCheck.vue';
import DiscountCode from '../view/DiscountCode.vue';
import SalesManagement from '../view/SalesManagement.vue';
/*------member------ */
import Login from '../view/member/Login.vue';
import SignUpOne from '../view/member/SignUpOne.vue';
import SignUpTwo from '../view/member/SignUpTwo'
import SignUpThree from '../view/member/SignUpThree.vue';
import SignUpFour from '../view/member/SignUpFour.vue';
import ReleaseSoldOut from '../view/ReleaseSoldOut.vue';
import MenuManageCategories from '../view/MenuManageCategories.vue';
import MenuManageMenus from '../view/MenuManageMenus.vue';
import MenuManageOptions from '../view/MenuManageOptions.vue';
import test1 from '../view/test1';
import Calendar from '../view/Calendar.vue'
import PageNotFound from '../view/page404';
import page404 from '../view/page404';
import store from '../store'

//인증메소드
const Authentication = () => (to, from, next) => {
  const isLogin = store.getters['loginStore/isLogin'];
  if (!isLogin) {
    next('/login?returnUrl=' + to.fullPath);
  } else {
    next();
  }
};

// import PageNotFound from '../view/page404';
// import page404 from '../view/page404';



// const msg = true;
// const methods = {
//   allcatch: () => {
//     routes.push({
//       name: 'main',
//       params: { msg: true },
//     });
//   },
// };

// let nullCheckSignUp2 =   ()=>{
//   let check = false;
//   console.log(SignUpTwo.props)



  // if ( SignUpTwo.data().userId != null &&
  //   SignUpTwo.data().userPw1 != null &&
  //   SignUpTwo.data().userPw2 != null &&
  //   SignUpTwo.data().phNum != null &&
  //   SignUpTwo.data().userName != null &&
  //   SignUpTwo.data().shopPhNum != null &&
  //   SignUpTwo.data().bizAddr1 != null &&
  //   SignUpTwo.data().bizAddr2 != null &&
  //   SignUpTwo.data().bizZip != null )
  // {
  //
  //   return nullCheckSignUp2 = true;
  // }
// }

const routes = [
  {
    path: '/',
    component: Login,
    name: 'main',

    // params: { page404: false },
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signUpOne',
    component: SignUpOne,
    props: true,
  },
  {
    path: '/signuptwo',
    // route level oode-spilitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUpTwo,
    name: 'signup2',
    props: true,
  },
  {
    path: '/signupthree',
    component: SignUpThree,
    name: 'signup3',
    props: true,
    // beforeEnter: ()=>{
    //   let check = false
    //   if(!nullCheckSignUp2()){
    //     alert('정보를 정확하게 입력하세요.')
    //     return '/signuptwo'
    //   }
    // }
  },
  {
    path: '/signupfour',
    component: SignUpFour,
    name: 'signup4',
    props: true,
  },
  {
    path: '/main',
    name: Main,
    component: Main,
    // beforeEnter: Authentication()
  },
  {
    path: '/menumanagement',
    component: MenuManagement,
    //중첩되는 자식 라우트 경로
    children: [
      {
        path: '/menumanagement/categories',
        component: MenuManageCategories,
      },
      {
        path: '/menumanagement/menus',
        component: MenuManageMenus,
      },
      {
        path: '/menumanagement/options',
        component: MenuManageOptions,
      },
    ],
  },
  {
    path: '/salesmanagement',
    component: SalesManagement,
  },
  {
    path: '/ordermanagement',
    component: OrderManagement,
    //중첩되는 자식 라우트 경로
    children: [
      {
        path: '/ordermanagement/neworderlistone',
        component: NewOrderListOne,
      },
      {
        path: '/ordermanagement/neworderlisttwo',
        component: NewOrderListTwo,
      },
      {
        path: '/ordermanagement/preparinglistone',
        component: PreparingListOne,
      },
      {
        path: '/ordermanagement/preparinglisttwo',
        component: PreparingListTwo,
      },
      {
        path: '/ordermanagement/completedorder',
        component: CompletedOrder,
      },
      {
        path: '/ordermanagement/orderlist',
        component: OrderList,
      },
      // {
      //   path: '/ordermanagement/4',
      //   component: OrderManagement4
      // },
    ],
  },
  //-------주문표 인쇄--orderprint---------
  {
    path: '/orderprint',
    component: OrderPrint,
  },
  //----------직원관리------------
  {
    path: '/staffmanagementone',
    component: StaffManagementOne,
  },
  {
    path: '/staffmanagementtwo',
    component: StaffManagementTwo,
  },
  //---------운영관리-------------
  {
    path: '/operationmanagement',
    component: OperationManagement,
        //중첩되는 자식 라우트 경로
        children: [

          //-----------가게설정-------------
          {
            path: '/operationmanagement/OperationSetting',
            component: OperationSetting,
          },
        ]
  },
    //-----------로그확인------------
  {
    path: '/LogCheck',
    component: LogCheck,
  },
  {
    path: '/discountcode',
    component: DiscountCode,
  },
  {
    path: '/releaseSoldout',
    component: ReleaseSoldOut,
  },
  {
    path: '/test1',
    component: test1,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    // to: '/main',
    path: '/:pathMatch(.*)*',
    // beforeRouteLeave: (to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   console.log(this.params);
    //   next();
    // },
    // redirect: '/ ',
    // page404: true,
    component: Main,
    // props: () =>
    //   this.$router.push({
    //     query: routes.query.page404,
    //   }),
    // props: (routes) => ({ query: routes.query.page404 }),
    // params: {
    //   page404: true,
    // },
  },
];

// routes.beforeEach(function (to, from, next) {
//   if(localStorage.guest) { // 그냥 로그인 된 상태인지 아닌지 여부
//     next('/');
//   }	else {
//     next(); //페이지 전환 이루어 짐.
//   }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
