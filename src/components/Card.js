import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const Card = ({ city, temp, desc, icon }) => {
  return (
    <div className=" w-80 mx-auto  flex flex-col gap-1 justify-evenly  rounded-lg  bg-gradient-to-r from-orange-400 to-rose-400 drop-shadow-md hover:drop-shadow-xl">
      <div className="flex items-start mt-2 ml-5">
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ fontSize: 20, color: 'grey' }}
        />
        <h5 className="ml-2 text-1xl dark:text-white">{city}</h5>
      </div>

      <p className="ml-4 mt-3 mb-3 font-bold  text-white text-4xl">{temp}°C</p>

      <img className=" ml-2 object-cover h-15 w-12" src={icon} />

      <p className="ml-4 mb-2 text-white text-2xl ">{desc}</p>
    </div>
  );
};

export default Card;
