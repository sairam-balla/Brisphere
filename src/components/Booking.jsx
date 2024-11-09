import mountains from "../assets/mountains.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdFacebook } from "react-icons/md";
import BookingCard from "./BookingCard";

const Booking = () => {
  return (
    <section className="w-full flex flex-col tablet:flex-col laptop:flex-row items-center bg-[#f4f4f4] mb-32 relative">
      <div className="w-full tablet:w-4/5 laptop:w-1/2 flex flex-col p-6 laptop:px-16">
        <h1 className="text-2xl font-semibold tablet:text-3xl laptop:text-6xl desktop:6xl  laptop:w-4/5  my-6">
          Work from ladakh
        </h1>
        <p className="text-md tablet:text-lg laptop:text-lg">
          {`India's first true digital tourism ecosystem`}
        </p>
        <span className="flex gap-4 py-4">
          <MdFacebook color="#434343" fontSize="30px" />
          <BiLogoInstagramAlt color="#434343" fontSize="30px" />
        </span>
      </div>

      <img
        className="w-full tablet:w-4/5 laptop:w-1/2 h-auto"
        src={mountains}
        alt="mountains"
      />
      <BookingCard currentPage="home" />
    </section>
  );
};

export default Booking;
