const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/gfg/:username", async (req, res) => {
  const username = req.params.username;
  const apiUrl = "https://geeks-for-geeks-api.vercel.app/${username}";

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


app.listen(8080, () => console.log("Server running on port 8080"));