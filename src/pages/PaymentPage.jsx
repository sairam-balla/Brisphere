import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/orderSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingCard from "../components/BookingCard";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState(1);
  const [Children, setChildren] = useState(0);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      adults,
      children: Children,
    };
    dispatch(setUserDetails(data));
    navigate("/order");
  };
  return (
    <form
      className="w-full flex flex-col justify-center items-center p-12 bg-[#f5f5f5] mb-32 relative "
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 laptop:pb-12 tablet:pb-10">
        <label className="flex flex-col">
          Name
          <input
            className="px-6 py-4 rounded-md border-2"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          Email
          <input
            className="px-6 py-4 rounded-md border-2"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col">
          Phone Number
          <input
            className="px-6 py-4 rounded-md border-2"
            type="tel"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <span className="grid grid-cols-2 gap-4">
          <label className="flex flex-col">
            No.of Adults
            <input
              className="px-6 py-4 rounded-md border-2"
              type="number"
              min={1}
              placeholder="Adult "
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col">
            No.of Children
            <input
              className="px-6 py-4 rounded-md border-2"
              type="number"
              min={0}
              placeholder="Children"
              value={Children}
              onChange={(e) => setChildren(e.target.value)}
              required
            />
          </label>
        </span>
      </div>
      <BookingCard currentPage="payment" />
    </form>
  );
};

export default PaymentPage;
