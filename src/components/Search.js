import rawAxios from 'axios';
const apiKey = 'ce481526a947c75c2be0a123cad74757';

const Search = ({ setCity, setTemperature, setDescription, setIcon }) => {
  const searchHandler = (event) => {
    if (event.key === 'Enter') {
      const searchText = event.target.value;
      getWeather(searchText);
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
    <div class="flex justify-center mx-auto mt-16 ">
      <div
        class="relative mb-3 xl:w-72 bg-gradient-to-r from-orange-400 to-rose-400 rounded-lg "
        data-te-input-wrapper-init
      >
        <input
          onKeyDown={searchHandler}
          type="search"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleSearch2"
          placeholder="Type query"
        />
        <label
          for="exampleSearch2"
          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
        >
          Search
        </label>
      </div>
    </div>
  );
};

export default Search;
