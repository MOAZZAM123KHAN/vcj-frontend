'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/jwellry CDN 1.jpg',
    alt: 'Premium Gold Bridal Necklace Set at VCJ Jewellers Jaunpur',
    title: 'Bridal Gold Necklace Set',
  },
  {
    src: '/images/jwellry CDN2.jpg',
    alt: 'Exquisite Diamond and Gold Rings Collection at Nakhas Jaunpur Showroom',
    title: 'Exquisite Gold Rings',
  },
  {
    src: '/images/jwellry cdn 3.jpg',
    alt: 'Traditional Gold Jhumka Earrings with BIS Hallmarking',
    title: 'Traditional Gold Jhumkas',
  },
  {
    src: 'https://images.unsplash.com/photo-1573408212130-9b4b73b22e17?q=80&w=2070&auto=format&fit=crop',
    alt: 'Skilled Goldsmith Handcrafting Gold Ornaments at Vimal Chhaganlal Jewellers',
    title: 'Legacy Purity Handcrafting',
  },
  {
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000&auto=format&fit=crop',
    alt: 'Glistening Diamond rings on display in VCJ Jewellers Gallery',
    title: 'Certified Diamond Rings',
  },
  {
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2000&auto=format&fit=crop',
    alt: 'Indian Wedding Gold Jewellery sets at VCJ Showroom',
    title: 'Royal Indian Wedding Set',
  },
];

export function StoreGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden bg-slate-900 aspect-[4/3] border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-500 rounded-none"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <span className="text-[10px] text-yellow-500 font-bold tracking-widest uppercase mb-1 block">VCJ Showroom</span>
                  <h4 className="text-white font-serif font-bold text-lg">{img.title}</h4>
                </div>
                <div className="w-10 h-10 bg-yellow-600 text-slate-900 flex items-center justify-center rounded-none shadow-lg">
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm select-none transition-all duration-300">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] text-slate-400 hover:text-white transition-colors p-2"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation - Left */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 z-[110] text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 md:p-4 rounded-none transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Image Container */}
          <div className="relative w-[90vw] h-[75vh] max-w-5xl flex flex-col items-center justify-center">
            <div className="relative w-full h-[65vh]">
              <Image
                src={GALLERY_IMAGES[currentIndex].src}
                alt={GALLERY_IMAGES[currentIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>
            
            {/* Title / Description */}
            <div className="mt-4 text-center text-slate-200">
              <p className="font-serif text-lg md:text-xl font-bold text-yellow-500">
                {GALLERY_IMAGES[currentIndex].title}
              </p>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl px-4 mx-auto">
                {GALLERY_IMAGES[currentIndex].alt}
              </p>
            </div>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 z-[110] text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 md:p-4 rounded-none transition-all"
            aria-label="Next Image"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Slide Indicator */}
          <div className="absolute bottom-6 text-sm text-slate-500 font-mono">
            {currentIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
}
