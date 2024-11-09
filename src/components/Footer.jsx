const Footer = () => {
  return (
    <footer
      id="aboutUs"
      className="px-14 py-10 bg-[#f4f4f4] flex flex-col tablet:flex-row justify-between"
    >
      <div>
        <h1 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold py-3">
          Brisphere
        </h1>
        <p>
          Spituk, ladakh,
          <br /> India, 194101 <br /> +91 - 7764997033 <br />{" "}
          amith.jha6700@gmail.com
        </p>
        <button
          type="button"
          className="py-4 px-8 bg-[#206d99] text-white font-semibold rounded-md my-6 "
        >
          Location
        </button>
      </div>
      <ul className="text-lg laptop:text-xl">
        <li>terms and conditions</li>
        <li>privacy policy</li>
        <li>refunds</li>
      </ul>
    </footer>
  );
};

export default Footer;
