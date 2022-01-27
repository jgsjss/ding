import axios from 'axios';
import router from './router';

//라우터 전역변수
// let allRoute = router.getRoutes();

export default {
  methods: {
    $nullCheckSignUp2(check){
      let nullCheckSignUp2 = false;
      if (this.$store.state.signupStore.state() != null){
        nullCheckSignUp2 = true;
        return check = nullCheckSignUp2
      }
    },
    $test() {
      function asd(targetPath, nameChange) {
        let myMap = new Map();
        let myIndex = [];
        const result = allRoute.map((each, index) => {
          if (each.path == '/main') {
            myMap.set(targetPath, each);
            myIndex.push(index);
            allRoute[index].name = nameChange;
          }
        });
      }

      asd('/main', 'hi');
      console.log(allRoute);
    },


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
