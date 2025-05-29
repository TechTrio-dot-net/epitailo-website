'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Product = {
  title: string;
  image: string;
  imagestep?: string;
  titlestep?: string;
  subtitle: string;
  features: string[];
  water?: string;
  potLife?: string;
  coverage?: string;
  mixRatio?: string;
  shelfLife?: string;
  color: {
    base: string;
    text: string;
    border: string;
    bg: string;
    badgeBg: string;
    from: string;
    to: string;
  };
};


const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  const products = [
    {
      title: 'ET1 - SMALL SIZED FLOOR TILE ADHESIVE',
      image: '/images/ET1.png',
      imagestep: '/images/ET 1 Steps.png',
      titlestep: 'How to Apply - ET1 - SMALL SIZED FLOOR TILE ADHESIVE',
      subtitle: 'TechTile Adhesive',
      features: ['Ready To Use', 'High-quality Bonding Strength', 'Saves Time And Labour'],
      water: '23%–25%',
      potLife: '1.5 hrs @ 23°C',
      coverage: '30–40 sq ft / 20kg @ 6mm',
      color: {
        base: 'sky',
        text: 'text-sky-700',
        border: 'border-sky-200',
        bg: 'bg-sky-50',
        badgeBg: 'bg-sky-500',
        from: 'from-sky-50',
        to: 'to-sky-100',
      },
    },
    {
      title: 'ET2 - MEDIUM SIZED WALL TILE ADHESIVE',
      image: '/images/ET2.png',
      imagestep: '/images/ET 2 Steps.png',
      titlestep: 'How to Apply - ET2 - MEDIUM SIZED WALL TILE ADHESIVE',
      subtitle: 'TechTile Adhesive',
      features: ['Excellent Bond Strength', 'Self-curing & Rapid Setting', 'No Shrinkage, No Cracks'],
      water: '24%–26%',
      potLife: '1.5 - 2 hours @ 23°C',
      coverage: '30–40 sq ft / 20kg @ 6mm',
      color: {
        base: '#4ba25c',
        text: 'text-[#4ba25c]',
        border: 'border-[#4ba25c]',
        bg: 'bg-[#e6f4ea]',
        badgeBg: 'bg-[#4ba25c]',
        from: 'from-[#e6f4ea]',
        to: 'to-[#4ba25c]',
      },
    },
    {
      title: 'ET3 - 4X8 WALL TILES & LARGE FORMAT TILE ADHESIVE',
      image: '/images/ET3.png',
      imagestep: '/images/ET 3 Steps.png',
      titlestep: 'How to Apply - ET3 - 4X8 WALL TILES & LARGE FORMAT TILE ADHESIVE',
      subtitle: 'TechTile Adhesive',
      features: ['Slip-resistant Formula', 'Long-lasting Adhesion', 'Works On Multiple Surfaces'],
      water: '24%–27%',
      potLife: '1.5 – 2 Hours @ 23°C',
      coverage: '30–40 sq ft per 20kg @ 6mm',
      color: {
        base: 'orange',
        text: 'text-orange-500',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        badgeBg: 'bg-orange-500',
        from: 'from-orange-50',
        to: 'to-orange-100',
      },
    },
    {
      title: 'ET4 - HEAVY DUTY STONE ADHESIVE',
      image: '/images/ET4.png',
      imagestep: '/images/ET 4 Steps.png',
      titlestep: 'How to Apply - ET4 - HEAVY DUTY STONE ADHESIVE',
      subtitle: 'TechTile Adhesive',
      features: ['High Compressive Strength', 'Superior Water Resistance', 'Perfect For Indoor & Outdoor Use'],
      water: '26%–28%',
      potLife: '1.5 - 2 hrs @ 23°C',
      coverage: '30–40 sq ft / 20kg @ 6mm',
      color: {
        base: '#7266a1',
        text: 'text-[#7266a1]',
        border: 'border-[#7266a1]',
        bg: 'bg-[#f0eef9]',
        badgeBg: 'bg-[#7266a1]',
        from: 'from-[#f0eef9]',
        to: 'to-[#7266a1]',
      },
    },
    {
      title: 'BLOCK JOINTING MORTAR',
      image: '/images/BJM.png',
      imagestep: '/images/ET 5 Steps.png',
      titlestep: 'How to Apply - BLOCK JOINTING MORTAR',
      subtitle: 'TechTile Adhesive',
      features: ['Pre-mixed, only water to be added', 'Thin joint application (2–3 mm)', 'Excellent adhesion & bonding', 'Crack & shrink resistant', 'Cost-effective & saves time'],
      water: '24%–28%',
      potLife: '2 HOURS',
      mixRatio: '3:1(Powder:Water',
      coverage: '1.5–1.75 m² / 40kg @ 3mm',
      shelfLife: '6 Months',
      color: {
        base: '#a0a0a0',
        text: 'text-[#a0a0a0]',
        border: 'border-[#a0a0a0]',
        bg: 'bg-[#f5f5f5]',
        badgeBg: 'bg-[#a0a0a0]',
        from: 'from-[#f5f5f5]',
        to: 'to-[#a0a0a0]',
      },
    },
    {
      title: 'SP-5000 PREMIUM EPOXY TILE GROUT',
      image: '/images/Grout.png',
      subtitle: 'TechTile Adhesive',
      features: ['100% Stain Free', 'Anti-Bacterial & Anti-Fungal', 'Strong & Durable', 'Chemical & Temperature Resistant', 'Non-Flammable | No Solvents'],
      potLife: '1 hour (approx.)',
      shelfLife: '12 months',
      color: {
        base: 'orange',
        text: 'text-orange-500',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        badgeBg: 'bg-orange-500',
        from: 'from-orange-50',
        to: 'to-orange-100',
      },
    },
  ];

  return (
    <>
      <div className="m-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-8">
        {products.map((product, i) => (
          <div
            key={i}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer bg-white transition p-4"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-56 object-contain"
            />
            <h2 className="mt-4 text-lg font-semibold text-center">
              {product.title.startsWith('ET') ? (
                <div className="flex flex-col items-center space-y-1">
                  <div className="flex overflow-hidden rounded shadow text-sm font-bold">
                    <div className="bg-gray-700 text-white px-2 py-0.5 tracking-tight">
                      {product.title.split(' - ')[0].slice(0, 2)}
                    </div>
                    <div className={`text-white px-2 py-0.5 tracking-tight ${product.color?.badgeBg || 'bg-blue-500'}`}>
                      {product.title.split(' - ')[0].slice(2)}
                    </div>
                  </div>
                  <div className="text-base font-semibold text-center">
                    {product.title.includes(' - ') ? product.title.split(' - ')[1] : product.title}
                  </div>
                </div>
              ) : (
                product.title
              )}
            </h2>

          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white max-w-7xl w-full rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-3xl font-bold z-50"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Left side: Main Product Image */}
              <div className="bg-gray-100 p-6 md:w-1/2 flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={400}
                  height={400}
                  className="w-full max-h-[400px] object-contain"
                />
              </div>

              {/* Right side: Product details + Steps Image */}
              <div className="p-6 md:w-1/2 text-gray-800 font-sans space-y-6 overflow-y-auto max-h-[80vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center space-x-3 flex-wrap">
                  {selectedProduct.title.startsWith('ET') && (
                    <div className="flex overflow-hidden rounded shadow text-lg font-bold mb-2">
                      <div className="bg-gray-700 text-white px-2 py-1 tracking-tight">
                        {selectedProduct.title.split(' - ')[0].slice(0, 2)}
                      </div>
                      <div className={`text-white px-2 py-1 tracking-tight ${selectedProduct.color.badgeBg}`}>
                        {selectedProduct.title.split(' - ')[0].slice(2)}
                      </div>
                    </div>
                  )}

                  <h2 className="text-xl font-bold max-w-full">
                    {selectedProduct.title.includes(' - ')
                      ? selectedProduct.title.split(' - ')[1]
                      : selectedProduct.title}
                  </h2>
                </div>

                {/* Key Features */}
                {selectedProduct.features && selectedProduct.features.length > 0 && (
                  <div>
                    <h4 className={`text-white ${selectedProduct.color.badgeBg} px-2 py-1 rounded inline-block font-semibold text-lg mb-2`}>KEY FEATURES</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specs Grid with 3 columns */}
                <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
                  {selectedProduct.water && (
                    <div>
                      <p className={`text-white ${selectedProduct.color.badgeBg} text-xs font-bold px-2 py-1 rounded inline-block`}>
                        WATER DEMAND
                      </p>
                      <p className="mt-1 font-semibold">{selectedProduct.water}</p>
                    </div>
                  )}
                  {selectedProduct.coverage && (
                    <div>
                      <p className={`text-white ${selectedProduct.color.badgeBg} text-xs font-bold px-2 py-1 rounded inline-block`}>
                        COVERAGE
                      </p>
                      <p className="mt-1 font-semibold">{selectedProduct.coverage}</p>
                    </div>
                  )}
                  {selectedProduct.potLife && (
                    <div>
                      <p className={`text-white ${selectedProduct.color.badgeBg} text-xs font-bold px-2 py-1 rounded inline-block`}>
                        POT LIFE
                      </p>
                      <p className="mt-1 font-semibold">{selectedProduct.potLife}</p>
                    </div>
                  )}
                  {selectedProduct.mixRatio && (
                    <div>
                      <p className={`text-white ${selectedProduct.color.badgeBg} text-xs font-bold px-2 py-1 rounded inline-block`}>
                        MIX RATIO
                      </p>
                      <p className="mt-1 font-semibold">{selectedProduct.mixRatio}</p>
                    </div>
                  )}
                  {selectedProduct.shelfLife && (
                    <div>
                      <p className={`text-white ${selectedProduct.color.badgeBg} text-xs font-bold px-2 py-1 rounded inline-block`}>
                        SHELF LIFE
                      </p>
                      <p className="mt-1 font-semibold">{selectedProduct.shelfLife}</p>
                    </div>
                  )}
                </div>

                {/* Steps Image and Title below */}
                {selectedProduct.imagestep && (
                  <div className="mt-6">
                    <h3 className="mb-4 text-lg font-semibold text-center">{selectedProduct.titlestep || 'Steps to Apply'}</h3>
                    <Image
                      src={selectedProduct.imagestep}
                      alt={`Steps to apply for ${selectedProduct.title}`}
                      width={400}
                      height={400}
                      className="w-full max-h-[400px] object-contain"
                    />
                  </div>
                )}
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductGrid;
