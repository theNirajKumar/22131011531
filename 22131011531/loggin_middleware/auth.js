 const axios = require("axios");

const payload = {
  email: "niraj.22scse1011423@galgotiasuniversity.edu.in",
  name: "Niraj Kumar",
  rollNo: "22131011531",
  accessCode: "Muagvq",
  clientID: "e87db053-2105-4f1f-887d-cf9c8cc29f33",
  clientSecret: "uHtmpWYeqJTvpQjj"
};

const getToken = async () => {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/auth",
      payload
    );

    console.log("✅ Your Bearer Token is:\n", response.data.access_token);
  } catch (err) {
    console.error("❌ Error fetching token:", err.response?.data || err.message);
  }
};

getToken();