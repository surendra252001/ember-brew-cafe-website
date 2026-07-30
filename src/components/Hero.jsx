import heroImage from "../assets/images/hero/hero-coffee.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroImage}
        alt="Coffee"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

        <div className="max-w-3xl">

          <p className="text-amber-400 uppercase tracking-[4px] text-sm sm:text-base mb-4">
            Premium Coffee Experience
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Crafted Coffee.
            <br />
            Made with <span className="text-amber-400">Passion.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-8 max-w-xl">
            Discover handcrafted coffee made from premium beans,
            served in a warm and elegant atmosphere designed for
            every coffee lover.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <button className="bg-amber-500 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 text-black font-semibold px-8 py-4 rounded-full transition duration-300">
            Explore Menu
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full transition duration-300">
              Reserve Table
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;