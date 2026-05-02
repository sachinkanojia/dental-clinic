import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsApp from './WhatsApp';

export default function Layout() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <WhatsApp />
      <Footer />
    </div>
  );
}
