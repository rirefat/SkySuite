import Image from "next/image";

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src="/1.png" className="h-[400px]" alt="Hotel Image" width={500} height={100} />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image src="/2.png" alt="Hotel Image" width={350} height={100} />
          <Image src="/3.png" alt="Hotel Image" width={350} height={100} />
          <Image src="/4.png" alt="Hotel Image" width={350} height={100} />
          <Image src="/5.png" alt="Hotel Image" width={350} height={100} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
