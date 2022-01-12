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

import StaffManagement from '../view/StaffManagement.vue';
import OperationManagement from '../view/OperationManagement.vue';
import DiscountCode from '../view/DiscountCode.vue';
import SalesManagement from '../view/SalesManagement.vue';
import Login from '../view/Login.vue';
import SignUp1 from '../view/SignUp1.vue';
import SignUp2 from '../view/SignUp2.vue';
import SignUp3 from '../view/SignUp3.vue';
import SignUp4 from '../view/SignUp4.vue';
import ReleaseSoldOut from '../view/ReleaseSoldOut.vue';
import MenuManageCategories from '../view/MenuManageCategories.vue';
import MenuManageMenus from '../view/MenuManageMenus.vue';
import MenuManageOptions from '../view/MenuManageOptions.vue';
import test1 from '../view/test1';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup1',
    component: SignUp1,
  },
  {
    path: '/signup2',
    component: SignUp2,
    name: 'routeParam2',
  },
  {
    path: '/signup3',
    component: SignUp3,
    name: 'routeParam3',
  },
  {
    path: '/signup4',
    component: SignUp4,
    name: 'routeParam4',
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
  {
    path: '/staffmanagement',
    component: StaffManagement,
  },
  {
    path: '/operationmanagement',
    component: OperationManagement,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
