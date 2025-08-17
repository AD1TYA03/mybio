import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const Error404 = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4 universal-bg">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-300 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Home size={18} />
              <span>Go Home</span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          </div>

          {/* Decorative Elements */}
          <motion.div 
            className="flex justify-center space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Error404;