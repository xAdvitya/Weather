const Card = ({ city, temp, desc, icon }) => {
  return (
    <div className=" w-80 mx-auto  flex flex-col gap-1 justify-evenly  rounded-lg  bg-gradient-to-r from-orange-400 to-rose-400 drop-shadow-md hover:drop-shadow-xl">
      <h5 className="ml-4 text-3xl  dark:text-white">{city}</h5>

      <p className="ml-4 mb-3 font-bold  text-white text-4xl">{temp}°C</p>

      <img className=" ml-2 object-cover h-15 w-12" src={icon} />

      <p className="ml-4 mb-2 text-white text-2xl ">{desc}</p>
    </div>
  );
};

export default Card;
