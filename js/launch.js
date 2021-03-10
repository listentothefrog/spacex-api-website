const loader = document.querySelector('.spinner-grow') // get spinner element in html

window.addEventListener('load', () => { // stop loading animation when page is done loading
  loader.style.display = 'none';
})

fetch("https://api.spacexdata.com/v4/launches/latest")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });


