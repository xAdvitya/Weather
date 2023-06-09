import rawAxios from 'axios';
const apiKey = 'ce481526a947c75c2be0a123cad74757';

const Search = ({ setCity, setTemperature, setDescription, setIcon,setInvalid }) => {
  const searchHandler = (event) => {
    if (event.key === 'Enter') {
      const searchText = event.target.value;
      getWeather(searchText);
      setCity('');
      event.target.value = '';
    }
  };

  async function getWeather(city = 'punjab') {
    try {
      const data = await rawAxios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      console.log(data);
      setCity(data.data.name);
      setTemperature(data.data.main.temp);
      setDescription(data.data.weather[0].description);
      setIcon(
        `https://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`
      );
    } catch (err) {
      // console.log(err)
      // alert("enter valid city name ");
      setInvalid(true);
      getWeather("punjab");
    }
  }

  const invalidHandler=()=>{
    setInvalid(false);
  }

  return (
    <div className="flex justify-center mx-auto ">
      <div
        className="relative mb-3 xl:w-72 bg-gradient-to-r from-orange-400 to-rose-400 rounded-lg "
        data-te-input-wrapper-init
      >
        <input
          onKeyDown={searchHandler}
          onChange={invalidHandler}
          type="search"
          className="text-white caret-white peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
