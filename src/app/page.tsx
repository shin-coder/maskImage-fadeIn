'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const maskImageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskImageNextRef = useRef<HTMLDivElement>(null);
  const imageNextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const maskImage = maskImageRef.current;
    const image = imageRef.current;
    if (!maskImage || !image) return;

    gsap.fromTo(
      image,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.8,
        ease: 'power2.out',
        delay: 0.3,
      }
    );

    gsap.fromTo(
      maskImage,
      {
        maskPosition: '0% 0%',
      },
      {
        maskPosition: '0% 100%',
        duration: 1.8,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  });

  useGSAP(() => {
    const maskImageNext = maskImageNextRef.current;
    const imageNext = imageNextRef.current;
    if (!maskImageNext || !imageNext) return;

    gsap.fromTo(
      imageNext,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.8,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: imageNextRef.current,
          start: 'top+=100 bottom',
          end: 'bottom bottom',
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      maskImageNext,
      {
        maskPosition: '0% 0%',
      },
      {
        maskPosition: '0% 100%',
        duration: 1.8,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: imageNextRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          // markers: true,
        },
      }
    );
  });

  return (
    <>
      <div className="w-full h-screen p-8 grid place-content-center">
        <div className="flex gap-8 items-end">
          <div className="max-w-4xl mx-auto relative">
            <div className="w-80 overflow-hidden" ref={imageRef}>
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
                  // 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 90%)',
                  'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 80%)',
                maskSize: '100% 280%',
                maskRepeat: 'no-repeat',
              }}
            ></div>
          </div>
          <p className="w-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            unde ipsum sit rem, quas nostrum nesciunt minus delectus iure
            deleniti animi, minima nam. Fugit sapiente quae distinctio tempora
            eum sunt!
          </p>
        </div>
      </div>
      <div className="w-full h-screen p-8 grid place-content-center">
        <div className="flex gap-8 items-end">
          <div className="max-w-4xl mx-auto relative">
            <div className="w-80 overflow-hidden" ref={imageNextRef}>
              <Image
                src="/image/black-rose.jpeg"
                width={400}
                height={600}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              ref={maskImageNextRef}
              className="absolute inset-0 bg-white"
              style={{
                maskImage:
                  // 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0) 90%)',
                  'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 55%, rgba(0, 0, 0, 0) 80%)',
                maskSize: '100% 280%',
                maskRepeat: 'no-repeat',
              }}
            ></div>
          </div>
          <p className="w-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            unde ipsum sit rem, quas nostrum nesciunt minus delectus iure
            deleniti animi, minima nam. Fugit sapiente quae distinctio tempora
            eum sunt!
          </p>
        </div>
      </div>
    </>
  );
}
