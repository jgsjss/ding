import axios from 'axios';
import router from './router';


//라우터 전역변수
// let allRoute = router.getRoutes();

export default {

  methods: {

    // $nullCheckSignUp2(check){
    //   let nullCheckSignUp2 = false;
    //   if ( this.$store.state.signupStore.userId == null &&
    //     this.$store.state.signupStore.userPw == null &&
    //     this.$store.state.signupStore.userName == null &&
    //     this.$store.state.signupStore.phNum == null &&
    //     this.$store.state.signupStore.shopName == null &&
    //     this.$store.state.signupStore.shopPhNum == null &&
    //     this.$store.state.signupStore.bizAddr1 == null &&
    //     this.$store.state.signupStore.bizAddr2 == null &&
    //     this.$store.state.signupStore.bizZip == null ) {
    //     nullCheckSignUp2 = true;
    //     return nullCheckSignUp2
    //   }
    // },
    // $test() {
    //   function asd(targetPath, nameChange) {
    //     let myMap = new Map();
    //     let myIndex = [];
    //     const result = allRoute.map((each, index) => {
    //       if (each.path == '/main') {
    //         myMap.set(targetPath, each);
    //         myIndex.push(index);
    //         allRoute[index].name = nameChange;
    //       }
    //     });
    //   }
    //
    //   asd('/main', 'hi');
    //   console.log(allRoute);
    // },


    async $api(url, data) {
      return (
        await axios({
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
    // async $apiGET(url, data) {
    //   return (
    //     await axios({
    //       methods: 'get',
    //       url,
    //       data,
    //     }).catch((e) => {
    //       console.log(e);
    //     })
    //   ).data;
    // },
    $hi: async () => {
      await console.log('hi');
    },
  },
};
