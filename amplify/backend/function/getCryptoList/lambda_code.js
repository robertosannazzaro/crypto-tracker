/* Amplify Params - DO NOT EDIT
	
Amplify Params - DO NOT EDIT */
const axios = require("axios");

exports.handler = async (event) => {
  // TODO implement
  var config = {
    method: "get",
    url:
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20",
    headers: {
      "X-CMC_PRO_API_KEY": "6b2793d5-b79a-4278-845c-eeb9d4dc7cdb",
    },
  };

  let res = axios(config)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
};
