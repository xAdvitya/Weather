import { Inter } from 'next/font/google';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import rawAxios from 'axios';
import Search from '@/components/Search';
const apiKey = 'ce481526a947c75c2be0a123cad74757';

export default function Home() {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    async function getWeather(city = 'punjab') {
      const data = await rawAxios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setCity(data.data.name);
      setTemperature(data.data.main.temp);
      setDescription(data.data.weather[0].description);
      setIcon(
        `https://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`
      );
    }
    getWeather();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-300 to-rose-300">
        {invalid && <h1 className="text-white mb-1">Enter Valid City Name</h1>}
        {city && (
          <Search
            setCity={setCity}
            setTemperature={setTemperature}
            setDescription={setDescription}
            setIcon={setIcon}
            setInvalid={setInvalid}
          />
        )}

        {city && (
          <Card city={city} temp={temperature} desc={description} icon={icon} />
        )}

        {!city && (
          <div className="flex items-center justify-center space-x-2">
            <div
              className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
