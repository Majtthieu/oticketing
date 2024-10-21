import Image from "next/image";
import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full">
      <Image
        src="/images/background-cta.jpg"
        alt="Fond CTA"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-8">
        <div className="text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Découvrez nos événements exceptionnels
          </h2>
          <p className="text-xl md:text-2xl">
            Réservez vos billets dès maintenant et vivez des moments
            inoubliables
          </p>
        </div>
        <div className="flex justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
