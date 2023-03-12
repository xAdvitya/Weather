import rawAxios from 'axios';
const apiKey = 'ce481526a947c75c2be0a123cad74757';

const Search = ({ setCity, setTemperature, setDescription, setIcon }) => {
  const searchHandler = (event) => {
    if (event.key === 'Enter') {
      const searchText = event.target.value;
      getWeather(searchText);
      event.target.value = '';
    }
  };

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

  return (
    <div class="flex justify-center mx-auto ">
      <div
        class="relative mb-3 xl:w-72 bg-gradient-to-r from-orange-400 to-rose-400 rounded-lg "
        data-te-input-wrapper-init
      >
        <input
          onKeyDown={searchHandler}
          type="search"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
