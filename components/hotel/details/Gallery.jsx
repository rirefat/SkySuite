import Image from "next/image";

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery];
  newGallery.shift();

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase shadow-md">
        <Image src={gallery[0]} className="h-[400px]"
          alt="Main Pic"
          width={750}
          height={400} />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery.map((image,index) => (
              <Image key={index} src={image} alt="Hotel Image" width={350} height={100} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
