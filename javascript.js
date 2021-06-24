const weather = async (city) => {
  // def elementos DOM
  const cityName = document.querySelector('#cityName');
  const weatherStatusMain = document.querySelector('#weatherStatusMain');
  const temperaturaMain = document.querySelector('#temperaturaMain');
  const tempMaxMinMain = document.querySelector('#tempMaxMinMain');
  const temperaturaMainIcon = document.querySelector('#temperaturaMainIcon');
  //
  const getWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&APPID=e6d7d470999d1a5432119e29077faf4d`, { mode: 'cors' });
  const getData = await getWeather.json();
  const cityLon = getData.coord.lon;
  const cityLat = getData.coord.lat;
  const getMoreWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=metric&lang=es&appid=e6d7d470999d1a5432119e29077faf4d`, { mode: 'cors' });
  const getMoreData = await getMoreWeather.json();
  // funcion para traducir main weather data
  const traducirMain = (data) => {
    if (data === 'Drizzle') {
      return 'Llovizna';
    } if (data === 'Clear') {
      return 'Despejado';
    } if (data === 'Rain') {
      return 'Lluvia';
    } if (data === 'Clouds') {
      return 'Nublado';
    } if (data === 'Mist') {
      return 'Niebla';
    } if (data === 'Thunderstorm') {
      return 'Tormenta';
    } if (data === 'Snow') {
      return 'Nieve';
    }
    // si no fue especificada, devuelve data en ingles
    return data;
  };
  // funcion para devolver link src con data icon
  const weatherImage = (weatherIconData) => `img/${weatherIconData}.png`;
  console.log('///////////////////');
  console.log('///////////////////');
  console.log('///////////////////');
  console.log('datos actuales');
  cityName.textContent = getData.name;
  console.log(getData);
  console.log(getData.weather[0].icon);
  weatherStatusMain.textContent = traducirMain(getData.weather[0].main);
  console.log(traducirMain(getData.weather[0].main));
  temperaturaMainIcon.src = weatherImage(getData.weather[0].icon);
  console.log(getData.weather[0].description);
  console.log('temperatura');
  temperaturaMain.textContent = `${Math.round(getData.main.temp)}°`;
  console.log('sensacion termica');
  console.log(`${Math.round(getData.main.feels_like)}°`);
  console.log('temp maxima');
  tempMaxMinMain.textContent = (`Max: ${Math.round(getData.main.temp_max)}° | Min: ${Math.round(getData.main.temp_min)}°`);
  console.log('temp minima');
  console.log(`${Math.round(getData.main.temp_min)}°`);
  console.log('humedad');
  console.log(`${getData.main.humidity}%`);
  console.log('presion');
  console.log(`${getData.main.pressure} hPa`);
  console.log('visibilidad');
  console.log(`${getData.visibility / 100} km`);
  console.log('amanecer');
  const { sunrise } = getData.sys;
  const sunriseData = new Date(sunrise * 1000);
  // string method para conseguir minutos en dos digitos;
  const sunriseTime = `${sunriseData.getHours()}:${String(sunriseData.getMinutes()).padStart(2, '0')}`;
  console.log(sunriseTime);
  console.log('atardecer');
  const { sunset } = getData.sys;
  const sunsetData = new Date(sunset * 1000);
  // string method para conseguir minutos en dos digitos;
  const sunsetTime = `${sunsetData.getHours()}:${String(sunsetData.getMinutes()).padStart(2, '0')}`;
  console.log(sunsetTime);
  console.log('viento');
  // funcion para pasar data viento a string
  function direccionViento(degree) {
    if (degree > 337.5) return 'Norte';
    if (degree > 292.5) return 'Noroeste';
    if (degree > 247.5) return 'Oeste';
    if (degree > 202.5) return 'Suroeste';
    if (degree > 157.5) return 'Sur';
    if (degree > 122.5) return 'Sureste';
    if (degree > 67.5) return 'Este';
    if (degree > 22.5) return 'Noreste';
    return 'Norte';
  }
  // math round method para tener velocidad sin decimal;
  console.log(`${direccionViento(getData.wind.deg)} ${Math.round(getData.wind.speed)} km/hr`);
  console.log('indice UV');
  console.log(getMoreData.current.uvi);
  console.log('precipitacion');
  // funcion para devolver 0 si no hay data de precipitacion
  const precipitacion = (data) => {
    let precipitacionData = data;
    if (precipitacionData === undefined) {
      precipitacionData = 0;
    }
    return precipitacionData;
  };
  console.log(getMoreData);
  console.log(`${precipitacion(getMoreData.daily[0].rain)} cm`);
  console.log('probabilidad de lluvia');
  console.log(`${Math.round(getMoreData.hourly[0].pop * 100)}%`);
  console.log('///////////////////');
  console.log('///////////////////');
  console.log('///////////////////');
  console.log('informe ampliado 12hrs');
  console.log(`${new Date(getMoreData.hourly[0].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[0].temp)}°`);
  console.log(getMoreData.hourly[0].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[0].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[1].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[1].temp)}°`);
  console.log(getMoreData.hourly[1].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[1].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[2].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[2].temp)}°`);
  console.log(getMoreData.hourly[2].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[2].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[3].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[3].temp)}°`);
  console.log(getMoreData.hourly[3].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[3].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[4].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[4].temp)}°`);
  console.log(getMoreData.hourly[4].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[4].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[5].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[5].temp)}°`);
  console.log(getMoreData.hourly[5].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[5].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[6].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[6].temp)}°`);
  console.log(getMoreData.hourly[6].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[6].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[7].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[7].temp)}°`);
  console.log(getMoreData.hourly[7].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[7].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[8].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[8].temp)}°`);
  console.log(getMoreData.hourly[8].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[8].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[9].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[9].temp)}°`);
  console.log(getMoreData.hourly[9].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[9].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[10].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[10].temp)}°`);
  console.log(getMoreData.hourly[10].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[10].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[11].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[11].temp)}°`);
  console.log(getMoreData.hourly[11].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[11].pop * 100)}%`);
  console.log(`${new Date(getMoreData.hourly[12].dt * 1000).getHours()} hrs`);
  console.log(`${Math.round(getMoreData.hourly[12].temp)}°`);
  console.log(getMoreData.hourly[12].weather[0].main);
  console.log(`probabilidad de lluvia:${Math.round(getMoreData.hourly[12].pop * 100)}%`);
  console.log('///////////////////');
  console.log('///////////////////');
  console.log('///////////////////');
  console.log('informe semanal');
  console.log((new Date(getMoreData.daily[1].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[1].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[1].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[1].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[1].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[1].temp.min)}°`);
  console.log((new Date(getMoreData.daily[2].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[2].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[2].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[2].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[2].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[2].temp.min)}°`);
  console.log((new Date(getMoreData.daily[3].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[3].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[3].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[3].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[3].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[3].temp.min)}°`);
  console.log((new Date(getMoreData.daily[4].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[4].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[4].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[4].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[4].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[4].temp.min)}°`);
  console.log((new Date(getMoreData.daily[5].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[5].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[3].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[5].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[5].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[5].temp.min)}°`);
  console.log((new Date(getMoreData.daily[6].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[6].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[6].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[6].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[6].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[6].temp.min)}°`);
  console.log((new Date(getMoreData.daily[7].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
  console.log(getMoreData.daily[7].weather[0].main);
  console.log(`probabilidad de lluvia: ${Math.round(getMoreData.daily[7].pop * 100)}%`);
  console.log(`Humedad: ${getMoreData.daily[7].humidity}%`);
  console.log(`Temperatura Max ${Math.round(getMoreData.daily[7].temp.max)}°`);
  console.log(`Temperatura Min ${Math.round(getMoreData.daily[7].temp.min)}°`);
};
const buscar = document.querySelector('#buscar');
const city = document.querySelector('#city');
buscar.addEventListener('click', () => {
  const cityToSearch = city.value;
  const cityValue = cityToSearch.replace(' ', '+');
  weather(cityValue);
});
weather('buenos+aires');
