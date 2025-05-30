'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type LoaderProps = {
  onFinish: () => void;
};

export default function Loader({ onFinish }: LoaderProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStage(1), 300));
    timers.push(setTimeout(() => setStage(2), 900));
    timers.push(setTimeout(() => setStage(3), 1800));
    timers.push(setTimeout(() => {
      onFinish();
    }, 2200));

    return () => timers.forEach(t => clearTimeout(t));
  }, [onFinish]);

  if (stage === 4) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden">
      <div
        className={`
          transition-transform ease-in-out duration-700
          ${stage === 0 ? 'scale-0 opacity-0' : ''}
          ${stage === 1 || stage === 2 ? 'scale-100 opacity-100' : ''}
          ${stage === 3 ? 'scale-[80] opacity-100' : ''}
        `}
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/images/Tagline Round.png"
          alt="Fix it! Forget it!"
          width={180}
          height={150}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
