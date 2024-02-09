
import React from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';


const Footer = ({ email, phone, adress, contact }) => {
  const DynamicMapComponent = dynamic(
    () => import('./FootMap'),
    { ssr: false }
  );


  return (
    <footer className="bg-gray-600 text-white p-8">
      <div className="md:flex justify-between">
        <DynamicMapComponent />
        <div className=" w-full md:w-1/2 md:px-12 px-4 flex flex-col justify-center">
          <div className="text-2xl font-bold mt-4">{contact}</div>
          <div>
            <Link href="mailto:sosebbocas@gmail.com">
              Email: sosebbocas@gmail.com
            </Link>
            <br />
            <Link href="https://wa.me/50767987980">Phone: +50767987980 (WhatsApp)</Link>
            <br />
            <Link href="https://www.google.com/maps/place/9%C2%B024'21.7%22N+82%C2%B015'02.8%22W/@9.4058516,-82.2526802,17z/">Address: Bluff Beach, Isla Colón, Bocas del Toro, Panama</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

