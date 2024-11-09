import profileImg from "../assets/profile-img.png";
import riverImg from "../assets/river.png";
import { MdStar } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const DiscoverCard = ({ showImg }) => {
  return (
    <li className="shadow-lg  border-2 p-4 w-96 rounded-md ">
      {showImg && (<img src={riverImg} alt="river-img" /> )}
      <div className="flex gap-4">
        
          <img
            src={profileImg}
            alt="profile-img"
            className="aspect-square w-10 rounded-full"
          />
        
        <div>
          <h3 className="font-bold text-xl">Arjun Raghav</h3>
          <span className="flex gap-1">
            <MdStar color="yellow" />
            <MdStar color="yellow" />
            <MdStar color="yellow" />
            <MdStar color="yellow" />
          </span>
        </div>
      </div>
      <p>
        I am writing this after reflecting on my one month stay with Bricabin in
        Ladakh. Right from picking us up at the airport to dropping us back
        there after a month, Urgan was very responsible and took good care of my
        friends and me. read more
      </p>
    </li>
  );
};

export default DiscoverCard;
