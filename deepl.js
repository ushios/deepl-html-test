function translate(text) {
  return $.ajax({
    url: "https://api-free.deepl.com/v2/translate",
    type: "POST",
    headers: {
      Authorization: "",
    },
    dataType: "json",
    data: {
      text,
      target_lang: "EN",
      tag_handling: "html",
    },
  });
}

$(function () {
  console.log("on load");
  console.log($("#translate"));
  $("#translate").on("click", function () {
    console.log("start to translate");
    const body = $("body").html();
    console.log(body);
    translate(body).then((data) => {
      console.log(data);
      $("body").html(data.translations[0].text);
    });
  });
});
