fetch("https://api.spacexdata.com/v4/rockets")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
