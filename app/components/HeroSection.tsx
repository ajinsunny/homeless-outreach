import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="/hero-image.jpg"
        alt="McPherson Square Park"
        layout="fill"
        objectFit="cover"
      />
      <div className="hero-content">
        <h1>Making a Difference Every 3rd Saturday</h1>
        <h2>Join us in serving the homeless community</h2>
        <button>Get Involved</button>
      </div>
    </section>
  );
}
