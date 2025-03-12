import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative text-center text-white py-20"
      style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <div className="flex justify-around gap-6 mt-4 text-lg">
        <img src="/logo.svg" alt="Logo" className="w-32" />
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-pink-400" /> +98 (000) - 9630
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> ambed@agrios.com
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" /> Melbourne, Australia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
