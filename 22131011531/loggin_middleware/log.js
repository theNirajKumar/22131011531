const axios = require("axios");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaXJhai4yMnNjc2UxMDExNDIzQGdhbGdvdGlhc3VuaXZlcnNpdHkuZWR1LmluIiwiZXhwIjoxNzUxMDE1ODM3LCJpYXQiOjE3NTEwMTQ5MzcsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1NGJkOTM5ZC01MTZlLTRlNTEtOWM3Zi1lNmFkNGFkN2EyZGEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJuaXJhaiBrdW1hciIsInN1YiI6ImU4N2RiMDUzLTIxMDUtNGYxZi04ODdkLWNmOWM4Y2MyOWYzMyJ9LCJlbWFpbCI6Im5pcmFqLjIyc2NzZTEwMTE0MjNAZ2FsZ290aWFzdW5pdmVyc2l0eS5lZHUuaW4iLCJuYW1lIjoibmlyYWoga3VtYXIiLCJyb2xsTm8iOiIyMjEzMTAxMTUzMSIsImFjY2Vzc0NvZGUiOiJNdWFndnEiLCJjbGllbnRJRCI6ImU4N2RiMDUzLTIxMDUtNGYxZi04ODdkLWNmOWM4Y2MyOWYzMyIsImNsaWVudFNlY3JldCI6InVIdG1wV1llcUpUdnBRamoifQ._O9YHNdbZvagaTUDpSRalSfTkVia4XU-j09vIDbOXlQ";

const Log = async (stack, level, logPackage, message) => {
  const logEndpoint = "http://20.244.56.144/evaluation-service/logs";

  try {
    const response = await axios.post(
      logEndpoint,
      {
        stack,
        level,
        package: logPackage,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );

    console.log("✅ Log created:", response.data.logID);
  } catch (error) {
    console.error("❌ Failed to log:", error.message);
  }
};

module.exports = Log;
