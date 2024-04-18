// my api key, although it's not good idea to share api key but I am doing this only for the assignment
const apiKey = `e0a94e96a35ab53298c6e02bbfce980b`;
let city;

// this is end point for the api to get the city name
const cityUrlEndpoint = `https://api.openweathermap.org/geo/1.0/direct?q=Barrie&limit=5&appid=${apiKey}`;

let latitude;
let longitude;
// this is end point for the getting the weather data
const weatherUrlEndpoint = ` https://api.openweathermap.org/data/2.5/weather?lat=44.3893113&lon=-79.6901736&appid=${apiKey}`;

const weatherData = async () => {
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
