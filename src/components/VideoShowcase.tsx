import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    title: 'Smart Glass Installation Process',
    description: 'Watch how our expert team installs smart glass technology',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-1'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    title: 'Custom Glass Solutions',
    description: 'Discover our range of custom glass solutions',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-2'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
    title: 'Premium Glass Showcase',
    description: 'Explore our premium glass collection',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-3'
  }
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Installations</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Watch our expert team transform spaces with premium glass solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                <p className="mt-1 text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}