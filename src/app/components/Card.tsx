import Image from "next/image";
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
      <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-3">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
