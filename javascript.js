const weather = async (city) => {
  const getWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e6d7d470999d1a5432119e29077faf4d`, { mode: 'cors' });
  const getData = await getWeather.json();
  console.log(getData);
  console.log(getData.main.temp);
  console.log(getData.weather[0].main);
  console.log(getData.weather[0].description);
};
weather('buenos+aires');
