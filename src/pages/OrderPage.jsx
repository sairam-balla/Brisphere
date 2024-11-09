import { useSelector } from "react-redux";
import BookingCard from "../components/BookingCard";
import { IoIosCheckmarkCircle } from "react-icons/io";

const OrderPage = () => {
  const userDetails = useSelector((state) => state.order.user);

  return (
    <section className="w-full flex flex-col  justify-center items-center p-12 px-20 bg-[#f5f5f5] mb-32 relative  pb-16">
      <div className="flex flex-col laptop:flex-row items-center gap-12 w-full">
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold pb-2">{userDetails.name}</h1>
          <p>{userDetails.phone}</p>
          <p>{userDetails.email}</p>
          <p>
            {userDetails.adults} Adult {userDetails.children} Children
          </p>
        </div>
        <div className="flex flex-col laptop:flex-row gap-4 justify-center items-center">
          <IoIosCheckmarkCircle fontSize="150px" color="green" />
          <div>
            <h1 className="text-4xl font-bold mb-4">Order Complete</h1>
            <p>have questions?</p>
            <a href="#aboutUs">Contact Us</a>
          </div>
        </div>
      </div>
      <BookingCard currentPage="order" />
    </section>
  );
};

export default OrderPage;
