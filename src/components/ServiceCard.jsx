// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, name, desc }) => {
  return (
    <li className="flex flex-col justify-center items-center shadow-[0px_0px_20px_8px_rgba(0,_0,_0,_0.1)] rounded-md p-6 w-full mb-4">
      {icon}
      <h2 className="text-xl tablet:text-2xl text-center font-semibold py-2">
        {name}
      </h2>
      <p className="text-sm tablet:text-md  text-center">{desc}</p>
    </li>
  );
};

export default ServiceCard;
