fetch("https://api.spacexdata.com/v4/rockets")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    for (i = 0; i < 4; i++) {
      console.log("Rocket name: " + data[i].name) 
      console.log("Rocket description: " + data[i].description)
      console.log("Cost per launch: " + data[i].cost_per_launch)
      console.log("First Flight: " + data[i].first_flight)
      console.log("Images: " + data[i].flickr_images[0])
      console.log("Engine type: " + data[i].engines.type)
      console.log("Propolent 1: " + data[i].engines.propellant_1)
      console.log("Propolent 2  : " + data[i].engines.propellant_2)
    }
  });