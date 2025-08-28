// components/VideoPlaylist.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Testimonial } from "@/data/types/testimonialTypes";
import { PlayCircle } from "lucide-react";

function getVideoIdFromEmbed(url: string): string | null {
  const regExp = /embed\/([^?]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

const VideoPlaylist: React.FC<{ videos: Testimonial[] }> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState<Testimonial>(videos[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Playlist Sidebar */}
      <div className="bg-white rounded-xl shadow p-4 md:col-span-1 h-[500px] overflow-y-auto scrollbar-hide">
        <h2 className="font-bold text-3xl text-gray-800 mb-3">Playlist</h2>
        <ul className="space-y-3">
          {videos.map((video, idx) => {
            const id = getVideoIdFromEmbed(video.video_link);
            const thumbnail = id
              ? `https://img.youtube.com/vi/${id}/mqdefault.jpg`
              : "";

            return (
              <li
                key={idx}
                onClick={() => setCurrentVideo(video)}
                className={`flex gap-3 p-2 rounded-lg cursor-pointer transition ${
                  currentVideo === video ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                {thumbnail && (
                  <div className="relative w-16 h-12 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={thumbnail}
                      alt="Video thumbnail"
                      fill
                      className="rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 text-white">
                      <PlayCircle />
                    </div>
                  </div>
                )}
                <p className="text-sm font-medium text-gray-800">
                  {video.client_name} testimonial
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Video Player */}
      <div className="bg-white rounded-xl shadow p-2 md:col-span-2 flex h-[500px] justify-center">
        <iframe
          width="100%"
          height="100%"
          src={currentVideo.video_link ?? ""}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlaylist;
