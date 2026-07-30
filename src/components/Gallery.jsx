import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.jpg";
import gallery3 from "../assets/images/gallery/gallery3.jpg";
import gallery4 from "../assets/images/gallery/gallery4.jpg";
import gallery5 from "../assets/images/gallery/gallery5.jpg";
import gallery6 from "../assets/images/gallery/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-amber-400 uppercase tracking-[5px] mb-3">
            Gallery
          </p>

          <h2 className="text-5xl font-bold">
            Inside Ember & Bean
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition duration-500 flex items-center justify-center">

                <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                  Ember & Bean
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;