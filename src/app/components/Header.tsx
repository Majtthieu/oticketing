import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Billetterie 2024
        </Link>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
          Connexion
        </button>
      </div>
    </header>
  );
};

export default Header;
