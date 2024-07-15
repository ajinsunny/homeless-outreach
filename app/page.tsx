import HeroSection from "../app/components/HeroSection";
import MissionStatement from "../app/components/MissionStatement";
import ImpactSection from "../app/components/ImpactSection";
import VolunteerSection from "../app/components/VolunteerSection";
import GallerySection from "../app/components/GallerySection";
import DonationSection from "../app/components/DonationSection";
import ContactSection from "../app/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto px-4">
        <MissionStatement />
        <ImpactSection />
        <VolunteerSection />
        <GallerySection />
        <DonationSection />
        <ContactSection />
      </div>
    </main>
  );
}
