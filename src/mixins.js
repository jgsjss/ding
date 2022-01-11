import axios from 'axios';
import router from './router';

export default {
  methods: {
    $sendRouteParam() {
      console.log(router.route.toString());

      // router.push({
      //   name: name,
      //   params: data,
      // });
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
