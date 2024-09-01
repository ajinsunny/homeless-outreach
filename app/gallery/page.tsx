"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

const images = ["/hero-image.jpg", "/image2.jpeg", "/image3.jpeg"];

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Gallery</h1>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative h-[60vh]">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
