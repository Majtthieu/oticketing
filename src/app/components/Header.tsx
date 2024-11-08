"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "./Container";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-80 backdrop-blur-sm text-white">
      <Container className="p-4">
        <div className="flex justify-around items-center">
          <Link href="/" className="text-2xl font-bold">
            2024 Billetterie
          </Link>
          <nav className="flex gap-4 items-center">
            {isLoggedIn ? (
              <>
                <button className="bg-sky-800 text-white px-4 py-2 rounded hover:bg-sky-900 transition-colors font-semibold">
                  Panier (0)
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-semibold"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-semibold"
                >
                  Connexion
                </button>
                <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-semibold">
                  Inscription
                </button>
              </>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
