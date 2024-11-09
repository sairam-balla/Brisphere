import { useDispatch, useSelector } from "react-redux";
import { setCheckIn, setCheckOut } from "../store/orderSlice";

// eslint-disable-next-line react/prop-types
const CheckInInput = ({ currentPage }) => {
  const dispatch = useDispatch();
  const checkInDate = useSelector((state) => state.order.checkIn);
  const checkOutDate = useSelector((state) => state.order.checkOut);
  return currentPage === "order" ? (
    <>
      <div>
        <h2 className="font-semibold text-md tablet:text-lg laptop:text-xl">
          CHECK-IN
        </h2>
        <p>{checkInDate}</p>
      </div>
      <div className=" w-9/12 border-t-2 tablet:border-t-0 tablet:w-2 border-gray-400  tablet:h-12 tablet:border-r-2"></div>
      <div>
        <h2 className="font-semibold text-md tablet:text-lg laptop:text-xl">
          CHECK-OUT
        </h2>
        <p>{checkOutDate}</p>
      </div>
      <div className=" w-9/12 border-t-2 tablet:border-t-0 tablet:w-2 border-gray-400  tablet:h-12 tablet:border-r-2"></div>
    </>
  ) : (
    <>
      <div className="flex flex-col justify-center items-center">
        <label
          htmlFor="checkIn"
          className="font-semibold text-md tablet:text-lg laptop:text-xl"
        >
          CHECK-IN
        </label>
        <input
          id="checkIn"
          type="date"
          min={checkInDate}
          value={checkInDate}
          onChange={(e) => dispatch(setCheckIn(e.target.value))}
          required
        />
      </div>
      <div className=" w-9/12 border-t-2 tablet:border-t-0 tablet:w-2 border-gray-400  tablet:h-12 tablet:border-r-2"></div>
      <div className="flex flex-col justify-center items-center">
        <label
          htmlFor="checkOut"
          className="font-semibold text-md tablet:text-lg laptop:text-xl"
        >
          CHECK-OUT
        </label>

        <input
          id="checkOut"
          type="date"
          min={checkInDate}
          value={checkOutDate}
          onChange={(e) => dispatch(setCheckOut(e.target.value))}
          required
        />
      </div>
      <div className=" w-9/12 border-t-2 tablet:border-t-0 tablet:w-2 border-gray-400  tablet:h-12 tablet:border-r-2"></div>
    </>
  );
};

export default CheckInInput;
