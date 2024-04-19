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
let weatherUrlEndpoint = ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

// targeting the html elements
const searchBox = document.querySelector(".searchBox");
const searchResults = document.querySelector(".searched-city");
const searchBtn = document.querySelector(".search-btn");
// setting the searchresult children to empty
searchResults.innerHTML = ``;
let individualSearchResult;

// creating a function that will get us the data while fetching the url
const getData = async (endpointUrl) => {
  try {
    const response = await fetch(`${endpointUrl}`);

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// adding event listener while doing on change

searchBox.addEventListener("keyup", async (e) => {
  // each time the above event listener is triggered the array should be empty
  cityArray = [];
  searchResults.innerHTML = "";
  searchCity = e.target.value;
  // only the api will be fetched if the search length is greater than 0
  if (searchCity.length > 0) {
    // giving search value to search url
    cityUrlEndpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=6&appid=${apiKey}`;

    // i'll get the searched city name over here
    cityData = await getData(cityUrlEndpoint);

    // filtering the text so that we only get the data that is filtered
    const filterCityData = cityData.filter((item) => {
      return item.name.toLowerCase().startsWith(searchCity.toLowerCase());
    });

    // looping the cityData that I got from searched value
    cityArray = filterCityData;

    cityArray.forEach((city) => {
      searchResults.innerHTML += `<p>${city.name}, ${city.country}</p>`;
    });
    // console.log(data.json);
    // selecting the searched data so that when we click the data
    individualSearchResult = Array.from(
      document.querySelectorAll(".searched-city p")
    );
    if (individualSearchResult.length > 0) {
      individualSearchResult.forEach((item) => {
        let clickedData;
        // this return the data of what you have clicke on the search result
        item.addEventListener("click", (e) => {
          clickedData = cityArray.filter((cityItem) => {
            return (
              `${cityItem.name.toLowerCase()}, ${cityItem.country.toLowerCase()}` ===
              item.innerHTML.toLowerCase()
            );
          });
          console.log(clickedData);
          longitude = clickedData[0].lon;
          latitude = clickedData[0].lat;
          console.log(clickedData[0].lat);
          searchCity = clickedData[0].name;
          searchBox.value = e.target.innerText;

          searchResults.innerHTML = "";
        });
      });
    }
  }

  // getData(data)
});

// when we click the search events
searchBtn.addEventListener("click", async (e) => {
  console.log(e);
  console.log(searchBox.innerHTML);
  if (searchBox.innerHTML !== " ") {
    weatherUrlEndpoint = ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    weatherData = await getData(weatherUrlEndpoint);
    console.log(weatherData);
    console.log(weatherUrlEndpoint);
  }
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
      mode: "cors",
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
