"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Video {
  id: string;
  url: string;
  reelNumber?: number;
}

export default function Reel() {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);
  const scrollSpeed = 0.5; // slower scroll speed for smoothness

  // Fetch videos
  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      try {
        const videosRef = collection(db, "videos");
        const q = query(videosRef, orderBy("reelNumber", "asc"));
        const querySnapshot = await getDocs(q);
        const videosData: Video[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          videosData.push({
            id: doc.id,
            url: data.url,
            reelNumber: data.reelNumber,
          });
        });
        setVideoList(videosData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  // Auto scroll function
  const autoScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    container.scrollLeft += scrollSpeed;

    // Loop smoothly without jumps
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }

    rafId.current = requestAnimationFrame(autoScroll);
  }, [scrollSpeed]);

  // Start auto-scroll on load and when videos available
  useEffect(() => {
    if (!loading && videoList.length > 0) {
      rafId.current = requestAnimationFrame(autoScroll);
    }
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [loading, videoList, autoScroll]);

  // Pause auto scroll on hover/focus
  const handleMouseEnter = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  // Resume auto scroll on mouse leave/blur
  const handleMouseLeave = () => {
    if (!loading && videoList.length > 0 && rafId.current === null) {
      rafId.current = requestAnimationFrame(autoScroll);
    }
  };

  // Scroll left/right buttons
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  // Video hover play/pause and click mute toggle
  const handleVideoMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };
  const handleVideoMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  };
  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.muted = !video.muted;
  };

  if (loading) {
    return (
      <section className="w-full py-12 px-4 bg-[#fafafa] overflow-hidden mb-130 text-center">
        <p>Loading reels...</p>
      </section>
    );
  }

  if (videoList.length === 0) {
    return (
      <section className="w-full py-12 px-4 bg-[#fafafa] overflow-hidden mb-130 text-center">
        <p>No reels found.</p>
      </section>
    );
  }

  return (
    <section className="w-full py-12 px-4 bg-[#B3B3B3] overflow-hidden mb-130">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-black">Reels</h2>
          </div>
          <a
            href="https://www.instagram.com/epitailo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-orange-600 font-semibold cursor-pointer"
          >
            Watch More <ArrowRight className="ml-1 w-5 h-5" />
          </a>

        </div>

        {/* Reels Section */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow p-2 rounded-full z-10"
          >
            <ArrowLeft className="text-black w-5 h-5" />
          </button>

          {/* Scrollable Reels */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden no-scrollbar space-x-4 px-8 touch-pan-x"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
          >
            {videoList.map((item) => (
              <div
                key={item.id}
                className="w-48 flex-shrink-0 rounded-xl overflow-hidden bg-white border shadow-sm"
              >
                <div className="aspect-[9/16] overflow-hidden bg-black relative cursor-pointer">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                    onMouseEnter={handleVideoMouseEnter}
                    onMouseLeave={handleVideoMouseLeave}
                    onClick={handleVideoClick}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow p-2 rounded-full z-10"
          >
            <ArrowRight className="text-black w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
