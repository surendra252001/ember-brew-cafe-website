const testimonials = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "Coffee Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Absolutely the best coffee I've had. The ambience is peaceful and every cup is made perfectly.",
  },
  {
    id: 2,
    name: "Daniel Brown",
    role: "Food Blogger",
    image: "https://i.pravatar.cc/150?img=56",
    review:
      "Beautiful interiors, delicious desserts and premium coffee. I highly recommend Ember & Bean.",
  },
  {
    id: 3,
    name: "Sophia Miller",
    role: "Daily Customer",
    image: "https://i.pravatar.cc/150?img=48",
    review:
      "My favourite place to relax after work. Friendly staff and consistently amazing coffee.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-amber-400 text-sm">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            Thousands of coffee lovers visit Ember & Bean every month.
            Here's what some of them have to say.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-[#171717] border border-gray-800 rounded-3xl p-8 hover:border-amber-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div>
                <div className="text-amber-400 text-xl mb-5">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-8 italic">
                  "{item.review}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;