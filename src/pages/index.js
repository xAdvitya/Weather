import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import rawAxios from 'axios';
import Search from '@/components/Search';

const inter = Inter({ subsets: ['latin'] });
const apiKey = 'ce481526a947c75c2be0a123cad74757';

// const weatherInfo = () => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=jammu&appid=${apiKey}`
//   )
//     .then((respose) => respose.json())
//     .then((data) => console.log(data));
// };

export default function Home() {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();

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
      <div className="bg-gradient-to-r from-orange-300 to-rose-300">
        <h4 className="invisible text-center  font-extrabold text-blue-600 py-10">
          Weather
        </h4>

        <Search
          setCity={setCity}
          setTemperature={setTemperature}
          setDescription={setDescription}
          setIcon={setIcon}
        />
        {city && (
          <Card city={city} temp={temperature} desc={description} icon={icon} />
        )}

        <h1 className="invisible text-center text-5xl font-extrabold text-blue-600 py-48">
          Weather
        </h1>
      </div>
    </>
  );
}
