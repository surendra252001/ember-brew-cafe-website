import { useState } from "react";

function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    e.target.reset();
  };

  return (
    <section
      id="reservation"
      className="bg-[#111111] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-amber-400 text-sm">
            Reservation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Reserve Your Table
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            Book your table and enjoy handcrafted coffee, delicious desserts,
            and a warm atmosphere with your friends and family.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-[#171717] rounded-3xl p-10 shadow-xl border border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 transition"
            />

            <input
              type="date"
              required
              className="bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 transition"
            />

            <input
              type="time"
              required
              className="bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 transition"
            />

            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              required
              className="bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 transition"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Special Request..."
            className="w-full mt-6 bg-[#222] p-4 rounded-xl outline-none border border-transparent focus:border-amber-400 resize-none transition"
          ></textarea>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
            >
              Reserve Table
            </button>

            {submitted && (
              <p className="text-green-400 font-medium">
                ✅ Reservation request sent! We'll contact you shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservation;