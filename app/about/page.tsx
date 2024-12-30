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
        <div className="max-w-3xl mt-8 space-y-4">
          <p className="text-base md:text-lg">
            Serving the less fortunate has always been something I have done. In
            my younger years while in Pennsylvania, I always found ways to give
            back. And as I grew up and throughout the years and when I moved to
            DC, my platform to serve obviously became much larger.
          </p>

          <p className="text-base md:text-lg">
            In 2016, my friend Corey asked me to volunteer with him in DC. And
            we began serving the homeless with two small baskets, handing out
            some toiletries and daily breads. I just saw this as an opportunity
            to grow and develop this. And Corey and I decided to take over two
            opposite ends of McPherson Square Park where we could reach more
            people. He was starting with his church and I was going to start
            with a group of volunteers from a few churches and other friends
            that I had in the area.
          </p>

          <p className="text-base md:text-lg">
            Typically, we would serve around the 100 people when Corey and I
            divided up. But then we switched to the other side of McPherson
            Square, the donations increased as did the volunteers. And now, in
            2024, we saw an uptick in the less fortunate in our lines. We now
            serve up to an average of 200 people per third Saturday. And we
            average around 30 volunteers per third Saturday as well. And the
            donations have increased as well. I have neighbors donating bags and
            bags full of donations. And this is all a testament of the heart and
            character that people have for those that are less fortunate, and I
            am truly blessed to be leading this organization.
          </p>

          <p className="text-base md:text-lg">
            But I use the word “leading” lightly because it takes everyone to
            make the third Saturday come together. Countless donations and
            volunteers helping out on game day is what truly makes this day so
            special and rewarding for us. We give them the goods, but I find it
            very rewarding to give to them—even if it just makes a small
            difference in their lives, but to me it is bigger than the goods
            donated. I strongly believe that showing up and being consistent is
            what truly matters to the less fortunate! And I love our team of
            volunteers and the heart behind their giving and showing up early on
            those 3rd Saturdays.
          </p>
        </div>
      </div>
    </section>
  );
}
