import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="bg-primary text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Billetterie. Tous droits
              réservés.
            </p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/a-propos" className="hover:text-blue-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-blue-300">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
