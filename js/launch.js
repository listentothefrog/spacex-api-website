const loader = document.querySelector('.spinner-grow') // get spinner element in html
const header = document.getElementById("head")
const description = document.getElementById("desc")
const image = document.getElementById("image")
const watchUrl = document.getElementById("watch")
window.addEventListener('load', () => { // stop loading animation when page is done loading
  loader.style.display = 'none';
  fetch("https://api.spacexdata.com/v4/launches/latest")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    console.log(data.links.flickr.original[0])
    console.log(data.details)
    console.log(data.name)
    console.log(data.links.webcast)
    header.innerHTML=data.name;
    description.innerHTML=data.details;
    watchUrl.href=data.links.webcast
    image.src=data.links.flickr.original[0]
  });
})