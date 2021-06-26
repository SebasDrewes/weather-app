const weather = async (city) => {
  try {
    // def elementos DOM MAIN
    const cityName = document.querySelector('#cityName');
    const weatherStatusMain = document.querySelector('#weatherStatusMain');
    const temperaturaMain = document.querySelector('#temperaturaMain');
    const tempMaxMinMain = document.querySelector('#tempMaxMinMain');
    const temperaturaMainIcon = document.querySelector('#temperaturaMainIcon');
    const mainDesc = document.querySelector('#mainDesc');
    const error = document.querySelector('#error');
    const footer = document.querySelector('#footer');
    // def elementos DOM 24hrs
    const hour0Time = document.querySelector('#hour0Time');
    const hour0pop = document.querySelector('#hour0pop');
    const hour0Weather = document.querySelector('#hour0Weather');
    const hour0Temp = document.querySelector('#hour0Temp');

    const hour1Time = document.querySelector('#hour1Time');
    const hour1pop = document.querySelector('#hour1pop');
    const hour1Weather = document.querySelector('#hour1Weather');
    const hour1Temp = document.querySelector('#hour1Temp');

    const hour2Time = document.querySelector('#hour2Time');
    const hour2pop = document.querySelector('#hour2pop');
    const hour2Weather = document.querySelector('#hour2Weather');
    const hour2Temp = document.querySelector('#hour2Temp');

    const hour3Time = document.querySelector('#hour3Time');
    const hour3pop = document.querySelector('#hour3pop');
    const hour3Weather = document.querySelector('#hour3Weather');
    const hour3Temp = document.querySelector('#hour3Temp');

    const hour4Time = document.querySelector('#hour4Time');
    const hour4pop = document.querySelector('#hour4pop');
    const hour4Weather = document.querySelector('#hour4Weather');
    const hour4Temp = document.querySelector('#hour4Temp');

    const hour5Time = document.querySelector('#hour5Time');
    const hour5pop = document.querySelector('#hour5pop');
    const hour5Weather = document.querySelector('#hour5Weather');
    const hour5Temp = document.querySelector('#hour5Temp');

    const hour6Time = document.querySelector('#hour6Time');
    const hour6pop = document.querySelector('#hour6pop');
    const hour6Weather = document.querySelector('#hour6Weather');
    const hour6Temp = document.querySelector('#hour6Temp');

    const hour7Time = document.querySelector('#hour7Time');
    const hour7pop = document.querySelector('#hour7pop');
    const hour7Weather = document.querySelector('#hour7Weather');
    const hour7Temp = document.querySelector('#hour7Temp');

    const hour8Time = document.querySelector('#hour8Time');
    const hour8pop = document.querySelector('#hour8pop');
    const hour8Weather = document.querySelector('#hour8Weather');
    const hour8Temp = document.querySelector('#hour8Temp');

    const hour9Time = document.querySelector('#hour9Time');
    const hour9pop = document.querySelector('#hour9pop');
    const hour9Weather = document.querySelector('#hour9Weather');
    const hour9Temp = document.querySelector('#hour9Temp');

    const hour10Time = document.querySelector('#hour10Time');
    const hour10pop = document.querySelector('#hour10pop');
    const hour10Weather = document.querySelector('#hour10Weather');
    const hour10Temp = document.querySelector('#hour10Temp');

    const hour11Time = document.querySelector('#hour11Time');
    const hour11pop = document.querySelector('#hour11pop');
    const hour11Weather = document.querySelector('#hour11Weather');
    const hour11Temp = document.querySelector('#hour11Temp');

    const hour12Time = document.querySelector('#hour12Time');
    const hour12pop = document.querySelector('#hour12pop');
    const hour12Weather = document.querySelector('#hour12Weather');
    const hour12Temp = document.querySelector('#hour12Temp');

    const hour13Time = document.querySelector('#hour13Time');
    const hour13pop = document.querySelector('#hour13pop');
    const hour13Weather = document.querySelector('#hour13Weather');
    const hour13Temp = document.querySelector('#hour13Temp');

    const hour14Time = document.querySelector('#hour14Time');
    const hour14pop = document.querySelector('#hour14pop');
    const hour14Weather = document.querySelector('#hour14Weather');
    const hour14Temp = document.querySelector('#hour14Temp');

    const hour15Time = document.querySelector('#hour15Time');
    const hour15pop = document.querySelector('#hour15pop');
    const hour15Weather = document.querySelector('#hour15Weather');
    const hour15Temp = document.querySelector('#hour15Temp');

    const hour16Time = document.querySelector('#hour16Time');
    const hour16pop = document.querySelector('#hour16pop');
    const hour16Weather = document.querySelector('#hour16Weather');
    const hour16Temp = document.querySelector('#hour16Temp');

    const hour17Time = document.querySelector('#hour17Time');
    const hour17pop = document.querySelector('#hour17pop');
    const hour17Weather = document.querySelector('#hour17Weather');
    const hour17Temp = document.querySelector('#hour17Temp');

    const hour18Time = document.querySelector('#hour18Time');
    const hour18pop = document.querySelector('#hour18pop');
    const hour18Weather = document.querySelector('#hour18Weather');
    const hour18Temp = document.querySelector('#hour18Temp');

    const hour19Time = document.querySelector('#hour19Time');
    const hour19pop = document.querySelector('#hour19pop');
    const hour19Weather = document.querySelector('#hour19Weather');
    const hour19Temp = document.querySelector('#hour19Temp');

    const hour20Time = document.querySelector('#hour20Time');
    const hour20pop = document.querySelector('#hour20pop');
    const hour20Weather = document.querySelector('#hour20Weather');
    const hour20Temp = document.querySelector('#hour20Temp');

    const hour21Time = document.querySelector('#hour21Time');
    const hour21pop = document.querySelector('#hour21pop');
    const hour21Weather = document.querySelector('#hour21Weather');
    const hour21Temp = document.querySelector('#hour21Temp');

    const hour22Time = document.querySelector('#hour22Time');
    const hour22pop = document.querySelector('#hour22pop');
    const hour22Weather = document.querySelector('#hour22Weather');
    const hour22Temp = document.querySelector('#hour22Temp');

    const hour23Time = document.querySelector('#hour23Time');
    const hour23pop = document.querySelector('#hour23pop');
    const hour23Weather = document.querySelector('#hour23Weather');
    const hour23Temp = document.querySelector('#hour23Temp');

    const hour24Time = document.querySelector('#hour24Time');
    const hour24pop = document.querySelector('#hour24pop');
    const hour24Weather = document.querySelector('#hour24Weather');
    const hour24Temp = document.querySelector('#hour24Temp');
    // def elementos DOM allDayInfo
    const allDayInfo = document.querySelector('#allDayInfo');
    const dayInfoAmanecerData = document.querySelector('#dayInfoAmanecerData');
    const dayInfoAtardecerData = document.querySelector('#dayInfoAtardecerData');
    const dayInfoPopData = document.querySelector('#dayInfoPopData');
    const dayInfoHumedadData = document.querySelector('#dayInfoHumedadData');
    const dayInfoVientoData = document.querySelector('#dayInfoVientoData');
    const dayInfoStData = document.querySelector('#dayInfoStData');
    const dayInfoPrecipData = document.querySelector('#dayInfoPrecipData');
    const dayInfoPresionData = document.querySelector('#dayInfoPresionData');
    const dayInfoVisibilidadData = document.querySelector('#dayInfoVisibilidadData');
    const dayInfoIndUvData = document.querySelector('#dayInfoIndUvData');
    // def elementos DOM allWeekInfo
    const allWeekInfo = document.querySelector('#allWeekInfo');
    const weekDay0Name = document.querySelector('#weekDay0Name');
    const weekDay0Icon = document.querySelector('#weekDay0Icon');
    const weekDay0Pop = document.querySelector('#weekDay0Pop');
    const weekDay0Hum = document.querySelector('#weekDay0Hum');
    const weekDay0Temp = document.querySelector('#weekDay0Temp');

    const weekDay1Name = document.querySelector('#weekDay1Name');
    const weekDay1Icon = document.querySelector('#weekDay1Icon');
    const weekDay1Pop = document.querySelector('#weekDay1Pop');
    const weekDay1Hum = document.querySelector('#weekDay1Hum');
    const weekDay1Temp = document.querySelector('#weekDay1Temp');

    const weekDay2Name = document.querySelector('#weekDay2Name');
    const weekDay2Icon = document.querySelector('#weekDay2Icon');
    const weekDay2Pop = document.querySelector('#weekDay2Pop');
    const weekDay2Hum = document.querySelector('#weekDay2Hum');
    const weekDay2Temp = document.querySelector('#weekDay2Temp');

    const weekDay3Name = document.querySelector('#weekDay3Name');
    const weekDay3Icon = document.querySelector('#weekDay3Icon');
    const weekDay3Pop = document.querySelector('#weekDay3Pop');
    const weekDay3Hum = document.querySelector('#weekDay3Hum');
    const weekDay3Temp = document.querySelector('#weekDay3Temp');

    const weekDay4Name = document.querySelector('#weekDay4Name');
    const weekDay4Icon = document.querySelector('#weekDay4Icon');
    const weekDay4Pop = document.querySelector('#weekDay4Pop');
    const weekDay4Hum = document.querySelector('#weekDay4Hum');
    const weekDay4Temp = document.querySelector('#weekDay4Temp');

    const weekDay5Name = document.querySelector('#weekDay5Name');
    const weekDay5Icon = document.querySelector('#weekDay5Icon');
    const weekDay5Pop = document.querySelector('#weekDay5Pop');
    const weekDay5Hum = document.querySelector('#weekDay5Hum');
    const weekDay5Temp = document.querySelector('#weekDay5Temp');

    const weekDay6Name = document.querySelector('#weekDay6Name');
    const weekDay6Icon = document.querySelector('#weekDay6Icon');
    const weekDay6Pop = document.querySelector('#weekDay6Pop');
    const weekDay6Hum = document.querySelector('#weekDay6Hum');
    const weekDay6Temp = document.querySelector('#weekDay6Temp');
    // ejecucion de solicitud de datos
    const getWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&APPID=e6d7d470999d1a5432119e29077faf4d`, { mode: 'cors' });
    const getData = await getWeather.json();
    // datos necesarios para segundo fetch
    const cityLon = getData.coord.lon;
    const cityLat = getData.coord.lat;
    const getMoreWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=metric&lang=es&appid=e6d7d470999d1a5432119e29077faf4d`, { mode: 'cors' });
    const getMoreData = await getMoreWeather.json();
    // si todo ok, se borra error
    error.style.visibility = 'hidden';

    // funcion para devolver 0 si no hay data de precipitacion
    const precipitacion = (data) => {
      let precipitacionData = data;
      if (precipitacionData === undefined) {
        precipitacionData = 0;
      }
      return precipitacionData;
    };
    // funcion para traducir main weather data
    const traducirMain = (data) => {
      switch (data) {
        case 'Drizzle':
          return 'Llovizna';
        case 'Clear':
          return 'Despejado';
        case 'Rain':
          return 'Lluvia';
        case 'Clouds':
          return 'Nublado';
        case 'Mist':
          return 'Niebla';
        case 'Thunderstorm':
          return 'Tormenta';
        case 'Snow':
          return 'Nieve';
        default:
          return data;
      }
    };
    // funcion para traducir dias
    const traducirDia = (date) => {
      switch (date) {
        case 'Monday':
          return 'Lunes';
        case 'Tuesday':
          return 'Martes';
        case 'Wednesday':
          return 'asd';
        case 'Thursday':
          return 'Jueves';
        case 'Friday':
          return 'Viernes';
        case 'Saturday':
          return 'Sabado';
        case 'Sunday':
          return 'Domingo';
        default:
          return date;
      }
    };
    // funcion para pasar data viento a string
    const direccionViento = (degree) => {
      if (degree > 337.5) return 'N';
      if (degree > 292.5) return 'NO';
      if (degree > 247.5) return 'O';
      if (degree > 202.5) return 'SO';
      if (degree > 157.5) return 'S';
      if (degree > 122.5) return 'SE';
      if (degree > 67.5) return 'E';
      if (degree > 22.5) return 'N';
      return 'N';
    };
    // funcion para devolver link src con data icon
    const weatherImage = (weatherIconData) => `img/${weatherIconData}.png`;

    // una vez cargados los datos, muestra la grid allDayInfo
    allDayInfo.style.display = 'grid';

    // una vez cargados datos, muestra footer
    footer.style.display = 'flex';

    // datos main
    cityName.textContent = getData.name;
    weatherStatusMain.textContent = traducirMain(getData.weather[0].main);
    temperaturaMainIcon.src = weatherImage(getData.weather[0].icon);
    mainDesc.textContent = `Hoy: ${getData.weather[0].description}. La máxima será de ${Math.round(getMoreData.daily[0].temp.max)}°. La mínima esta noche será de ${Math.round(getMoreData.daily[0].temp.night)}°`;
    temperaturaMain.textContent = `${Math.round(getData.main.temp)}°`;
    dayInfoStData.textContent = `${Math.round(getData.main.feels_like)}°`;
    tempMaxMinMain.textContent = `Max: ${Math.round(getMoreData.daily[0].temp.max)}° | Min: ${Math.round(getMoreData.daily[0].temp.min)}°`;
    dayInfoHumedadData.textContent = `${getData.main.humidity}%`;
    dayInfoPresionData.textContent = `${getData.main.pressure} hPa`;
    dayInfoVisibilidadData.textContent = `${getData.visibility / 100} km`;

    const { sunrise } = getData.sys;
    const sunriseData = new Date(sunrise * 1000);
    // string method para conseguir minutos en dos digitos;
    const sunriseTime = `${sunriseData.getHours()}:${String(sunriseData.getMinutes()).padStart(2, '0')}`;

    dayInfoAmanecerData.textContent = sunriseTime;

    const { sunset } = getData.sys;
    const sunsetData = new Date(sunset * 1000);
    // string method para conseguir minutos en dos digitos;
    const sunsetTime = `${sunsetData.getHours()}:${String(sunsetData.getMinutes()).padStart(2, '0')}`;

    dayInfoAtardecerData.textContent = sunsetTime;

    // math round method para tener velocidad sin decimal;
    dayInfoVientoData.textContent = `${direccionViento(getData.wind.deg)} ${Math.round(getData.wind.speed)} km/h`;

    dayInfoIndUvData.textContent = getMoreData.current.uvi;

    dayInfoPrecipData.textContent = `${precipitacion(getMoreData.daily[0].rain)} cm`;

    dayInfoPopData.textContent = `${Math.round(getMoreData.hourly[0].pop * 100)}%`;

    hour0Time.textContent = 'Ahora';
    hour0Time.style.cssText = 'font-weight : bold';
    hour0pop.textContent = `${Math.round(getMoreData.hourly[0].pop * 100)}%`;
    hour0Weather.src = weatherImage(getMoreData.hourly[0].weather[0].icon);
    hour0Temp.textContent = `${Math.round(getMoreData.hourly[0].temp)}°`;

    hour1Time.textContent = `${new Date(getMoreData.hourly[1].dt * 1000).getHours()} hrs`;
    hour1pop.textContent = `${Math.round(getMoreData.hourly[1].pop * 100)}%`;
    hour1Weather.src = weatherImage(getMoreData.hourly[1].weather[0].icon);
    hour1Temp.textContent = `${Math.round(getMoreData.hourly[1].temp)}°`;

    hour2Time.textContent = `${new Date(getMoreData.hourly[2].dt * 1000).getHours()} hrs`;
    hour2pop.textContent = `${Math.round(getMoreData.hourly[2].pop * 100)}%`;
    hour2Weather.src = weatherImage(getMoreData.hourly[2].weather[0].icon);
    hour2Temp.textContent = `${Math.round(getMoreData.hourly[2].temp)}°`;

    hour3Time.textContent = `${new Date(getMoreData.hourly[3].dt * 1000).getHours()} hrs`;
    hour3pop.textContent = `${Math.round(getMoreData.hourly[3].pop * 100)}%`;
    hour3Weather.src = weatherImage(getMoreData.hourly[3].weather[0].icon);
    hour3Temp.textContent = `${Math.round(getMoreData.hourly[3].temp)}°`;

    hour4Time.textContent = `${new Date(getMoreData.hourly[4].dt * 1000).getHours()} hrs`;
    hour4pop.textContent = `${Math.round(getMoreData.hourly[4].pop * 100)}%`;
    hour4Weather.src = weatherImage(getMoreData.hourly[4].weather[0].icon);
    hour4Temp.textContent = `${Math.round(getMoreData.hourly[4].temp)}°`;

    hour5Time.textContent = `${new Date(getMoreData.hourly[5].dt * 1000).getHours()} hrs`;
    hour5pop.textContent = `${Math.round(getMoreData.hourly[5].pop * 100)}%`;
    hour5Weather.src = weatherImage(getMoreData.hourly[5].weather[0].icon);
    hour5Temp.textContent = `${Math.round(getMoreData.hourly[5].temp)}°`;

    hour6Time.textContent = `${new Date(getMoreData.hourly[6].dt * 1000).getHours()} hrs`;
    hour6pop.textContent = `${Math.round(getMoreData.hourly[6].pop * 100)}%`;
    hour6Weather.src = weatherImage(getMoreData.hourly[6].weather[0].icon);
    hour6Temp.textContent = `${Math.round(getMoreData.hourly[6].temp)}°`;

    hour7Time.textContent = `${new Date(getMoreData.hourly[7].dt * 1000).getHours()} hrs`;
    hour7pop.textContent = `${Math.round(getMoreData.hourly[7].pop * 100)}%`;
    hour7Weather.src = weatherImage(getMoreData.hourly[7].weather[0].icon);
    hour7Temp.textContent = `${Math.round(getMoreData.hourly[7].temp)}°`;

    hour8Time.textContent = `${new Date(getMoreData.hourly[8].dt * 1000).getHours()} hrs`;
    hour8pop.textContent = `${Math.round(getMoreData.hourly[8].pop * 100)}%`;
    hour8Weather.src = weatherImage(getMoreData.hourly[8].weather[0].icon);
    hour8Temp.textContent = `${Math.round(getMoreData.hourly[8].temp)}°`;

    hour9Time.textContent = `${new Date(getMoreData.hourly[9].dt * 1000).getHours()} hrs`;
    hour9pop.textContent = `${Math.round(getMoreData.hourly[9].pop * 100)}%`;
    hour9Weather.src = weatherImage(getMoreData.hourly[9].weather[0].icon);
    hour9Temp.textContent = `${Math.round(getMoreData.hourly[9].temp)}°`;

    hour10Time.textContent = `${new Date(getMoreData.hourly[10].dt * 1000).getHours()} hrs`;
    hour10pop.textContent = `${Math.round(getMoreData.hourly[10].pop * 100)}%`;
    hour10Weather.src = weatherImage(getMoreData.hourly[10].weather[0].icon);
    hour10Temp.textContent = `${Math.round(getMoreData.hourly[10].temp)}°`;

    hour11Time.textContent = `${new Date(getMoreData.hourly[11].dt * 1000).getHours()} hrs`;
    hour11pop.textContent = `${Math.round(getMoreData.hourly[11].pop * 100)}%`;
    hour11Weather.src = weatherImage(getMoreData.hourly[11].weather[0].icon);
    hour11Temp.textContent = `${Math.round(getMoreData.hourly[11].temp)}°`;

    hour12Time.textContent = `${new Date(getMoreData.hourly[12].dt * 1000).getHours()} hrs`;
    hour12pop.textContent = `${Math.round(getMoreData.hourly[12].pop * 100)}%`;
    hour12Weather.src = weatherImage(getMoreData.hourly[12].weather[0].icon);
    hour12Temp.textContent = `${Math.round(getMoreData.hourly[12].temp)}°`;

    hour13Time.textContent = `${new Date(getMoreData.hourly[13].dt * 1000).getHours()} hrs`;
    hour13pop.textContent = `${Math.round(getMoreData.hourly[13].pop * 100)}%`;
    hour13Weather.src = weatherImage(getMoreData.hourly[13].weather[0].icon);
    hour13Temp.textContent = `${Math.round(getMoreData.hourly[13].temp)}°`;

    hour14Time.textContent = `${new Date(getMoreData.hourly[14].dt * 1000).getHours()} hrs`;
    hour14pop.textContent = `${Math.round(getMoreData.hourly[14].pop * 100)}%`;
    hour14Weather.src = weatherImage(getMoreData.hourly[14].weather[0].icon);
    hour14Temp.textContent = `${Math.round(getMoreData.hourly[14].temp)}°`;

    hour15Time.textContent = `${new Date(getMoreData.hourly[15].dt * 1000).getHours()} hrs`;
    hour15pop.textContent = `${Math.round(getMoreData.hourly[15].pop * 100)}%`;
    hour15Weather.src = weatherImage(getMoreData.hourly[15].weather[0].icon);
    hour15Temp.textContent = `${Math.round(getMoreData.hourly[15].temp)}°`;

    hour16Time.textContent = `${new Date(getMoreData.hourly[16].dt * 1000).getHours()} hrs`;
    hour16pop.textContent = `${Math.round(getMoreData.hourly[16].pop * 100)}%`;
    hour16Weather.src = weatherImage(getMoreData.hourly[16].weather[0].icon);
    hour16Temp.textContent = `${Math.round(getMoreData.hourly[16].temp)}°`;

    hour17Time.textContent = `${new Date(getMoreData.hourly[17].dt * 1000).getHours()} hrs`;
    hour17pop.textContent = `${Math.round(getMoreData.hourly[17].pop * 100)}%`;
    hour17Weather.src = weatherImage(getMoreData.hourly[17].weather[0].icon);
    hour17Temp.textContent = `${Math.round(getMoreData.hourly[17].temp)}°`;

    hour18Time.textContent = `${new Date(getMoreData.hourly[18].dt * 1000).getHours()} hrs`;
    hour18pop.textContent = `${Math.round(getMoreData.hourly[18].pop * 100)}%`;
    hour18Weather.src = weatherImage(getMoreData.hourly[18].weather[0].icon);
    hour18Temp.textContent = `${Math.round(getMoreData.hourly[18].temp)}°`;

    hour19Time.textContent = `${new Date(getMoreData.hourly[19].dt * 1000).getHours()} hrs`;
    hour19pop.textContent = `${Math.round(getMoreData.hourly[19].pop * 100)}%`;
    hour19Weather.src = weatherImage(getMoreData.hourly[19].weather[0].icon);
    hour19Temp.textContent = `${Math.round(getMoreData.hourly[19].temp)}°`;

    hour20Time.textContent = `${new Date(getMoreData.hourly[20].dt * 1000).getHours()} hrs`;
    hour20pop.textContent = `${Math.round(getMoreData.hourly[20].pop * 100)}%`;
    hour20Weather.src = weatherImage(getMoreData.hourly[20].weather[0].icon);
    hour20Temp.textContent = `${Math.round(getMoreData.hourly[20].temp)}°`;

    hour21Time.textContent = `${new Date(getMoreData.hourly[21].dt * 1000).getHours()} hrs`;
    hour21pop.textContent = `${Math.round(getMoreData.hourly[21].pop * 100)}%`;
    hour21Weather.src = weatherImage(getMoreData.hourly[21].weather[0].icon);
    hour21Temp.textContent = `${Math.round(getMoreData.hourly[21].temp)}°`;

    hour22Time.textContent = `${new Date(getMoreData.hourly[22].dt * 1000).getHours()} hrs`;
    hour22pop.textContent = `${Math.round(getMoreData.hourly[22].pop * 100)}%`;
    hour22Weather.src = weatherImage(getMoreData.hourly[22].weather[0].icon);
    hour22Temp.textContent = `${Math.round(getMoreData.hourly[22].temp)}°`;

    hour23Time.textContent = `${new Date(getMoreData.hourly[23].dt * 1000).getHours()} hrs`;
    hour23pop.textContent = `${Math.round(getMoreData.hourly[23].pop * 100)}%`;
    hour23Weather.src = weatherImage(getMoreData.hourly[23].weather[0].icon);
    hour23Temp.textContent = `${Math.round(getMoreData.hourly[23].temp)}°`;

    hour24Time.textContent = `${new Date(getMoreData.hourly[24].dt * 1000).getHours()} hrs`;
    hour24pop.textContent = `${Math.round(getMoreData.hourly[24].pop * 100)}%`;
    hour24Weather.src = weatherImage(getMoreData.hourly[24].weather[0].icon);
    hour24Temp.textContent = `${Math.round(getMoreData.hourly[24].temp)}°`;

    // cuando carga datos, muestra tabla;
    allWeekInfo.style.display = 'grid';
    // se selecciona solamente nombre del dia de Date data.
    weekDay0Name.textContent = traducirDia((new Date(getMoreData.daily[1].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay0Icon.src = weatherImage(getMoreData.daily[1].weather[0].icon);
    weekDay0Pop.textContent = `${Math.round(getMoreData.daily[1].pop * 100)}%`;
    weekDay0Hum.textContent = `${getMoreData.daily[1].humidity}%`;
    weekDay0Temp.textContent = `${Math.round(getMoreData.daily[1].temp.max)}° | ${Math.round(getMoreData.daily[1].temp.min)}°`;

    weekDay1Name.textContent = traducirDia((new Date(getMoreData.daily[2].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay1Icon.src = weatherImage(getMoreData.daily[2].weather[0].icon);
    weekDay1Pop.textContent = `${Math.round(getMoreData.daily[2].pop * 100)}%`;
    weekDay1Hum.textContent = `${getMoreData.daily[2].humidity}%`;
    weekDay1Temp.textContent = `${Math.round(getMoreData.daily[2].temp.max)}° | ${Math.round(getMoreData.daily[2].temp.min)}°`;

    weekDay2Name.textContent = traducirDia((new Date(getMoreData.daily[3].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay2Icon.src = weatherImage(getMoreData.daily[3].weather[0].icon);
    weekDay2Pop.textContent = `${Math.round(getMoreData.daily[3].pop * 100)}%`;
    weekDay2Hum.textContent = `${getMoreData.daily[3].humidity}%`;
    weekDay2Temp.textContent = `${Math.round(getMoreData.daily[3].temp.max)}° | ${Math.round(getMoreData.daily[3].temp.min)}°`;

    weekDay3Name.textContent = traducirDia((new Date(getMoreData.daily[4].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay3Icon.src = weatherImage(getMoreData.daily[4].weather[0].icon);
    weekDay3Pop.textContent = `${Math.round(getMoreData.daily[4].pop * 100)}%`;
    weekDay3Hum.textContent = `${getMoreData.daily[4].humidity}%`;
    weekDay3Temp.textContent = `${Math.round(getMoreData.daily[4].temp.max)}° | ${Math.round(getMoreData.daily[4].temp.min)}°`;

    weekDay4Name.textContent = traducirDia((new Date(getMoreData.daily[5].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay4Icon.src = weatherImage(getMoreData.daily[5].weather[0].icon);
    weekDay4Pop.textContent = `${Math.round(getMoreData.daily[5].pop * 100)}%`;
    weekDay4Hum.textContent = `${getMoreData.daily[5].humidity}%`;
    weekDay4Temp.textContent = `${Math.round(getMoreData.daily[5].temp.max)}° | ${Math.round(getMoreData.daily[5].temp.min)}°`;

    weekDay5Name.textContent = traducirDia((new Date(getMoreData.daily[6].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay5Icon.src = weatherImage(getMoreData.daily[6].weather[0].icon);
    weekDay5Pop.textContent = `${Math.round(getMoreData.daily[6].pop * 100)}%`;
    weekDay5Hum.textContent = `${getMoreData.daily[6].humidity}%`;
    weekDay5Temp.textContent = `${Math.round(getMoreData.daily[6].temp.max)}° | ${Math.round(getMoreData.daily[6].temp.min)}°`;

    weekDay6Name.textContent = traducirDia((new Date(getMoreData.daily[7].dt * 1000)).toLocaleString('default', { weekday: 'long' }));
    weekDay6Icon.src = weatherImage(getMoreData.daily[7].weather[0].icon);
    weekDay6Pop.textContent = `${Math.round(getMoreData.daily[7].pop * 100)}%`;
    weekDay6Hum.textContent = `${getMoreData.daily[7].humidity}%`;
    weekDay6Temp.textContent = `${Math.round(getMoreData.daily[7].temp.max)}° | ${Math.round(getMoreData.daily[7].temp.min)}°`;
  } catch {
    const error = document.querySelector('#error');
    error.style.visibility = 'visible';
  }
};
const buscar = document.querySelector('#buscar');
const city = document.querySelector('#city');
buscar.addEventListener('click', () => {
  const cityToSearch = city.value;
  const cityValue = cityToSearch.replace(' ', '+');
  weather(cityValue);
});
weather('buenos+aires');
