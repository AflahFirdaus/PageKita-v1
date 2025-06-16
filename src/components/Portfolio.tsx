import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioProps {
}

const Portfolio: React.FC<PortfolioProps> = () => {
  const projects = [
    {
      title: "E-Commerce Landing Page",
      description: "Landing page untuk toko online dengan fokus pada konversi penjualan",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "E-Commerce",
    },
    {
      title: "Startup Launch Page",
      description: "Landing page modern untuk peluncuran startup teknologi",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Startup",
    },
    {
      title: "Event Marketing Page",
      description: "Landing page untuk event marketing dengan fokus pada registrasi",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Event",
    },
    {
      title: "SaaS Product Page",
      description: "Landing page untuk produk SaaS dengan fokus pada fitur utama",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "SaaS",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Portfolio Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lihat karya-karya terbaik kami dalam pembuatan landing page
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Lihat Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 