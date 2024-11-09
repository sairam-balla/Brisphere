import Services from "./components/Services";
import Discover from "./components/Discover";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <main className="px-4 tablet:px-14 flex flex-col items-center mb-10">
        {/* Booking Section */}
        <Booking />

        {/* Discover Section */}
        <Discover />

        {/* Services Section */}
        <Services />
      </main>
    </>
  );
}

export default App;
