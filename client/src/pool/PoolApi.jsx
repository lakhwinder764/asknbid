import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 3000,
});

async function getPools() {
  let response = await api
    .get("pools/")
    .then((response) => response)
    .catch((error) => error.response);
   return response.data;
}

async function getStocks() {
  let response = await api
  .get("stocks/")
  .then((response) => response)
  .catch((error) => error.response);
 return response.data;
}

async function joinPool(payload) {
  console.log(payload)
   const {user,pool,stocks}=payload
  let response = await api
    .post("entries/",{
      "id":user,
      "user":"JBelfort",
      "pool":pool,
      "stocks":stocks
    }) // Task 1: Step 4 out of 4: Pass the endpoint "entries/" and payload to the post request. This is the last step of Task 1.
    .then((response) => response)
    .catch((error) => error.response);
  return response;
}

export { getPools, getStocks, joinPool };
