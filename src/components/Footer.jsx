import {
  FaCoffee,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            <FaCoffee className="text-amber-400 text-4xl" />

            <h2 className="text-3xl font-bold">
              Ember & Bean
            </h2>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-12">
            Experience handcrafted coffee made with passion, premium ingredients,
            and a cozy atmosphere where every cup creates a memorable moment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-12">

          <div>
            <FaMapMarkerAlt className="text-amber-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">
              Mumbai, Maharashtra
            </p>
          </div>

          <div>
            <FaClock className="text-amber-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-400 text-sm">
              Mon – Sun
              <br />
              8:00 AM – 10:00 PM
            </p>
          </div>

          <div>
            <FaPhoneAlt className="text-amber-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">
              +91 98765 43210
            </p>
          </div>

          <div>
            <FaEnvelope className="text-amber-400 text-2xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">
              hello@emberandbean.com
            </p>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-10">

          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300"
              >
                <Icon />
              </a>
            )
          )}

        </div>

        <div className="border-t border-gray-800 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ember & Bean. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;