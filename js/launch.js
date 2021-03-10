const loader = document.querySelector('.spinner-grow') // get spinner element in html
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
    document.getElementById("head").innerHTML=data.name;
    document.getElementById("desc").innerHTML=data.details;
    document.getElementById("image").src=data.links.flickr.original[0]
    document.getElementById("watch").href=data.links.webcast
  });
})