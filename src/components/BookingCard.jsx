import { useDispatch, useSelector } from "react-redux";
import { roomsDecrement, roomsIncrement } from "../store/orderSlice";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import BookingBtn from "./BookingBtn";
import CheckInInput from "./CheckInInput";

// eslint-disable-next-line react/prop-types
const BookingCard = ({ currentPage }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.order.rooms);

  return (
    <div className="shadow-[0px_0px_20px_8px_rgba(0,_0,_0,_0.1)] tablet:absolute tablet:-bottom-14 tablet:flex-row  rounded-2xl bg-slate-50  flex flex-col gap-6 p-6 m-6 w-11/12 laptop:py-8 laptop:-bottom-16 laptop:px-14 tablet:left-0 tablet:right-0 tablet:m-auto justify-between items-center">
      <CheckInInput currentPage={currentPage} />
      <div className="">
        <h2 className="text-center font-semibold text-md tablet:text-lg laptop:text-xl">
          ROOMS
        </h2>
        <span className="flex gap-2 justify-center">
          {currentPage !== "order" && (
            <button type="button" aria-label="decrementBtn" onClick={() => dispatch(roomsDecrement())}>
              <AiOutlineMinusCircle color="#666666" fontSize="20px" />
            </button>
          )}

          <p className="font-semibold text-md tablet:text-lg laptop:text-xl">
            {rooms}
          </p>
          {currentPage !== "order" && (
            <button type="button" aria-label="incrementBtn" onClick={() => dispatch(roomsIncrement())}>
              <AiFillPlusCircle color="#666666" fontSize="20px" />
            </button>
          )}
        </span>
      </div>
      <BookingBtn currentPage={currentPage} />
    </div>
  );
};

export default BookingCard;
