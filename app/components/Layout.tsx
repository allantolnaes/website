import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">  {/* Full height flex container */}
      <Navbar />
      <main className="flex-grow">  {/* Takes up remaining space */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
