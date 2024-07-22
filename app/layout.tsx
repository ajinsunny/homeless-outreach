import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "3rd Saturday Serve - McPherson Square Park, DC",
  description: "Homeless outreach in McPherson Square Park, DC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
