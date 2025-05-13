import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const carouselItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1000&auto=format&fit=crop",
      title: "Premium Luggage",
      description: "Durable travel companions for every journey",
      alt: "Stylish luggage set with wheels",
      bgColor: "bg-blue-100",
      accentColor: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop",
      title: "Bridal Clutches",
      description: "Elegant accessories for your special day",
      alt: "Elegant bridal clutch with pearl details",
      bgColor: "bg-pink-100",
      accentColor: "from-pink-500 to-purple-600",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop",
      title: "College Bags",
      description: "Stylish & functional bags for students",
      alt: "Modern college backpack for girls",
      bgColor: "bg-purple-100",
      accentColor: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1000&auto=format&fit=crop",
      title: "Hiking Backpacks",
      description: "Adventure-ready packs for the outdoors",
      alt: "Hiking backpack for outdoor adventures",
      bgColor: "bg-green-100",
      accentColor: "from-green-500 to-teal-600",
    },
  ];

  // Why Choose Us features
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description:
        "All our products undergo rigorous quality testing to ensure exceptional durability and performance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L4 8v10l8 6 8-6V8z" />
          <path d="M12 22V12" />
          <path d="M12 12L4 8" />
          <path d="M12 12L20 8" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Global Standard",
      description:
        "Our products meet international quality standards and are trusted by customers worldwide",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Best in Town",
      description:
        "Locally recognized as the premier destination for all types of bags and carrying solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  // Card hover animation variants
  const cardVariants = {
    hover: {
      y: -15,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  // Feature card animation variants
  const featureVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative"
      >
        <div className="absolute -z-10 w-full">
          <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
        </div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <motion.span
              className="absolute -left-5 -top-5 text-4xl text-blue-300 opacity-80"
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              ✦
            </motion.span>
            <motion.span
              className="absolute -right-5 -bottom-2 text-3xl text-indigo-300 opacity-80"
              initial={{ rotate: 30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              ✦
            </motion.span>
            <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Your one-stop shop
              </motion.span>
            </h1>
          </div>
          <motion.p
            className="text-center text-xl md:text-2xl text-gray-600 relative font-light tracking-wide mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            for all your carrying needs
          </motion.p>
          <motion.div
            className="w-36 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>
          <motion.div
            className="mt-6 flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg h-[500px]">
        {/* Carousel items */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`w-full h-full flex flex-col md:flex-row items-center ${carouselItems[currentIndex].bgColor}`}
          >
            <div className="md:w-1/2 h-[250px] md:h-full overflow-hidden">
              <img
                src={carouselItems[currentIndex].image}
                alt={carouselItems[currentIndex].alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/EEE/31343C?text=CarryCraze+Image";
                }}
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {carouselItems[currentIndex].title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                {carouselItems[currentIndex].description}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Welcome to CarryCraze Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-600">CarryCraze</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-4 text-lg">
              Since our founding, CarryCraze has been the premier destination
              for high-quality bags, luggage, and carrying solutions. Our
              mission is to provide exceptional products that combine style,
              durability, and functionality.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Whether you're looking for a reliable travel companion, a stylish
              accessory for special occasions, or a practical everyday bag, we
              have the perfect solution for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="font-medium">Premium Materials</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="8 12 12 16 16 12"></polyline>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                  </svg>
                </div>
                <span className="font-medium">Handcrafted Quality</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <span className="font-medium">Customer Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <img
                src="/images/qr.jpg"
                alt="CarryCraze store"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/EEE/31343C?text=CarryCraze+Store";
                }}
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4">
                <div className="text-blue-600 font-bold text-xl">70+</div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Categories */}
      <div className="mt-8 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {carouselItems.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial="initial"
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Circular background */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gray-200 -z-10 
                          transform translate-x-1/4 -translate-y-1/4 opacity-60"
              ></div>

              {/* Image container with diagonal cut */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <div
                  className="absolute inset-0 bg-gradient-to-br bg-opacity-70 mix-blend-multiply 
                            z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-300
                            flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, #${
                      item.id % 2 === 0 ? "f0f9ff" : "fdf2f8"
                    } 50.1%, #${item.id % 2 === 0 ? "f0f9ff" : "fdf2f8"} 100%)`,
                  }}
                ></div>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/EEE/31343C?text=Category";
                  }}
                />

                {/* Category label */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r ${item.accentColor} 
                              text-white flex items-center px-6 group-hover:h-24 transition-all duration-300`}
                >
                  <h3 className="font-bold text-lg tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content with description only */}
              <motion.div variants={contentVariants} className="pl-2">
                <p className="text-gray-600 text-sm mb-3 max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Hiking Backpack - Full Width Item */}
        <div className="mt-10">
          <motion.div
            key={carouselItems[3].id}
            className="relative overflow-hidden group rounded-lg"
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image container */}
              <div className="relative md:w-1/2 aspect-video md:aspect-auto md:h-[350px] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${carouselItems[3].accentColor} 
                            opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10`}
                ></div>
                <img
                  src={carouselItems[3].image}
                  alt={carouselItems[3].alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/EEE/31343C?text=Category";
                  }}
                />
              </div>

              {/* Content */}
              <motion.div
                variants={contentVariants}
                className={`md:w-1/2 p-8 ${carouselItems[3].bgColor} flex flex-col justify-center relative overflow-hidden`}
              >
                {/* Decorative element */}
                <div
                  className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br opacity-10
                          group-hover:scale-150 transition-transform duration-500 ease-out"
                  style={{
                    background:
                      "linear-gradient(135deg, #10B981 0%, #0D9488 100%)",
                  }}
                ></div>

                <h3 className="font-bold text-2xl md:text-3xl mb-4 relative">
                  {carouselItems[3].title}
                </h3>
                <p className="text-gray-600 md:text-lg mb-6 relative max-w-lg">
                  {carouselItems[3].description}
                </p>
                <p className="text-gray-600 md:text-lg relative max-w-lg">
                  Designed for durability and comfort on all your adventures,
                  from weekend trails to extended backpacking trips.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-24 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on providing exceptional quality, service, and
              value for all your carrying needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover="hover"
                variants={featureVariants}
              >
                <div className="flex justify-center mb-4">
                  <div className="text-blue-600 bg-blue-100 p-3 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-8 rounded-xl shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Your Satisfaction Is Our Priority
              </h3>
              <p className="mb-6">
                Join thousands of satisfied customers who trust CarryCraze for
                all your carrying needs. From everyday essentials to adventure
                gear, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
