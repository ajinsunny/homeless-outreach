import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "3rd Saturday Serve",
  description: "Homeless outreach in McPherson Square Park, DC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="relative h-screen overflow-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
