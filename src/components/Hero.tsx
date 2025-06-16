import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tingkatkan Bisnis Anda dengan
            <span className="text-blue-600"> Landing Page</span> yang Profesional
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kami membantu bisnis Anda tumbuh dengan landing page yang menarik, 
            responsif, dan mengoptimalkan konversi pelanggan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Mulai Sekarang
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="mt-1 text-sm text-gray-600">Proyek Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">95%</div>
            <div className="mt-1 text-sm text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="mt-1 text-sm text-gray-600">Klien Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="mt-1 text-sm text-gray-600">Dukungan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 