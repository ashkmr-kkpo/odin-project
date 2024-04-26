fetch("https://api.giphy.com/v1/gifs/translate?api_key=<key>=cats")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
