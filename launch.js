const button = document.querySelector('.button') // get element button from html file

fetch("https://api.spacexdata.com/v4/launches/latest")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });


button.addEventListener("click", () => {
    console.log("Hello Elon")
})