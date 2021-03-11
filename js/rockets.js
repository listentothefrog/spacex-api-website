var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const rocketImage = document.getElementById("cardImg")
fetch("https://api.spacexdata.com/v4/rockets")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    
    for (i = 0; i < 4; i++) {
      const head = document.createElement("div", )
      content=`
      <div id="card" class="card" style="width: 18rem;">
        <img id="cardImg" src="${data[0].flickr_images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[0].name}</h5>
          <p class="card-text">${data[0].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cost per launch:  ${formatter.format(data[0].cost_per_launch)}</li>
          <li class="list-group-item">First Flight: ${data[0].first_flight}</li>
          <li class="list-group-item">Engine type: ${data[0].engines.type}</li>
          <li class="list-group-item">Propolent 1: ${data[0].engines.propellant_1}</li>
          <li class="list-group-item">Propolent 2: ${data[0].engines.propellant_2}</li>
        </ul>
        <div class="card-body">
          <a target="_blank" href=${data[0].wikipedia} class="card-link">About ${data[0].name}</a>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem;">
        <img id="cardImg" src="${data[1].flickr_images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[1].name}</h5>
          <p class="card-text">${data[1].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cost per launch:  ${formatter.format(data[1].cost_per_launch)}</li>
          <li class="list-group-item">First Flight: ${data[1].first_flight}</li>
          <li class="list-group-item">Engine type: ${data[1].engines.type}</li>
          <li class="list-group-item">Propolent 1: ${data[1].engines.propellant_1}</li>
          <li class="list-group-item">Propolent 2: ${data[1].engines.propellant_2}</li>
        </ul>
        <div class="card-body">
          <a target="_blank" href=${data[1].wikipedia} class="card-link">About ${data[1].name}</a>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem;">
        <img id="cardImg" src="${data[2].flickr_images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[2].name}</h5>
          <p class="card-text">${data[2].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cost per launch:  ${formatter.format(data[2].cost_per_launch)}</li>
          <li class="list-group-item">First Flight: ${data[2].first_flight}</li>
          <li class="list-group-item">Engine type: ${data[2].engines.type}</li>
          <li class="list-group-item">Propolent 1: ${data[2].engines.propellant_1}</li>
          <li class="list-group-item">Propolent 2: ${data[2].engines.propellant_2}</li>
        </ul>
        <div class="card-body">
          <a target="_blank" href=${data[2].wikipedia} class="card-link">About ${data[2].name}</a>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem;">
        <img id="cardImg" src="${data[3].flickr_images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[3].name}</h5>
          <p class="card-text">${data[3].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cost per launch:  ${formatter.format(data[3 ].cost_per_launch)}</li>
          <li class="list-group-item">First Flight: ${data[3].first_flight}</li>
          <li class="list-group-item">Engine type: ${data[3].engines.type}</li>
          <li class="list-group-item">Propolent 1: ${data[3].engines.propellant_1}</li>
          <li class="list-group-item">Propolent 2: ${data[3].engines.propellant_2}</li>
        </ul>
        <div class="card-body">
          <a target="_blank" href=${data[3].wikipedia} class="card-link">About ${data[3].name}</a>
        </div>
      </div>
    `
      document.getElementById("card-group").innerHTML=content;
    }
  
  });