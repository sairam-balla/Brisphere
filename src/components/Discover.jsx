import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  return (
    <section id="discover" className="w-full px-4 ">
      <h1 className="text-4xl text-center font-semibold p-6">Discover</h1>
      <ul className="flex flex-row flex-wrap justify-center items-center  gap-6">
        {Array.from({ length: 5 }, (_, index) => {
          <DiscoverCard key={index} showImg={index === 2 ? true : false} />;
        })}
      </ul>
    </section>
  );
};

export default Discover;
