require('dotenv').config();
const axios = require('axios');
const fs = require("fs");

const URL = "https://api-free.deepl.com/v2/translate"

fs.readFile("index.html", "utf-8", (err, data) => {
  if (err) throw err;

  const headers = {
    "Authorization": process.env.TOKEN,
  };

  const formData = new FormData();
  formData.append("text", data);
  formData.append("target_lang", "EN");
  formData.append("tag_handling", "html");

  axios.post(URL, formData, { headers }).then((resp) => {
    console.log(resp.data.translations[0].text);
  })
});
