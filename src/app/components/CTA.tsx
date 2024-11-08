import Image from "next/image";
import React from "react";
import Container from "./Container";

const CTA: React.FC = () => {
  return (
    <Container>
      <div className="relative h-[600px] w-full">
        <Image
          src="/images/banner.webp"
          alt="Fond CTA"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center p-8 gap-8">
          <div className="bg-white/90 px-6 py-3 rounded-xl">
            <div className="text-black text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
                Découvrez nos événements exceptionnels
              </h2>
              <p className="font-ops text-xl md:text-2xl">
                Réservez vos billets dès maintenant et vivez des moments
                inoubliables
              </p>
            </div>
          </div>
          <button className="mx-auto bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors">
            Accédez à nos offres
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CTA;
