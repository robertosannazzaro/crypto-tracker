/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ // amplify/backend/function/currencyfunction/src/index.js
const axios = require("axios");

exports.handler = function (event, _, callback) {
  const { cryptocurrency = "BTC", limit = "100" } = event.arguments;

  // console.log("cryptocurrency", cryptocurrency);
  // console.log("limit", limit);

  // console.log("EVENT.ARGUMENTS", event.arguments);

  const apiUrl = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${cryptocurrency}&tsym=USD&limit=${limit}`;

  axios
    .get(apiUrl)
    .then((response) => callback(null, response.data.Data.Data)) //.then((response) => console.log(response.data.Data))
    .catch((err) => callback(err));
};
