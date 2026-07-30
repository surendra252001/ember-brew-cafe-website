import aboutImage from "../assets/images/about/about.jpg";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  const features = [
    "100% Premium Arabica Beans",
    "Freshly Brewed Every Day",
    "Cozy & Modern Atmosphere",
    "Expert Baristas",
  ];

  return (
    <section
      id="about"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl">

            <img
              src={aboutImage}
              alt="About Cafe"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[5px] text-amber-400 mb-3">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Every Cup Tells
              <br />
              a Story.
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              At Ember & Bean, we believe coffee is more than a drink—
              it's an experience. Every cup is crafted from carefully
              selected beans, roasted to perfection, and served with
              passion by our expert baristas.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-amber-400 text-xl" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-full transition duration-300">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;