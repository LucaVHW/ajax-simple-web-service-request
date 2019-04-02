$("#click").click(function() {

  xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://thatsthespir.it/api', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(this.responseText);
      let image = response.photo;
      let quote = response.quote;
      let author = response.author;

      document.getElementById("quote").innerHTML = quote;
      document.getElementById("author").innerHTML = author;
      document.getElementById("photo").src = image;
    };
  };
  xhr.send();

});
