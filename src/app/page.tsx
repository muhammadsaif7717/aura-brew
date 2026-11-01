"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RESTAURANT_CLIENTS, RestaurantClient, MenuItem, getRestaurantById } from "@/data/restaurants";
import AgencyBar from "@/components/AgencyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import OrderModal from "@/components/OrderModal";
import ReservationModal from "@/components/ReservationModal";

function RestaurantApp() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const clientParam = searchParams.get("client");
  const viewParam = searchParams.get("view");

  const [currentClient, setCurrentClient] = useState<RestaurantClient>(() => {
    if (clientParam) {
      return getRestaurantById(clientParam);
    }
    return RESTAURANT_CLIENTS[0];
  });

  const [isClientMode, setIsClientMode] = useState<boolean>(viewParam === "client");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | undefined>(undefined);

  useEffect(() => {
    if (clientParam) {
      setCurrentClient(getRestaurantById(clientParam));
    }
    if (viewParam === "client") {
      setIsClientMode(true);
    }
  }, [clientParam, viewParam]);

  const handleSelectClient = (id: string) => {
    const found = getRestaurantById(id);
    setCurrentClient(found);
    const newUrl = isClientMode ? `/?client=${id}&view=client` : `/?client=${id}`;
    router.push(newUrl);
  };

  const handleOpenOrder = (item?: MenuItem) => {
    setSelectedMenuItem(item);
    setOrderModalOpen(true);
  };

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-amber-600 selection:text-white text-slate-800">
      {/* Top Agency Switcher Bar (Completely hidden when view=client) */}
      <AgencyBar
        currentClient={currentClient}
        onSelectClient={handleSelectClient}
        isClientMode={isClientMode}
        setIsClientMode={setIsClientMode}
      />

      {/* Main Header / Navigation */}
      <Navbar
        client={currentClient}
        onOpenOrder={() => handleOpenOrder()}
        onOpenReservation={handleOpenReservation}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          client={currentClient}
          onOpenOrder={() => handleOpenOrder()}
          onOpenReservation={handleOpenReservation}
        />

        {/* Dynamic Digital Food Menu */}
        <MenuSection
          client={currentClient}
          onSelectItemForOrder={(item) => handleOpenOrder(item)}
        />

        {/* Why Choose Us & Food App vs Direct Website Comparison */}
        <WhyChooseUs client={currentClient} />

        {/* Customer Reviews Section */}
        <ReviewsSection client={currentClient} />

        {/* Location & Opening Hours */}
        <LocationSection client={currentClient} />
      </main>

      {/* Footer with Smooth Scroll To Top */}
      <Footer
        client={currentClient}
        onOpenOrder={() => handleOpenOrder()}
      />

      {/* Mobile-Only Quick Floating Action */}
      <FloatingCta
        client={currentClient}
        onOpenOrder={() => handleOpenOrder()}
        onOpenReservation={handleOpenReservation}
      />

      {/* 1-Click WhatsApp Food Ordering Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        client={currentClient}
        initialItem={selectedMenuItem}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        client={currentClient}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-amber-600 font-bold">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border-2 border-amber-600 border-t-transparent animate-spin" />
            <span>Loading Gourmet Experience...</span>
          </div>
        </div>
      }
    >
      <RestaurantApp />
    </Suspense>
  );
}

