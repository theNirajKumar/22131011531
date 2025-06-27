 const axios = require("axios");

const payload = {
  email: "niraj.22scse1011423@galgotiasuniversity.edu.in",
  name: "Niraj Kumar",
  mobileNo: "9798708244",
  githubUsername: "theNirajKumar",
  rollNo: "22131011531",
  accessCode: "Muagvq"
};
const register = async () => {
  try {
    const res = await axios.post("http://20.244.56.144/evaluation-service/register", payload);
    console.log("✅ Registration Successful");
    console.log("clientID:", res.data.clientID);
    console.log("clientSecret:", res.data.clientSecret);
  } catch (err) {
    console.error("❌ Registration Failed:", err.response?.data || err.message);
  }
};

register();