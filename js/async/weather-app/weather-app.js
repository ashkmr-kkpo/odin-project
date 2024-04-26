function search() {
  const search = document.querySelector("input");
  const res = document.querySelector("p");
  let query = "http://api.weatherapi.com/v1/current.json?key=<key>>&q";
  query = query + search.value;
  fetch(query, { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      res.textContent = data;
    });
}
