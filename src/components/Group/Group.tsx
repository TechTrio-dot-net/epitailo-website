'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Group() {
  return (
    <div className="relative bg-[#898989] flex h-[600px] md:h-[700px] overflow-hidden">
      
      {/* Right-Side Background Image */}
      <div className="absolute ml-335 transform -translate-y-1/2 w-[300px] md:w-[500px] z-40 mt-22">
        <Image
          src="/images/ISO.png" // Replace with your actual image path
          alt="Background Accent"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Foreground Product Image with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className=" mt-55 ml-52 relative w-full max-w-6xl z-10 "
      >
        <Image
          src="/images/ET 1 to 4 BJM.png"
          alt="Our Products"
          layout="responsive"
          width={1600}
          height={900}
        />
      </motion.div>
    </div>
  );
}
