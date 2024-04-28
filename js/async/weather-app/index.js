function search() {
  const search = document.querySelector("input");
  const res = document.getElementById("loc-val");
  const tempc = document.getElementById("temp-c-val");
  const tempcfeels = document.getElementById("temp-c-feels-val");
  const humid = document.getElementById("humid-val");
  const cloud = document.getElementById("cloud-val");
  const rain = document.getElementById("rain-val");

  let API_KEY = "";
  let query = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
  query = query + search.value;
  fetch(query, { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.innerText = data["location"]["name"];
      tempc.innerText = data["current"]["temp_c"];
      tempcfeels.innerText = data["current"]["feelslike_c"];
      humid.innerText = data["current"]["humidity"];
      cloud.innerText = data["current"]["cloud"];
      rain.innerText = data["current"]["precip_in"];
    });
}
