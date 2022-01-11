import axios from 'axios';
import router from './router';

//라우터 전역변수
let allRoute = router.getRoutes();

export default {
  methods: {
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
        // console.log(myMap.get('/main'))
        // console.log(myIndex)
        // console.log(allRoute)
      }
      asd('/main', 'hi');
      console.log(allRoute);
    },

    async $api(url, data) {
      return (
        await axios({
          method: 'post',
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
    $hi: async () => {
      await console.log('hi');
    },
  },
};
