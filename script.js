var weathercontainer=document.getElementById('weathercontainer')


async function getweatherdata(){
    var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=149d458bff2806289e88f0e818b96542`)
    let res=await data.json()
    console.log(res)


weathercontainer.innerHTML=`
    <div class="row g-0">
              <div class="col-md-4">
                <img src="https://kashmirpatriot.com/wp-content/uploads/2021/03/weather-forecast-fb-1.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Weather update ${cityName}</h5>
                  
                  <p class="card-text m-0"><small class="text-muted">Humidity :${res.main.humidity}</small></p>
                  <p class="card-text m-0"><small class="text-muted">Wind Speed:${res.wind.speed}</small></p>
                  <p class="card-text m-0"><small class="text-muted">Description :${res.weather[0].description}</small></p>
                  <p class="card-text m-0"><small class="text-muted">Temperature: ${res.main.temp}</small></p>
                </div>
              </div>
            </div>
    
    
    `


}
// getweatherdata()