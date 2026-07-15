import Hero from "@/components/store/Hero";
import CategoriesGrid from "@/components/store/CategoriesGrid";
import NewArrivals from "@/components/store/NewArrivals";
import CompleteTheLook from "@/components/store/CompleteTheLook";
import SocialGallery from "@/components/store/SocialGallery";
import VisitStore from "@/components/store/VisitStore";

export default function StoreHome() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoriesGrid />
      <NewArrivals />
      <CompleteTheLook />
      <SocialGallery />
      <VisitStore />
    </div>
  );
}
