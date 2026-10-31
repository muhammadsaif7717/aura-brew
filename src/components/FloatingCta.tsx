"use client";

import { RestaurantClient } from "@/data/restaurants";

interface FloatingCtaProps {
  client: RestaurantClient;
}

export default function FloatingCta({ client }: FloatingCtaProps) {
  const defaultMsg = `Hello ${client.name}, I would like to order food / check table availability.`;
  const whatsappUrl = `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <aside aria-label="Mobile WhatsApp Action">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${client.name} on WhatsApp`}
        title="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg active:scale-90 transition-transform duration-150"
      >
        {/* Simple & Clean WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.532 2.016.882 3.149.883 3.182 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm0 10.428c-.987 0-1.921-.295-2.717-.803l-.195-.125-1.428.375.381-1.392-.128-.204c-.557-.887-.852-1.916-.851-2.969.001-2.553 2.078-4.63 4.632-4.63 2.553 0 4.63 2.077 4.63 4.63s-2.077 4.63-4.63 4.63zM16.5 12.049c-.062-.104-.229-.167-.479-.292s-1.479-.729-1.708-.812c-.229-.083-.396-.125-.562.125s-.646.812-.792.979c-.146.167-.292.188-.542.062s-1.058-.39-2.016-1.244c-.745-.664-1.248-1.485-1.394-1.735s-.016-.385.109-.509c.112-.111.25-.292.375-.438s.167-.25.25-.417c.083-.167.042-.312-.021-.438s-.562-1.354-.771-1.854c-.203-.487-.41-.421-.562-.429l-.479-.008c-.167 0-.438.062-.667.312s-.875.854-.875 2.083c0 1.229.896 2.417 1.021 2.583s1.765 2.695 4.276 3.78c.598.258 1.065.412 1.429.528.601.191 1.148.164 1.58.099.482-.072 1.479-.604 1.688-1.188s.208-1.083.146-1.188z" />
          <path d="M12.042 2c-5.518 0-9.998 4.48-9.998 9.998 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.344c1.47.801 3.125 1.226 4.915 1.226 5.518 0 9.998-4.48 9.998-9.998 0-5.518-4.48-9.998-9.998-9.998zm0 18.33c-1.564 0-3.097-.42-4.437-1.215l-.318-.189-3.298.865.881-3.215-.207-.33c-.874-1.391-1.335-3.013-1.335-4.675 0-4.78 3.888-8.668 8.668-8.668 4.78 0 8.668 3.888 8.668 8.668 0 4.78-3.888 8.668-8.668 8.668z" />
        </svg>
      </a>
    </aside>
  );
}

