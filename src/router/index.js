import { createRouter, createWebHistory } from 'vue-router';
// import Total from '../view/**'
import Main from '../view/Main.vue';
import MenuManagement from '../view/MenuManagement.vue';
import OrderManagement from '../view/OrderManagement.vue';
import NewOrderListOne from '../view/NewOrderListOne.vue';
import NewOrderListTwo from '../view/NewOrderListTwo.vue';
import PreparingListOne from '../view/PreparingListOne.vue';
import PreparingListTwo from '../view/PreparingListTwo.vue';
import CompletedOrder from '../view/CompletedOrder.vue';
import OrderList from '../view/OrderList.vue';
import OrderPrint from '../view/OrderPrint.vue';

import StaffManagementOne from '../view/StaffManagementOne.vue';
import StaffManagementTwo from '../view/StaffManagementTwo.vue';
import OperationManagement from '../view/OperationManagement.vue';
import OperationSetting from '../view/OperationSetting.vue';
import LogCheck from '../view/LogCheck.vue';
import DiscountCode from '../view/DiscountCode.vue';
import SalesManagement from '../view/SalesManagement.vue';
import Login from '../view/Login.vue';
import SignUpOne from '../view/SignUpOne.vue';

import SignUpThree from '../view/SignUpThree.vue';
import SignUpFour from '../view/SignUpFour.vue';
import ReleaseSoldOut from '../view/ReleaseSoldOut.vue';
import MenuManageCategories from '../view/MenuManageCategories.vue';
import MenuManageMenus from '../view/MenuManageMenus.vue';
import MenuManageOptions from '../view/MenuManageOptions.vue';
import test1 from '../view/test1';
import PageNotFound from '../view/page404';
import login from '../view/Login';
import page404 from '../view/page404';

// const msg = true;
// const methods = {
//   allcatch: () => {
//     routes.push({
//       name: 'main',
//       params: { msg: true },
//     });
//   },
// };

const routes = [
  {
    path: '/',
    component: Main,
    name: 'main',
    params: { page404: false },
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
    component: () => import(/* webpackChunkName: "about" */ '../view/SignUpTwo'),
    name: 'signup2',
    props: true,
  },
  {
    path: '/signupthree',
    component: SignUpThree,
    name: 'signup3',
    props: true,
  },
  {
    path: '/signupfour',
    component: SignUpFour,
    name: 'signup4',
    props: true,
  },
  {
    path: '/main',
    component: Main,
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
          //-----------로그확인------------
          {
            path: '/operationmanagement/LogCheck',
            component: LogCheck,
          },
          //-----------가게설정-------------
          {
            path: '/operationmanagement/OperationSetting',
            component: OperationSetting,
          },
        ]
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
