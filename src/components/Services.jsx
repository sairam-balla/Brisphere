import { FaWifi } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import {
  MdDirectionsCarFilled,
  MdFastfood,
  MdFlag,
  MdHomeFilled,
  MdMap,
  MdShoppingCart,
} from "react-icons/md";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 1,
    name: "High Speed Internet",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <FaWifi color="gray" fontSize="86px" />,
  },
  {
    id: 2,
    name: "Healthy Meals",
    desc: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere. ",
    icon: <MdFastfood color="gray" fontSize="86px" />,
  },
  {
    id: 3,
    name: "Homely Stay",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <MdHomeFilled color="gray" fontSize="86px" />,
  },
  {
    id: 4,
    name: "Transportation",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <MdDirectionsCarFilled color="gray" fontSize="86px" />,
  },
  {
    id: 5,
    name: "Food Delivery",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <IoIosBicycle color="gray" fontSize="86px" />,
  },
  {
    id: 6,
    name: "Tourism",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <MdMap color="gray" fontSize="86px" />,
  },
  {
    id: 7,
    name: "Job",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <MdFlag color="gray" fontSize="86px" />,
  },
  {
    id: 8,
    name: "Rental Service",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas",
    icon: <MdDirectionsCarFilled color="gray" fontSize="86px" />,
  },
  {
    id: 9,
    name: "Online Shop",
    desc: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
    icon: <MdShoppingCart color="gray" fontSize="86px" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="my-6 w-full px-4 tablet:px-0">
      <h1 className="text-4xl text-center font-semibold p-6">Services</h1>
      <ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 py-4">
        {servicesData.map((each) => (
          <ServiceCard
            key={each.id}
            icon={each.icon}
            name={each.name}
            desc={each.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default Services;
