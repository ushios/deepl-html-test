require('dotenv').config();
const axios = require('axios');
const fs = require("fs");

const URL = "https://api-free.deepl.com/v2/translate"


fs.readFile("test.html", "utf-8", (err, data) => {
  if (err) throw err;

  const headers = {
    "Authorization": process.env.TOKEN,
  };

  const formData = new FormData();
  formData.append("text", data);
  formData.append("target_lang", "EN");
  formData.append("tag_handling", "html");
  formData.append("ignore_tags", "script,style");
  formData.append("source_lang", "JA");

  const start = Date.now()
  axios.post(URL, formData, { headers }).then((resp) => {
    console.log(resp.data.translations[0].text);
    console.log(`Response time: ${Date.now() - start} ms`);
  })
});
