'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Home() {
  const maskImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const maskImage = maskImageRef.current;
    if (!maskImage) return;

    gsap.fromTo(
      maskImage,
      {
        maskPosition: '0% 0%',
      },
      {
        maskPosition: '0% 100%',
        duration: 1.2,
        ease: 'none',
      }
    );
  });
  return (
    <div className="w-full h-screen p-8 grid place-content-center">
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="w-50 overflow-hidden">
          <Image
            src="/image/black-rose.jpeg"
            width={400}
            height={600}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
        <div
          ref={maskImageRef}
          className="absolute inset-0 bg-white"
          style={{
            maskImage:
              'linear-gradient(180deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 90%)',
            maskSize: '100% 300%',
            maskRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
}
