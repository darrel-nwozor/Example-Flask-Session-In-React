import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/DC.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-yellow-400 mb-6 drop-shadow-lg">
          The DC Multiverse
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Enter the Multiverse where heroes and villains clash. Choose your destiny and face the ultimate challenge!
        </p>

        <Link to="/Game">
          <button className="px-12 py-4 bg-yellow-400 text-black font-bold rounded-full text-xl hover:scale-105 transform transition-all shadow-2xl hover:shadow-inner">
            Start Game
          </button>
        </Link>

        <p className="mt-20 text-gray-500 text-sm">
          DC Inspired Universe | Interactive Story Game
        </p>
      </div>
    </div>
  );
}

export default HomePage;
