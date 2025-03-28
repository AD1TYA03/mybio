import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="relative min-h-screen w-screen"> {/* Add w-screen to ensure full width */}
      {/* Full-screen Background Image */}
      <img
        src="https://imgs.search.brave.com/oOs6-TYIILMs8FtFGR-dDK2OGXqYj0G2Bd6LUE7Z-LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdGxh/c3NpYW5ibG9nLndw/ZW5naW5lLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8x/Mi9iYXRtYW4tZ2lm/LTE0MDB4NzI1LnBu/Zw"
        alt="404 Not Found"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mt-6">Oops! Page Not Found</h1>
        <p className="text-lg md:text-xl text-gray-400 mt-3">
          Looks like you're lost in space. The page you’re looking for doesn’t exist.
        </p>

        <Link to="/" className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;