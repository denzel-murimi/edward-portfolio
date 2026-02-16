'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../../../lib/data'; // Adjust path as needed

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    setSelectedImage(prev => prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1);
  };
  
  const goToNext = () => {
    setSelectedImage(prev => prev === null ? null : prev === filteredImages.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="py-20 bg-slate-50" id="gallery">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Visual highlights from my regional dialogues, workshops, and high-level policy engagements.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-legal-navy text-black shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid Layout with Animation */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image with Zoom Effect */}
              <img 
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-yellow-400 text-xs font-bold tracking-wider uppercase mb-1 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  {image.location}
                </p>
                <h3 className="text-white font-semibold text-lg translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.title}
                </h3>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-yellow-400 transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[90vh] relative"
              >
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="mt-4 text-center text-white">
                  <p className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-2">
                    {filteredImages[selectedImage].location}
                  </p>
                  <h3 className="text-xl font-semibold">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    {selectedImage + 1} / {filteredImages.length}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-yellow-400 transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}