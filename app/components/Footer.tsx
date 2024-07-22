import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-transparent text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-2 md:mb-0 flex flex-col items-center">
            <h5 className="font-bold text-lg mb-2">Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001392541775!2d-77.03437718464955!3d38.90122297957057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c9351e9e2d%3A0xa7e77f9b4c32e0f!2sMcPherson%20Square!5e0!3m2!1sen!2sus!4v1623750945734!5m2!1sen!2sus"
              width="50%"
              height="100"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 mb-2 md:mb-0 flex flex-col items-center">
            <h5 className="font-bold text-lg mb-2">Sponsors</h5>
            <div className="flex space-x-4">
              <img src="/sponsor1.png" alt="Sponsor 1" className="h-16" />
              <img src="/sponsor2.png" alt="Sponsor 2" className="h-16" />
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-2 md:mb-0 flex flex-col items-center">
            <h5 className="font-bold text-lg mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 3rd Saturday Serve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
