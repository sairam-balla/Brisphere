import { IoMdArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookingBtn = ({ currentPage }) => {
  const amount = useSelector((state) => state.order.amount);
  const totalAmount = amount.toLocaleString("en-IN");
  const bookingButton = {
    home: (
      <Link to="/payment">
        <button
          type="button"
          className="bg-[#206d99] h-12 text-white font-semibold rounded-md px-6 tablet:absolute laptop:static tablet:-bottom-8 tablet:left-0 tablet:right-0 tablet:m-auto tablet:w-3/12 laptop:w-auto"
        >
          BOOK
        </button>
      </Link>
    ),
    payment: (
      <div className="flex flex-col justify-center items-center">
        <button
          type="submit"
          className=" flex justify-between items-center h-12 bg-[#206d99] rounded-lg tablet:absolute laptop:static tablet:-bottom-8 tablet:left-0 tablet:right-0 tablet:m-auto tablet:w-4/12 laptop:w-auto"
        >
          <span className="w-full text-white text-xl font-semibold px-3">
            ₹ {totalAmount}
          </span>
          <span className="bg-[#1b587a] h-full w-16 rounded-r-lg flex justify-center items-center">
            <IoMdArrowForward fontSize="32px" color="white" />
          </span>
        </button>
        <p className="text-xs font-semibold mt-1 tablet:absolute laptop:static tablet:-bottom-14 tablet:left-0 tablet:right-0 tablet:m-auto  laptop:w-auto text-center">
          Click to pay token amount
        </p>
      </div>
    ),

    order: (
      <h1 className="bg-[#206d99] content-center h-12 text-white font-semibold text-xl rounded-md px-4 min-w-20">
        ₹{totalAmount}
      </h1>
    ),
  };
  return bookingButton[currentPage];
};

export default BookingBtn;
