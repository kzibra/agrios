import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-poppins">
      {/* Hero Banner Section */}
      <section className="relative h-screen">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://tplabs.co/agrios/wp-content/uploads/2022/07/hero-1-scaled.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
          <div className="max-w-2xl text-white">
            <h4 className="text-green-500 text-xl mb-4 font-semibold">Welcome to Agrios</h4>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We're Leader in Agriculture Market
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              We are dedicated to providing the highest quality organic products and agricultural solutions that promote sustainable farming practices and environmental stewardship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300"
              >
                Discover More
              </Link>
              <Link 
                to="/contact" 
                className="border border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
