import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-64px)]">
      <Image
        src="/hero-image.jpg"
        alt="McPherson Square Park"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Making a Difference Every 3rd Saturday
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-8">
          Join us in serving the homeless community
        </h2>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeoEctmda3iRUD4eFkLAQFuyqS3xVp8Wvjbtjs6xRCZGUUDmQ/viewform?usp=pp_url"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Involved
        </Link>
      </div>
    </section>
  );
}
