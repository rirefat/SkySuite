import Image from "next/image";

const Gallery = ({ gallery = [] }) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const mainImage = gallery[0];
  const otherImages = gallery.slice(1, 5);

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 imageshowCase shadow-md rounded-lg overflow-hidden">
        <div className="relative h-[400px] w-full">
          <Image
            src={mainImage}
            className="h-[400px] w-full object-cover"
            alt="Main Hotel Picture"
            width={750}
            height={400}
            priority
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {otherImages.map((image, index) => (
            <div key={index} className="relative h-[200px] w-full overflow-hidden border border-white/20">
              <Image
                src={image}
                alt={`Hotel Image ${index + 1}`}
                width={350}
                height={200}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
