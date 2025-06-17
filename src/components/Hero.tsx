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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
          Tingkatkan Kehadiran Online Anda dengan
            <span className="text-blue-600"> Landing Page</span> yang Profesional
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Kami membantu Anda membangun kehadiran online dengan landing page yang menarik, responsif, dan dirancang untuk mengoptimalkan tujuan Anda.
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
            <div className="text-lg font-bold text-blue-600">Landing Page Custom</div>
            <div className="mt-1 text-sm text-gray-600">Desain sesuai kebutuhan Anda</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">Responsif di Semua Perangkat</div>
            <div className="mt-1 text-sm text-gray-600">Nyaman di HP, tablet, dan desktop</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">Optimasi Konversi</div>
            <div className="mt-1 text-sm text-gray-600">Desain yang memaksimalkan hasil</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">Dukungan Ramah & Cepat</div>
            <div className="mt-1 text-sm text-gray-600">Siap membantu Anda kapan saja</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 