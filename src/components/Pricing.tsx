import React from 'react';

const Pricing = () => {
  const features = [
    "Free Domain .com atau .id",
    "Hosting 500 MB (cukup untuk ±30 Foto Kuota Kerja)",
    "Integrasi Sosial Media & Email",
    "Website dengan SSL (Keamanan Terjamin)",
    "Bandwidth Unlimited",
    "Formulir Kontak Standar",
    "Free Support & Bergaransi",
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Paket Harga
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dapatkan landing page profesional dengan harga terjangkau
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Paket Landing Page</h3>
              <h4 className="text-2xl font-bold text-gray-700">Start From</h4>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                  Rp 450K
                </span>
                <span className="ml-2 text-xl font-semibold text-gray-500 line-through">
                  Rp 600K
                </span>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="block w-full px-6 py-3 text-center text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 