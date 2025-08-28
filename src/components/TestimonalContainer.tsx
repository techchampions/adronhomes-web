"use client";
import ApiErrorBlock from "@/components/ApiErrorBlock";
import Loader from "@/components/Loader";
import VideoPlaylist from "@/components/TestimonialVideoPlaylist";
import { useGetTestimonials } from "@/data/hooks";
import React from "react";

const TestimonalContainer = () => {
  const { data, isLoading, isError } = useGetTestimonials();
  const videos = data?.data.data ?? [];
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ApiErrorBlock />;
  }
  return <VideoPlaylist videos={videos} />;
};

export default TestimonalContainer;
