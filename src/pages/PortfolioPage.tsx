import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Portfolio Kami
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Portfolio kami akan segera hadir. Kami sedang menyiapkan showcase terbaik dari karya-karya kami untuk Anda.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage; 