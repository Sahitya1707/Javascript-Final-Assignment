// my api key, although it's not good idea to share api key but I am doing this only for the assignment
const apiKey = `e0a94e96a35ab53298c6e02bbfce980b`;

// this is end point for the api to get the city name
let cityData;
let searchCity = "barrie";
let cityArray = [];
let cityUrlEndpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${apiKey}`;

// this is end point for the getting the weather data
let latitude;
let longitude;
let weatherData;
const weatherUrlEndpoint = ` https://api.openweathermap.org/data/2.5/weather?lat=44.3893113&lon=-79.6901736&appid=${apiKey}`;

// targeting the html elements
const searchBox = document.querySelector(".searchBox");

// creating a function that will get us the data while fetching the url
const getData = async (endpointUrl) => {
  try {
    const response = await fetch(`${endpointUrl}`);

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  // data = await fetch(`${endpointUrl}`)
  //   .then((response) => {
  //     // console.log(response.json);
  //     console.log(response);
  //     return response.json();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(data);
  // return data;
};

// adding event listener while doing on change

searchBox.addEventListener("keyup", async (e) => {
  // each time the above event listener is triggered the array should be empty
  cityArray = [];
  searchCity = e.target.value;
  // only the api will be fetched if the search length is greater than 0
  if (searchCity.length > 0) {
    // giving search value to search url
    cityUrlEndpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=6&appid=${apiKey}`;

    // i'll get the searched city name over here
    cityData = await getData(cityUrlEndpoint);
    console.log(cityData);
    // filtering the text so that we only get the data that is filtered
    const filterCityData = cityData.filter((item) => {
      return item.name.toLowerCase().startsWith(searchCity.toLowerCase());
    });

    // looping the cityData that I got from searched value
    filterCityData.forEach((e) => {
      // making another array just with cityname and country to display
      cityArray.push(`${e.name}, ${e.country}`);
    });
    console.log(cityArray);
    // console.log(data.json);
  }
  // getData(data)
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
const getWeatherData = async () => {
  const data = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=london&limit=10&appid=${apiKey}`,
    {
      //   method: "GET",
      //   mode: "cors",
      //   header: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(data);
};
// weatherData();

// get the data
// https://api.openweathermap.org/geo/1.0/direct?q=Barrie&limit=5&appid=e0a94e96a35ab53298c6e02bbfce980b

// weather using latitude longitude
// https://api.openweathermap.org/data/2.5/weather?lat=44.3893113&lon=-79.6901736&appid=e0a94e96a35ab53298c6e02bbfce980b

// weather api forcast
// https://api.openweathermap.org/data/2.5/forecast?lat=44.3893113&lon=-79.6901736&appid=e0a94e96a35ab53298c6e02bbfce980b
