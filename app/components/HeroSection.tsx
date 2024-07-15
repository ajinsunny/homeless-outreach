import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero-image.jpg"
        alt="McPherson Square Park"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Making a Difference Every 3rd Saturday
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Join us in serving the homeless community
        </h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Involved
        </button>
      </div>
    </section>
  );
}
