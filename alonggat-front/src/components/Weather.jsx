import React, { useEffect } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const useWeatherData = (refreshInterval) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'bfd1b980aa5416c251b43fb2f1ba6c22',
    lat: '31.60998',
    lon: '34.76422',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('El componente Weather se ha actualizado');
    }, refreshInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [refreshInterval]);

  return { data, isLoading, errorMessage };
};

const Weather = () => {
  const { data, isLoading, errorMessage } = useWeatherData(500);

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Kiryat Gat"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default Weather;
