function forecast(){
    let userinput=document.querySelector("#input").value
    console.log(userinput)
}

axios.get(`http://api.weatherapi.com/v1/current.json?key=88e72a86a0f24434965174637230701q="${cityName}`)
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(`${response.data.current.temp_c}°C`);
    document.querySelector('#currentTemp').innerHTML = `${response.data.current.temp_c}°C`
    document.querySelector('#humidity').innerHTML = `Humidity : ${response.data.current.humidity}`
    document.querySelector('#windDir').innerHTML = `Wind Direction : ${response.data.current.wind_dir}`
    document.querySelector('#weatherImg').src = `https:${response.data.current.condition.icon}`
    document.querySelector('#condition').innerHTML = `Weather Condition : ${response.data.current.condition.text}`
    // console.log(response.data.current.temp)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });