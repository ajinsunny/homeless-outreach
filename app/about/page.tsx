import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative min-h-screen py-16 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-base md:text-lg mb-6">
            Our mission is to extend a hand of compassion to those in need in
            Washington, D.C., every third Saturday. We aim to cultivate a
            community rooted in kindness, offering support, nourishment, and
            dignity to uplift lives and inspire hope.
          </p>
        </div>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeoEctmda3iRUD4eFkLAQFuyqS3xVp8Wvjbtjs6xRCZGUUDmQ/viewform?usp=pp_url"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volunteer With Us
        </Link>
      </div>
    </section>
  );
}
