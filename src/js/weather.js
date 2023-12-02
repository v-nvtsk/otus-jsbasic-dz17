const API_KEY = 'ab4639f5754271e773ed6d3ffd73f327';

export default async function getWeatherInCity(cityName, lang = 'ru') {
  const units = 'metric';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}&lang=${lang}`
  );
  const data = await response.json();
  let city;
  let temp;
  let icon;
  if (data.cod === 200) {
    city = data.name;
    temp = data.main.temp;
    icon = data.weather[0].icon;
  } else {
    return null;
  }
  return { city, temp, icon };
}
