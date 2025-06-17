import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "PageKita membantu saya membuat landing page yang menarik dan mudah digunakan. Hasilnya, usaha kecil saya jadi lebih dikenal dan saya mulai mendapatkan pelanggan dari internet. Timnya ramah dan sangat membantu dalam prosesnya.",
    },
    {
      content: "Saya menggunakan PageKita untuk membangun landing page personal branding. Desainnya simpel, profesional, dan sesuai dengan apa yang saya inginkan. Timnya cepat tanggap dan mau membantu saya dari awal sampai selesai.",
    },
    {
      content: "Landing page dari PageKita membuat bisnis saya terlihat lebih terpercaya. Prosesnya mudah, komunikasinya lancar, dan saya puas dengan hasil akhirnya. Cocok untuk usaha kecil seperti saya yang baru mulai go online.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Apa Kata Klien Kami?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Testimoni dari klien yang telah menggunakan layanan kami
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <p className="relative text-gray-600 text-lg">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 